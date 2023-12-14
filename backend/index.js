import express, { response } from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
// import { User } from './Models/userModel.js';
import userRouter from './Routes/userRoute.js'
import cors from 'cors';

const app = express();
dotenv.config();

// Middleware for parsing the body 
app.use(express.json());

// middilewares for handling cors policy
app.use(cors());

app.get('/',(req,res)=>{
    console.log(res)
    return res.status(200).send('Welcome')
});

app.use('/user', userRouter)


const PORT =  8000;

// mongodb connection
const MONGO_URI = process.env.MONGODB_URL
mongoose
    .connect(MONGO_URI)
    .then(()=>{
        console.log('App connected to database')
        
        app.listen(PORT,()=>{
            console.log(`App listen to port: ${PORT}`);
        });
        
    })
    .catch((error)=>{
        console.log(error)
    })


