const express = require('express');
const mongoose = require('mongoose');
const userRouter=require('./routes/auth_router');
const verifyToken=require('./middleware/verifyToken');
require('dotenv').config();
const app = express();
app.use(express.json());
const User=require('./model/user');

//connect with mongoDB
const uri =process.env.DB;
mongoose.connect(uri,
    {useNewUrlParser:true
    ,useCreateIndex:true
    , useUnifiedTopology:true
    }
)
const connection =mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfuly")
})

//routes
app.get('/',verifyToken, (req, res) => {
    return res.send('<h2>Welcome to Express App<h2>');
})
app.use('/auth',userRouter);



// run server
var Port = process.env.PORT || 3000;
var IP = process.env.IP || 'localhost';
app.listen(Port, IP, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log('Server is listening at ' + IP + ':' + Port);
    }
});

