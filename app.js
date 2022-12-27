const express = require('express')
const dotenv=require('dotenv').config();
const openaiRouter=require('./openaiRouter')

const app = express()
 const port=process.env.PORT  ||3000;
 app.set('view engine', 'ejs');
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(express.static('public'));


 app.use('/',openaiRouter)

app.listen(port,()=>{
    console.log(`Server start on PORT : ${port}`)
})