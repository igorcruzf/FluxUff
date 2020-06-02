import React, { useState } from "react";

function Arrow() {
  let [xPos, setXPos] = useState("50");
  let [yPos, setYPos] = useState("50");
  let [path, setPath] = useState();
  let [pathArray, setPathArray] = useState([]);
  let [axis, setAxis] = useState("x");
  let [create, setCreate] = useState(true); // para finalizar a seta dps

  function onmousemove(e) {
    let bounds = e.target.getBoundingClientRect();
    let x = e.clientX - bounds.left;
    let y = e.clientY - bounds.top;
    setXPos(x);
    setYPos(y);
    if (axis === "x") setPath(`M 250 50 l ${xPos - 250} 0`);
    else setPath(`M 250 50 l 0 ${yPos - 50}`);
  }

  function onclick() {
    setPathArray([...pathArray, path]);
    if (axis === "x") setAxis("y");
    else setAxis("x");
  }

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          left: "0px",
          top: "0px",
          width: "100%",
          height: "100%",
          display: "block",
          minWidth: "2429px",
          minHeight: "1679px",
          position: "absolute",
          backgroundImage: "none",
        }}
        onMouseMove={onmousemove}
        onClick={onclick}
      >
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
        <path
          d={pathArray.join(" ") + path}
          stroke="#000"
          strokeWidth="1"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
      </svg>
    </div>
  );
}

export default Arrow;
