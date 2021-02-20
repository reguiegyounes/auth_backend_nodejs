  
const mongoose =require('mongoose');

const Schema=mongoose.Schema;

const postSchema =new Schema(
    {
        title: {
            type:String,
            required:true,
            minlength:3
        },
        description: {
            type:String,
            required:true,
            minlength:3
        },
        created_at:{
            type:Date,
            default:Date.now
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

const Post =mongoose.model('Post',postSchema);
module.exports =Post;