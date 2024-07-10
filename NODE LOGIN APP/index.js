//import express from 'express';//es7
const express = require('express');//es6
const app = express();

//connect to frontend
app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/"+"login.html");
})

//server logic
app.listen(4000,()=>{
    console.log("server running on port 4000");
})