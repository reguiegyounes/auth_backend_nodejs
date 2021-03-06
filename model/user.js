  
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
        salt: {
            type:String,
            required:true
        },
        created_at:{
            type:Date,
            default:Date.now
        },
        posts:[ {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }]
    }
);

const User =mongoose.model('User',userSchema);
module.exports =User;