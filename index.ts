import express from "express";
import authRoutes from './routes/auth';
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect('mongodb+srv://mango:d7Emn32s4@articlesapp.ecf1x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' as string)
    .then(() => {
        console.log('Connetect to DB')

        const app = express();

        app.use(express.json());
        app.use("/auth", authRoutes);

        app.listen(8080, () => {
            console.log('Now listening')
        })
    })
    .catch((error) => { 
        console.log(error)
        throw new Error(error)
     })