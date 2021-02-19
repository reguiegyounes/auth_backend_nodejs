const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(express.json());

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
app.get('/', (req, res) => {
    return res.send('<h2>Welcome to Express App<h2>');
})



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

