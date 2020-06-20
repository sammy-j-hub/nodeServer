const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');
require('dotenv').config()

//Middle ware body parser 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Posts routes
const postsRoute = require('./routes/posts');
// const { Router } = require('express');

//Middlewares
app.use('/posts', postsRoute);

//create routes 
app.get('/',(req,res)=>{
    res.send("We are home!");
});

//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },  ()=>{
    console.log('connected to DB');
});
//listen
app.listen(3000,);