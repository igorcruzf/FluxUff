import React, { useState } from "react";

function Arrow(props) {
  let [lXPos, setLXPos] = useState();
  let [lYPos, setLYPos] = useState();
  let [mXPos, setMXPos] = useState(props.xPos);
  let [mYPos, setMYPos] = useState(props.yPos);
  let [path, setPath] = useState();
  let [pathArray, setPathArray] = useState([]);
  let [axis, setAxis] = useState("x");

  function onmousemove(e) {
    let bounds = e.target.getBoundingClientRect();
    let x = e.clientX - bounds.left;
    let y = e.clientY - bounds.top;
    setLXPos(x);
    setLYPos(y);
    if (axis === "x") setPath(`M ${mXPos} ${mYPos} l ${lXPos - mXPos} 0`);
    else setPath(`M ${mXPos} ${mYPos} l 0 ${lYPos - mYPos}`);
  }

  function onclick() {
    setPathArray([...pathArray, path]);
    if (axis === "x") {
      setAxis("y");
      setMXPos(lXPos);
    } else {
      setAxis("x");
      setMYPos(lYPos);
    }
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
