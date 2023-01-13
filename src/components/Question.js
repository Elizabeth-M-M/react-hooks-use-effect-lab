import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  


 useEffect(()=>{
  
  let mytimeOut = setInterval(() => {
    setTimeRemaining(timeRemaining=>timeRemaining-1)
    }, 1000);
   setTimeout(function( ) { 
    clearInterval( mytimeOut)
    setTimeRemaining(10)
      
      }, 10000); 
 }, []) // add useEffect code


  function handleAnswer(isCorrect) {
    
    onAnswered(isCorrect);
    setTimeRemaining(10);
  }

  

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
