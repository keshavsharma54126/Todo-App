//write basic express boilerplate code.
//validate inputs with zod

const express = require('express');
const {createTodo} = require('./types');
const {updateTodo} = require('./types');
const {todo} = require("./db")

const app = express();
app.use(express.json());



app.post('/todo',async(req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.json({
            msg:"you send the wrong details"
        })
        return;
    }
    //put it in mongodb
   await todo.create({
        title:createPayload.title,
        descryption:createPayload.descryption,
        completed: false
    })
    res.json({
        msg:"todo created"
    })

})


app.get('/todo',async(req,res)=>{
    const todos = await todo.find({});
    res.json({
         todos
    })
})

app.put('/completed',async(req,res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.json({
            msg:"you send the wrong details"
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"todo marded as completed"
    })


})

app.listen(3000,()=>{
    console.log("server created");
})