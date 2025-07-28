import React, { useState } from "react";

let count = 0;
function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", description: "Study the basics of React." },
    { id: 2, title: "Build a Todo App", description: "Create a simple todo application." },
  ]);

  const addTodo = () => {
    setTodos([
      ...todos,
      { id: count++, title: "New Todo", description: "This is a new todo item." },
    ]);
  };  

  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </>
  )
}
const Todo = ({ title,description }) => {
  return  <>
  <h1>{title}</h1>
  <h5>{description}</h5>    
  </>
  };

export default App
