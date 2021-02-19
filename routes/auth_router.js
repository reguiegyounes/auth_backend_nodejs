const router =require('express').Router();
const User=require('../model/user');


router.post('/register',async(req,res)=>{
    const user=new User({
        email:req.body.email,
        password:req.body.password
    });
    try {
        const userSaved=await user.save();
        res.send(userSaved);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports=router;