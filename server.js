const express = require('express');

// generate uniq id's
const { v4: uuidv4 } = require('uuid');
const app = express();

// Middleware
app.use(express.json());

let todos = [
  {
    message: 'Wash car',
    id: 1,
  },
  {
    message: 'Go for a run',
    id: 2,
  },
  {
    message: 'Cook dinner',
    id: 3,
  },
];

app.get('/', (req, res) => {
  res.status(200).json(todos);
});

app.post('/', (req, res) => {
  const newTodo = {
    message: req.body.message,
    id: uuidv4(),
  };
  todos = [...todos, newTodo];
  res.status(201).json(todos);
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
