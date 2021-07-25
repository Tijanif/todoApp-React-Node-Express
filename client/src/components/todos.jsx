import React from 'react';

const Todos = ({ todos }) => {
  return todos.map((todo) => <h2>{todo.message}</h2>);
};

export default Todos;
