import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get('http://localhost:5001');
      setTodos(res.data);
    };
    getTodos();
  }, []);

  return <div className='App'></div>;
}

export default App;
