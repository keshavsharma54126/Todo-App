//write basic express boilerplate code.
//validate inputs with zod

const express = require('express');
const {createTodo} = require('./types');
const {updateTodo} = require('./types');

const app = express();
app.use(express.json());



app.post('/todo',(req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.json({
            msg:"you send the wrong details"
        })
        return;
    }
    //put it in mongodb

    
})


app.get('/todo',(req,res)=>{
    res.send("haa haa")
})

app.put('/completed',(req,res)=>{
    const updatePayload = req.body;
    const parsePayload = updatePayload.safeParse(updatePayload);
    if(!parsePayload.success){
        res.json({
            msg:"you send the wrong details"
        })
        return;
    }
    
})

app.listen(3000,()=>{
    console.log("server created");
})