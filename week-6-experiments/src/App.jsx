import React, { useState } from "react";

function App() {

  return(
    <>
      <CardWrapper innerComponent={<Card/>} />
      <CardWrapper innerComponent={<Card2/>} />
    </>
  )
}
const CardWrapper = ({ innerComponent }) => {
  return <div style={{border:"2px solid black",padding:20}}>
    {innerComponent}
  </div>
  };

const Card = () => {
  return <div>
    Hi there! I am a card component.
  </div>
}


const Card2 = () => {
  return <div>
    Hi there! I am a card component.
  </div>
}

export default App
