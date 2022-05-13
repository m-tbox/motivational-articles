import express from "express"
import { body, validationResult } from "express-validator"
import User from '../models/users'
import bcrypt from "bcryptjs"
import JWT from "jsonwebtoken"
import { checkAuth, getAuthToken } from "../middleware/auth";

const router = express.Router()

router.post('/signup',
    body("email").isEmail().withMessage("The email is invalid"),
    body("password").isLength({ min: 6 }).withMessage("The password is too short, should be at least 6 character"),
    async (req, res) => {

        const validationErrors = validationResult(req);

        if (!validationErrors.isEmpty()) {
            const errors = validationErrors.array().map(error => {
                return {
                    msg: error.msg
                }
            });

            return res.json({ errors, data: null });
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email })

        if (user) {
            return res.json({
                errors: [
                    {
                        msg: "Email already exist",
                    },
                ],
                data: null
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            email,
            password: hashedPassword
        })

        const token = await getAuthToken(newUser.email);

        res.json({
            errors: [],
            data: {
                token,
                user: {
                    id: newUser._id,
                    email: newUser.email
                }
            }
        })
    });


router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.json({
            errors: [
                {
                    msg: "Invalid credentials"
                }
            ],
            data: null
        })
    }

    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched) {
        return res.json({
            errors: [
                {
                    msg: "Invalid credentials"
                }
            ],
            data: null
        })
    }

    const token = await getAuthToken(user.email);

    return res.json({
        errors: [],
        data: {
            token,
            user: {
                id: user._id,
                email: user.email
            }
        }
    })

})

router.get("/checkAuth", checkAuth, async (req, res) => {
    const user = await User.findOne({ email: req.user });

    return res.json({
        errors: [],
        data: {
            user: {
                id: user._id,
                email: user.email
            }
        }
    })
});



export default router