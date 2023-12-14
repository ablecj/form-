import mongoose from "mongoose";


const userSchema = mongoose.Schema(
    {
        
        firstname:{
            type: String,
            required: true,
        },
        secondname:{
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            // unique: true 
        },
        address:{
            type: String,
            required: true,
        }
    },
    {
        timeStamps: true,
    }   
);


export const User = mongoose.model('User',userSchema);