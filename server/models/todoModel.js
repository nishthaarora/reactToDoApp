const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoItem = new Schema({
    description: String,
    status: String
});

const ToDo = mongoose.model('ToDoItem', ToDoItem);

module.exports = ToDo;