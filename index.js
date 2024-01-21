//write basic express boilerplate code.

const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("haa haa")
})

app.listen(3000,()=>{
    console.log("server created");
})