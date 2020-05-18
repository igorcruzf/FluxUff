import React from 'react';
import './App.css';
import TableCards from './components/Table/TableCards.js';
import Header from './components/Header/Header.js';
import ClassArrow from './components/ClassArrow.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from '@material-ui/core/IconButton';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <Header classProgram="Bacharelado em Ciência da Computação" workload="3200 horas"/>
      <ClassArrow/>
      <IconButton size='small' style={{position: 'relative', float: 'left'}} onClick={ClassArrow.createArrow}><FontAwesomeIcon icon={faArrowRight} /></IconButton>
      <TableCards/>
    </div>
  );
}

export default App;
