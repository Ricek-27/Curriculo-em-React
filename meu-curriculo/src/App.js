import React, { useState } from 'react';
import Curriculum from './components/Curriculum';
import Projects from './components/Projects';
import './App.css';

function App() {
  const [showCurriculum, setShowCurriculum] = useState(true);

  const toggleView = () => {
    setShowCurriculum(prev => !prev);
  };

  const handlePrint = () => {
    if (showCurriculum) {
      window.print();
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Meu Currículo em React</h1>
        <div className="buttons">
          <button onClick={toggleView}>
            {showCurriculum ? 'Ver Projetos' : 'Ver Currículo'}
          </button>
          {showCurriculum && <button onClick={handlePrint}>Imprimir PDF</button>}
        </div>
      </header>
      
      <main>
        {showCurriculum ? <Curriculum /> : <Projects />}
      </main>
    </div>
  );
}

export default App;
