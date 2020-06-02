import React, { useState } from "react";

function Arrow() {
  let [xPos, setXPos] = useState("50");
  let [yPos, setYPos] = useState("50");

  function onmousemove(e) {
    var bounds = e.target.getBoundingClientRect();
    var x = e.clientX - bounds.left;
    var y = e.clientY - bounds.top;
    setXPos(x);
    setYPos(y)
    
  }

  return (
      <div>
           <svg
      xmlns="http://www.w3.org/2000/svg"
      height="2000" width="2000"
      onMouseMove={onmousemove}    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" />
        </marker>
      </defs>
      <line
        x1="0px"
        y1="50px"
        x2={xPos + "px"}
        y2={yPos + "px"}
        stroke="#000"
        strokeWidth="0.5"
        markerEnd="url(#arrowhead)"

      />
    </svg>
      </div>
   
  );
}

export default Arrow;
