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
    if (props.flagArrow === true) {
      let bounds = e.target.getBoundingClientRect();
      let x = e.clientX - bounds.left;
      let y = e.clientY - bounds.top;
      setLXPos(x);
      setLYPos(y);
      let posXSeta;
      let posYSeta;
      if (lYPos >= props.yPos + 60) {
        setMXPos(props.xPos + 50);
        setMYPos(props.yPos + 60);
        posYSeta = props.yPos + 90;
        setAxis("y");
      } else if (lYPos <= props.yPos) {
        setMXPos(props.xPos + 50);
        setMYPos(props.yPos);
        posYSeta = props.yPos - 30;
        setAxis("y");
      } else if (lYPos >= props.yPos && lYPos <= props.yPos + 60) {
        setMXPos(props.xPos + 100);
        setMYPos(lYPos);
        posXSeta = props.xPos + 130;
        setAxis("x");
      }

      if (axis === "x") {
        setPath(`M ${mXPos} ${mYPos} l ${posXSeta - mXPos} 0`);
      } else {
        setPath(`M ${mXPos} ${mYPos} l 0 ${posYSeta - mYPos}`);
      }
    } else {
      let bounds = e.target.getBoundingClientRect();
      let x = e.clientX - bounds.left;
      let y = e.clientY - bounds.top;
      setLXPos(x);
      setLYPos(y);

      if (axis === "x") {
        setPath(`M ${mXPos} ${mYPos} l ${lXPos - mXPos} 0`);
      } else {
        setPath(`M ${mXPos} ${mYPos} l 0 ${lYPos - mYPos}`);
      }
    }
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
    endArrow();
  }

  function endArrow() {
    if (props.cardClicked) {
      let arrows = props.arrowArray;
      arrows.push(render());
      props.setArrowArray(arrows);
      props.setCardClicked(false);
      props.setFlagArrow(false);
      console.log("why god");
    }
  }

  function render() {
    return (
      <div id="arrow">
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
  return render();
}

export default Arrow;
