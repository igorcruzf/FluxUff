import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import FlowchartContainer from "./components/FlowchartContainer";

function App() {
  return (
    <div className="App">
      <Header
        classProgram="Bacharelado em Ciência da Computação"
        workload="3200 horas"
      />
      <FlowchartContainer />
    </div>
  );
}

export default App;
