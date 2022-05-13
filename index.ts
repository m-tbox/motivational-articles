import express from "express";
import authRoutes from './routes/auth';
import subscriptionRoutes from './routes/subscription';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

mongoose.connect('mongodb+srv://mango:d7Emn32s4@articlesapp.ecf1x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' as string)
    .then(() => {
        console.log('Connetect to DB')

        const app = express();

        app.use(express.json());
        app.use(cors());
        app.use("/auth", authRoutes);
        app.use("/subscription", subscriptionRoutes);

        app.listen(8080, () => {
            console.log('Now listening')
        })
    })
    .catch((error) => { 
        console.log(error)
        throw new Error(error)
     })