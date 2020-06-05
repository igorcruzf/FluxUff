import React, { useEffect, useState } from "react";

function Arrow(props) {
  let [lXPos, setLXPos] = useState();
  let [lYPos, setLYPos] = useState();
  let [mXPos, setMXPos] = useState(props.xPos);
  let [mYPos, setMYPos] = useState(props.yPos);
  let [path, setPath] = useState();
  let [pathArray, setPathArray] = useState([]);
  let [axis, setAxis] = useState("x");
  let [initialArrowPos, setInitialArrowPos] = useState(true);

  function arrowPosition(e) {
    let bounds = e.target.getBoundingClientRect();
    let x = e.clientX - bounds.left;
    let y = e.clientY - bounds.top;
    setLXPos(x);
    setLYPos(y);
  }

  useEffect(() => {
    if (!initialArrowPos) arrowPath([lXPos - mXPos], [lYPos - mYPos]);
  });

  function arrowPath(horizontal, vertical) {
    if (axis === "x") setPath(`M ${mXPos} ${mYPos} h ${horizontal}`);
    else setPath(`M ${mXPos} ${mYPos} v ${vertical}`);
  }

  function onmousemove(e) {
    if (props.flagArrow === true) {
      arrowPosition(e);
      if (initialArrowPos) {
        initialPosition();
      }
    }
  }

  function onclick(e) {
    if (initialArrowPos) {
      setInitialArrowPos(false);
    } else {
      setPathArray([...pathArray, path]);
      if (axis === "x") {
        setAxis("y");
        setMXPos(lXPos);
      } else {
        setAxis("x");
        setMYPos(lYPos);
      }
      arrowPosition(e);
      endArrow();
    }
  }

  function initialPosition() {
    let posXArrow;
    let posYArrow;
    if (lYPos >= props.yPos + 60) {
      setMXPos(props.xPos + 50);
      setMYPos(props.yPos + 60);
      posYArrow = props.yPos + 90;
      setAxis("y");
    } else if (lYPos <= props.yPos) {
      setMXPos(props.xPos + 50);
      setMYPos(props.yPos);
      posYArrow = props.yPos - 30;
      setAxis("y");
    } else if (lYPos >= props.yPos && lYPos <= props.yPos + 60) {
      setMXPos(props.xPos + 100);
      setMYPos(lYPos);
      posXArrow = props.xPos + 130;
      setAxis("x");
    }

    arrowPath([posXArrow - mXPos], [posYArrow - mYPos])

    // if (axis === "x") {
    //   setPath(`M ${mXPos} ${mYPos} H ${posXArrow - mXPos}`);
    // } else {
    //   setPath(`M ${mXPos} ${mYPos} V ${posYArrow - mYPos}`);
    // }
  }

  function endArrow() {
    if (props.cardClicked) {
      let arrows = props.arrowArray;
      arrows.push(new render(console.log("oi"), console.log("oi")));
      props.setArrowArray(arrows);
      props.setCardClicked(false);
      props.setFlagArrow(false);
      console.log("why god");
    }
  }

  function render(onclick, onmousemove) {
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
  return render(onclick, onmousemove);
}

export default Arrow;
