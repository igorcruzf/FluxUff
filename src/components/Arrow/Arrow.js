import React, { useEffect, useState } from "react";

function Arrow(props) {
  //arrow's left and right points
  let [lXPos, setLXPos] = useState();
  let [lYPos, setLYPos] = useState();
  let [mXPos, setMXPos] = useState(props.xPos);
  let [mYPos, setMYPos] = useState(props.yPos);
  //lines that create an arrow
  let [path, setPath] = useState();
  let [pathArray, setPathArray] = useState([]);
  //current arrow path's axis
  let [axis, setAxis] = useState("x");
  //boolean that define if it's setting initial position or not
  let [initialArrowPos, setInitialArrowPos] = useState(true);

  const [creatingArrow, setCreatingArrow] = useState(true);

  useEffect(() => {
    if (!initialArrowPos) arrowPath([lXPos - mXPos], [lYPos - mYPos]);
  });

  //set position of arrow's left point to mouse position
  function arrowPosition(e) {
    let bounds = e.target.getBoundingClientRect();
    let x = e.clientX - bounds.left;
    let y = e.clientY - bounds.top;
    setLXPos(x);
    setLYPos(y);
  }

  //adjust arrow path to mouse position
  function arrowPath(horizontal, vertical) {
    if (axis === "x") setPath(`M ${mXPos} ${mYPos} h ${horizontal}`);
    else setPath(`M ${mXPos} ${mYPos} v ${vertical}`);
  }

  function onMouseMoveHandler(e) {
    if (creatingArrow) {
      arrowPosition(e);
      if (initialArrowPos) {
        initialPosition();
      }
    }
  }

  function onClickHandler(e) {
    if(creatingArrow){
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
    
  }

  //define orbit movement
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
  }

  //add arrow in an arrows array and stop making it's path editable
  function endArrow() {
    if (props.cardClicked) {
      props.setCardClicked(false);
      setCreatingArrow(false);
      props.setFlagArrow(false);
    }
  }

  //render arrow
  function render(onClickHandler, onMouseMoveHandler) {
    return (
      <div id="arrow">
        <svg
          onMouseMove={onMouseMoveHandler}
          onClick={onClickHandler}
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
            zIndex:'0'
          }}
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
  return render(onClickHandler, onMouseMoveHandler);
}

export default Arrow;
