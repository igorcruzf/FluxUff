import React, { useEffect, useState } from "react";

function Arrow(props) {
  //arrow's left and right points
  let [lXPos, setLXPos] = useState();
  let [lYPos, setLYPos] = useState();
  let [mXPos, setMXPos] = useState(props.xPos);
  let [mYPos, setMYPos] = useState(props.yPos);
  //lines that create an arrow

  //current arrow path's axis
  let [axis, setAxis] = useState("x");
  //boolean that define if it's setting initial position or not
  let [initialArrowPos, setInitialArrowPos] = useState(true);

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
    if (axis === "x") props.setPath(`M ${mXPos} ${mYPos} h ${horizontal}`);
    else props.setPath(`M ${mXPos} ${mYPos} v ${vertical}`);
  }

  function onMouseMoveHandler(e) {
    if (props.flagArrow === true) {
      arrowPosition(e);
      if (initialArrowPos) {
        initialPosition();
      }
    }
  }

  function onClickHandler(e) {
    if (initialArrowPos) {
      setInitialArrowPos(false);
    } else {
      props.setPathArray([...props.pathArray, props.path]);
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
    arrowPath([posXArrow - mXPos], [posYArrow - mYPos]);
  }

  //add arrow in an arrows array and stop making it's path editable
  function endArrow() {
    if (props.cardClicked) {
      props.setArrowArray([
        ...props.arrowArray,
        <div>
        <defs>
          <marker
            id={`arrowhead${props.arrowArray.length}`}
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
          d={props.pathArray}
          stroke="#000"
          strokeWidth="1"
          fill="none"
          markerEnd={`url(#arrowhead${props.arrowArray.length})`}
        />
        </div>
      ]);
      props.setCardClicked(false);
      props.setFlagArrow(false);
      console.log(`arrowhead${props.arrowArray.length}`);
    }
  }

  //render arrow
  function render(onClickHandler, onMouseMoveHandler) {
    return (
      <div
        id="arrow"
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
        onMouseMove={onMouseMoveHandler}
        onClick={onClickHandler}
      ></div>
    );
  }
  return render(onClickHandler, onMouseMoveHandler);
}

export default Arrow;
