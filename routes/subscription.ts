import express from "express"
import User from '../models/users'
import { checkAuth } from "../middleware/auth";
import { stripe } from "../utils/stripe";
import { CLIENT_BASE_URL } from "../constants";

const router = express.Router()

router.get("/prices", checkAuth, async (req, res) => {
    const prices = await stripe.prices.list({
        apiKey: process.env.STRIPE_SECRET_KEY
    });

    return res.json(prices);
})

router.post("/session", checkAuth, async (req, res) => {
    const user = await User.findOne({email: req.user})

    const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [{
            price: req.body.priceId,
            quantity: 1
        }],
        success_url: `${CLIENT_BASE_URL}/articles`,
        cancel_url: `${CLIENT_BASE_URL}/article-plans`,
        customer: user.customerStripeId
    }, {
        apiKey: process.env.STRIPE_SECRET_KEY
    })

    res.json(session)
})

export default router;