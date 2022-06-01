import mongoose from "mongoose";
import { SubscriptionPlans } from "../enums";
const { Schema } = mongoose;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    access: {
        type: String,
        enum: [SubscriptionPlans.Basic, SubscriptionPlans.Standard, SubscriptionPlans.Premium],
        required: true
    }
})

export default mongoose.model("Article", articleSchema)