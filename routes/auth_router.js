const router =require('express').Router();
const bcrypt=require('bcryptjs');
const {registerValidation,loginValidation}=require('../util/validation');
const User=require('../model/user');



router.post('/register',async(req,res)=>{
    
    const {error}=registerValidation(req.body);
    
    if(error)
        return res.status(404).send(error.details[0].message);

    //checking if the user is already in the database
    const emailExist=await User.findOne({email:req.body.email});
    if(emailExist)
        return res.status(404).send('Email already exist');

    //hash password
    const salt =await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,salt);

    // add user
    const user=new User({
        email:req.body.email,
        password:hashedPassword,
        salt:salt
    });
    try {
        const userSaved=await user.save();
        res.send({email:userSaved.email});
    } catch (err) {
        res.send(err);
    }
});


router.post('/login',async(req,res)=>{
    
    const {error}=loginValidation(req.body);
    
    if(error)
        return res.status(404).send(error.details[0].message);

    //checking if the user is exist
    const getUser=await User.findOne({email:req.body.email});
    if(!getUser)
        return res.status(404).send('Email not found');

    //Password is correct
    const isValid=await bcrypt.compare(req.body.password,getUser.password);
    if(!isValid) return res.status(404).send('Invalid password');


    return res.send('logged in');
});

module.exports=router;