const express = require('express')
const dotenv=require('dotenv').config();
const path = require('path');
const openaiRouter=require('./openaiRouter')

const app = express()
 const port=process.env.PORT  ||3000;
 
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(express.static(path.join(__dirname,"/public")));

 app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"/public/index.html"))

 })

 app.use('/',openaiRouter)

app.listen(port,()=>{
    console.log(`Server start on PORT : ${port}`)
})
