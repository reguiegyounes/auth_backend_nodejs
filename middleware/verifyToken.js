const jwt =require('jsonwebtoken');

const notLoggedIn=(req,res,next)=> {
    const token=req.header('auth_token');
    if(token){
        try {
            const verified =jwt.verify(token,process.env.KEY_SECRET);
            return res.status(400).send('You are logged in');
        } catch (error) {
            res.status(400).send('Invalid token')
        }
    }
    next();
}

const isLoggedIn=(req,res,next)=> {

    const token=req.header('auth_token');
    if(!token) return res.status(401).send('Access Denied');
    
    try {
        const verified =jwt.verify(token,process.env.KEY_SECRET);
        req.user=verified;
    } catch (error) {
        res.status(400).send('Invalid token')
    }
    next();
}


module.exports.isLoggedIn=isLoggedIn;
module.exports.notLoggedIn=notLoggedIn;