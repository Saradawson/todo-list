import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodosList';

function App() {
  let [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    description: '',
    isDone: false
  })

  const handleChange = (evt) => {
    setTodo({...todo, description: evt.target.value});
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    todos.push({...todo, id: Date.now()});
    setTodo({
      description: '',
      isDone: false
    })
  }

  
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={handleChange}
          value={todo.description} 
          type='text'
          name='newTodo'
        />
        <button type='submit'>Add</button>
      </form>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
