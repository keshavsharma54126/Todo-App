const mongoose = require('mongoose');

// Connect to MongoDB
//ideally you have to create a .env file and then put the url in there and also not commit it with that
mongoose.connect('mongodb+srv://sharmakeshav54126:GKDGDKWVTvHB1mX6@cluster0.hkewzoz.mongodb.net/todo_app');

// Define schemas
const todoSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    descryption:String,
    completed: Boolean
});


const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}