

const express = require('express');

const app = express();

app.use(express.json());

const {createTodo, UpdateTodo} = require('./types');
const { todo } = require('./db');

app.post('/todo',async(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    const title = createPayload.title
    const description = createPayload.description;
    await todo.create({
        title: title,
        description: description,
        completed: false
    })
    res.json({msg: "Todo Created"})
})

app.get('/todos',async(req,res)=>{
    const todos = await todo.find({});

    res.json({
        msg: todos
    })
})

app.put('/completed',async (req,res)=>{
    const UpdateTodo = req.body;
    const id = UpdateTodo.id;
    const parsedPayload = createTodo.safeParse(UpdateTodo);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    const todo = await todo.findByIdAndUpdate({_id: id}, {completed: true});

    res.json({
        msg: "Completed Successfully"
    })


})

app.listen(3000);