import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';

function App() {
  return (
    <div className="App">
      <tr>
        <td><Card texto = "teste" /> </td>
      </tr>
    </div>
  );
}

export default App;
