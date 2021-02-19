//Server generated
var express = require('express');
var app = express();


app.use(express.json());

app.get('/', (req, res) => {
    return res.send('<h2>Welcome to Express App<h2>');
})

var Port = process.env.PORT || 3000;
var IP = process.env.IP || 'localhost';
app.listen(Port, IP, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log('Server is listening at ' + IP + ':' + Port);
    }
});