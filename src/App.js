import React from 'react';
import './App.css';
import TableCards from './components/Table/TableCards.js';
import Header from './components/Header/Header.js';
import ClassArrow from './components/ClassArrow.js';

function App() {
  return (
    <div className="App" >
      <Header classProgram="Bacharelado em Ciência da Computação" workload="3200 horas"/>
      <ClassArrow/>
      <TableCards/>
    </div>
  );
}

export default App;
