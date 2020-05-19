import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import TableCardContainer from './components/TableCardContainer'

function App() {
  return (
    <div className="App" >
      <Header classProgram="Bacharelado em Ciência da Computação" workload="3200 horas"/>
      <TableCardContainer/>
    </div>
  );
}

export default App;
