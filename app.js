const express = require('express'); 
const cors = require('cors'); 
const app = express();  

app.use(cors()); 

app.get("/", (req, res) => {
    res.status(200).send('Shop API rendered a welcome message to you!');
    //.json({
     //   message: 'Shop API rendered a welcome message to you!'
   // });
   
});



module.exports = app;