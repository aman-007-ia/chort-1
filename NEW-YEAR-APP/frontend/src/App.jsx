import { useState } from "react"
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"

function App() {

  const [todos, setTodos] = useState([])

  // fetch('http://localhost:3000/todos')
  //   .then(response => response.json())
  //   .then(data => {
  //     setTodos(data)
  //   })
  //   .catch(error => {
  //     console.error('Error fetching todos:', error)
  //   })

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  )
}

export default App
