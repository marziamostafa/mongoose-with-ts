import { Schema } from "mongoose";
import { IUser } from "./user.interface";

// creating schema using interface



export const userSchema =new Schema<IUser>({

    id : {
        type : String,
        required : true ,
        unique : true
    },
    name : {
        firstName :{
            type : String,
            required : true
        },
        middleName : {
            type : String,
        },
        lastName : {
           type : String,
           required : true
        },
        
    },
    role : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        
    },
    dateaOfBirth : {
        type : String,
        
    },
    gender : {
        type : String,
        enum : ['male' ,'female']
    },
    contactNo : {
        type : String,
        required : true
    },
    emergencyContactNo  : {
        type : String,
        
    },
    presentAddress : {
        type : String,
        required : true
    },
    permanentAddress : {
        type : String,
        required : true
    },
    

})