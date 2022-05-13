import express from "express"
import { body, validationResult } from "express-validator"
import User from '../models/users'
import bcrypt from "bcryptjs"
import { checkAuth, getAuthToken } from "../middleware/auth";

const router = express.Router()

interface UserResponse {
    data: {
        token?: string
        user: {
            id: string,
            email: string,
        }
    } | null;
    errors: { msg: string }[] | null;
}

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

            const resData: UserResponse = { errors, data: null }
            return res.json(resData);
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email })

        if (user) {
            const resData: UserResponse = {
                errors: [
                    {
                        msg: "Email already exist",
                    },
                ],
                data: null
            };

            return res.json(resData);
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            email,
            password: hashedPassword
        })

        const token = await getAuthToken(newUser.email);

        const resData: UserResponse = {
            errors: [],
            data: {
                token,
                user: {
                    id: newUser._id,
                    email: newUser.email
                }
            }
        };

        res.json(resData)
    });


router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        const resData: UserResponse = {
            errors: [
                {
                    msg: "Invalid credentials"
                }
            ],
            data: null
        };

        return res.json(resData)
    }

    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched) {
        const resData: UserResponse = {
            errors: [
                {
                    msg: "Invalid credentials"
                }
            ],
            data: null
        };

        return res.json(resData)
    }

    const token = await getAuthToken(user.email);

    const resData: UserResponse = {
        errors: [],
        data: {
            token,
            user: {
                id: user._id,
                email: user.email
            }
        }
    };

    return res.json(resData)

})

router.get("/checkAuth", checkAuth, async (req, res) => {
    const user = await User.findOne({ email: req.user });

    const resData: UserResponse = {
        errors: [],
        data: {
            user: {
                id: user._id,
                email: user.email
            }
        }
    };

    return res.json(resData)
});



export default router