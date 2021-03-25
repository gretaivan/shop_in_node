const express = require('express'); 
const cors = require('cors'); 
const app = express();  

app.use(cors()); 

app.use((req, res) => {
    res.status(200).json({
        message: 'Shop API rendered a welcome message to you!'
    });
});



module.exports = app;