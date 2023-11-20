import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0)  
  return (
    <div>
      <button onClick={()=>setCounter(counter + 1)}>increment</button> 

      <button onClick={()=>setCounter(0)}>reset</button>
      
      <br />

      <label>count {counter}</label>
    </div>
  );
}

export default function App(props) {
  return (
    <div className='App'>
      <h1>React Counter</h1>
      <Counter></Counter>
    </div>
  );
}