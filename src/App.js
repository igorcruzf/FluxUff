import React from 'react';
import './App.css';
import ClassCard from './components/ClassCard.js';

import Header from './components/Header/Header.js'

function App() {
  return (
    <div className="App">
      <Header classProgram="Bacharelado em Ciência da Computação" workload="3200 horas"/>
      <tr>
        <td><ClassCard/> </td>
      </tr>
    </div>
  );
}

export default App;
