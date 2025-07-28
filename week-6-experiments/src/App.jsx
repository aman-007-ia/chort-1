import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
  setInterval(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(async (response) => {
        const data = await response.json();
        setTodos(data);
      });
  }, 10000);

  // return () => clearInterval(intervalId); // cleanup
}, []);

  return(
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} title ={todo.title} description = {todo.description}>
        </Todo>
      ))}
    </>
  )
}
const Todo = ({ title,description}) => {
  return <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
}


export default App
