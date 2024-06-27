const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');


const app = express();

app.set('view engine', 'ejs');
app.listen(3000);


app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('homepage');
});




