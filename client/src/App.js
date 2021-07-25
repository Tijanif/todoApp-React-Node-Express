import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Todos from './components/Todos';
import PreLoader from './components/Preloader';
import Header from './components/Header';

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get('http://localhost:5001');
      setTodos(res.data);
    };
    getTodos();
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        <Header />
        {todos ? <Todos todos={todos} /> : <PreLoader />}
      </div>
    </div>
  );
}

export default App;
