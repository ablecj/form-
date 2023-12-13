import mongoose from "mongoose";


const useSchema = mongoose.Schema(
    {
        firstname:{
            type: String,
            required: true,
        },
        secondname:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
        },
        address:{
            type: String,
            required: true,
        }
    },
    {
        timeStamps: true,
    }   
)