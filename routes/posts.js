const router =require('express').Router();
const User=require('../model/user');
const Post=require('../model/post');
const {isLoggedIn}=require('../middleware/verifyToken');
const {createPostValidation}=require('../util/validation');

router.post('/create',isLoggedIn,async(req,res)=>{
    const {error}=createPostValidation(req.body);
    
    if(error)
        return res.status(404).send(error.details[0].message);

    const getUser=await User.findById(req.user.id);
    if(!getUser)
        return res.status(404).send('User not found');
    const post=new Post({
        title:req.body.title,
        description:req.body.description,
        user:req.user.id
    });

    try {
        const postSaved=await post.save();
        getUser.posts.push(postSaved);
        await getUser.save();
        res.send({title:postSaved.title,description:postSaved.description});
    } catch (err) {
        res.send(err);
    }
});




module.exports=router;