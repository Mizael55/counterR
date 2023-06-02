
import './App.css';
import React, { useState } from 'react';
import Botton from './components/botton';
import Counter from './components/Counter';

function App() {
  const [numClicks, setNumClicks] = useState(0);

  // handler
  const handlerClick = () => {
    setNumClicks(numClicks + 1);
  };

  const handlerClickRestart = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='counter-title'>
        <h1>Counter</h1>
      </div>
      <div className='main-container'>
        <Counter numClicks={numClicks} />
        <Botton text='Click me' isBottonOfClick={true} handleClick={handlerClick} />
        <Botton text='Restart' isBottonOfClick={false} handleClick={handlerClickRestart} />

      </div>
      
    </div>
  );
}

export default App;
