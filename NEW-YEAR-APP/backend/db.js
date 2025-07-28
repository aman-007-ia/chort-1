const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const todoSchema = new mongoose.Schema({
  title:String,
  description: String,
  completed: Boolean,
});
const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo,
    };