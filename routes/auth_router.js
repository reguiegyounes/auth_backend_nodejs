const router =require('express').Router();
const {registerValidation}=require('../util/validation');
const User=require('../model/user');



router.post('/register',async(req,res)=>{
    
    const {error}=registerValidation(req.body);
    
    if(error)
        return res.status(404).send(error.details[0].message);

    //checking if the user is already in the database
    const emailExist=await User.findOne({email:req.body.email});
    if(emailExist)
        return res.status(404).send('Email already exist');

    // add user
    const user=new User({
        email:req.body.email,
        password:req.body.password
    });
    try {
        const userSaved=await user.save();
        res.send(userSaved);
    } catch (err) {
        res.send(err);
    }
});

module.exports=router;