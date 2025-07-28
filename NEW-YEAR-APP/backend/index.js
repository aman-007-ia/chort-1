const express = require('express');
const { createTodoSchema, updateTodoSchema } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/todo', async (req, res) => {
  const createPayload = req.body;
  const paresedPayload = createTodoSchema.parse(createPayload);
  if(!paresedPayload) {
    res.status(411).json({ msg: 'You sent the wrong inputs' });
    return
  }
  await todo.create({
    title: paresedPayload.title,
    description: paresedPayload.description,
  });
  res.status(201).json({ message: 'Todo created successfully!' });
})

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.status(200).json(todos);
})

app.put('/complete',async (req, res) => {
  const updatePayload = req.body;
  const paresedPayload = updateTodoSchema.parse(updatePayload);
  if(!paresedPayload) {
    res.status(411).json({ msg: 'You sent the wrong inputs' });
    return
  }
  await todo.updateOne(
    { _id: req.body.id },
    { $set: { completed: true } }
  );
  res.status(200).json({ message: 'Todo marked as completed!' });
})

app.listen(3000, () => {
  console.log('Backend server is running on http://localhost:3000');
});