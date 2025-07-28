import React, { useState } from "react";

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
const Header = React.memo(({ title }) => {
  console.log(`Rendering Header with title: ${title}`);
  return <>{title}</>;
});

export default App
