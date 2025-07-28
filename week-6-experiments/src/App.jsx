import React, { useState } from "react";

function App() {

  return(
    <>
      <CardWrapper>
        <CardWrapper>
          <TextComp />
        </CardWrapper>
      </CardWrapper>
      <CardWrapper>
        Hi there, I am a card component!
      </CardWrapper>
    </>
  )
}
const CardWrapper = ({ children }) => {
  return <div style={{border:"2px solid black",padding:20}}>
    {children}
  </div>
  }
  
const TextComp = () => {
  return <>
    hi ther is a text component
  </>
  };

export default App
