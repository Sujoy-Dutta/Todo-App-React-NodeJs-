const { mongoose } = require("mongoose");

const Schema = mongoose.Schema;

mongoose.connect("mongodb+srv://sujoyaws1:sujoyaws1@todo-app.j7bacn0.mongodb.net/?retryWrites=true&w=majority");

const todoSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        required: true
    }
})

const todo = mongoose.model("todo", todoSchema);

module.exports = {todo};