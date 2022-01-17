import React from 'react';
// import { useState } from "react/cjs/react.production.min";
import React, { useState } from 'react';
import './style.css';

function Todo({ todo, index, removeTodo, update }) {
  return (
    <div className="row">
      <div className="todo">
        {todo.text} <button onClick={() => removeTodo(index)}>Del</button>{' '}
        {/* <button onClick={update}>Edit</button>{' '} */}
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return console.log('nonono');
    addTodo(value);
    setValue('');
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter the value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    const NewTodos = [...todos, { text }];
    setTodos(NewTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  // handleEditing = () => {
  //   this.setState({
  //     editing: true,
  //   });
  // };

  return (
    // <div id="main">
    <div className="app">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
            // update={handleEditing}
          />
        ))}
      </div>
    </div>
    // </div>
  );
}

export default App;
