
import './App.css';
import React, { useState } from 'react';
import Boton from './components/boton';
import Contador from './components/contador';

function App() {
  const [numClics, setNumClic] = useState(0);

  const manejarClic = () => {
    setNumClic(numClics + 1);
  }

  const manejarClicReiniciar = () => {
    setNumClic(0);
  }

  return (
    <div className="App">
      <div className='contador-title'>
        <h1>Contador</h1>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClics} />
        <Boton texto='Click me' esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={manejarClicReiniciar} />

      </div>
      
    </div>
  );
}

export default App;
