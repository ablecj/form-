import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();



app.get('/',(req,res)=>{
    console.log(res)
    return res.status(200).send('Welcome')
});


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


