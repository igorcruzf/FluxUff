import React from 'react';
import './App.css';
import TableCards from './components/Table/TableCards.js';

import Header from './components/Header/Header.js'

function App() {
  return (
    <div className="App">
      <Header classProgram="Bacharelado em Ciência da Computação" workload="3200 horas"/>
      <TableCards/>
    </div>
  );
}

export default App;
