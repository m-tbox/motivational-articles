import express from "express"
import User from '../models/users'
import Article from "../models/article"
import { checkAuth } from "../middleware/auth"
import { stripe } from "../utils/stripe"
import { SubscriptionPlans } from "../enums"

const router = express.Router()

router.get("/", checkAuth, async (req, res) => {
    const user = await User.findOne({ email: req.user })

    const subscriptions = await stripe.subscriptions.list(
        {
            customer: user.stripeCustomerId,
            status: "all",
            expand: ["data.default_payment_method"]
        },
        {
            apiKey: process.env.STRIPE_SECRET_KEY
        }
    )

    // User does not have subscriptions
    if (!subscriptions.data.length) {
        return res.json([])
    }

    //@ts-ignore
    const plan = subscriptions.data[0].plan.nickname

    if (plan === SubscriptionPlans.Basic) {
        const articles = await Article.find({ access: SubscriptionPlans.Basic })
        return res.json(articles)
    } else if (plan === SubscriptionPlans.Standard) {
        const articles = await Article.find(
            {
                access: { $in: [SubscriptionPlans.Basic, SubscriptionPlans.Standard] }
            }
        )
        return res.json(articles)
    } else {
        const articles = await Article.find({})
        return res.json(articles)
    }
})

router.get("/:id", checkAuth, async (req, res) => {
    const articleId = req.params.id

    try {
        const article : any = await Article.findById(articleId)
        return res.json(article)

    } catch (error) {
        return res.json(error)
    }
})

export default router