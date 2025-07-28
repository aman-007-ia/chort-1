import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Hello World");

  function titleChange () {
    setTitle(`Hello React ${Math.random()}`);
  }

  return (
    <>
      <button onClick={titleChange}>Click me</button>
      <br />
      <Header title={title}></Header>
      <br />
      <Header title="yadav"></Header>
      <br />
      <Header title="yadav"></Header>
      <br />
      <Header title="yadav"></Header>
      <br />
      <Header title="yadav"></Header>
      <br />
      <Header title="yadav"></Header>
      <br />
      <Header title="yadav"></Header>
      <br />
      <Header title="yadav"></Header>
      <br />
      <Header title="yadav"></Header>
    </>
  )
}

function Header({title}) {
  return (
    <>
    {title}
    </>
  )
}

export default App
