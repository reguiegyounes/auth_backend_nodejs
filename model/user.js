  
const mongoose =require('mongoose');

const Schema=mongoose.Schema;

const userSchema =new Schema(
    {
        email: {
            type:String,
            required:true,
            unique:true,
            minlength:3
        },
        password: {
            type:String,
            required:true,
            minlength:3
        },
        created_at:{
            type:Date,
            default:Date.now
        }
    }
);

const User =mongoose.model('User',userSchema);
module.exports =User;