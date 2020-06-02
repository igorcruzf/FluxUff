import React, { useEffect, useState } from "react";
import { SteppedLineTo } from "react-lineto";

function ClassArrow(props) {
  let [arrowArray, setArrowArray] = useState([]);
  let [tipArray, setTipArray] = useState([]);

  useEffect(() => {
    if (props.varFlag && props.idsArray.length >= 2) {
      let newArray = props.idsArray;
      createArrow(newArray[0] + "card", newArray[1] + "card");
      createTip(newArray[1] + "card");
      props.setIds([]);
      props.setFlag(false);
    }
  });

  function getPosicaoElemento(elem) {
    var offsetLeft = 0;
    var offsetTop = 0;
    while (elem) {
      offsetLeft += elem.offsetLeft;
      offsetTop += elem.offsetTop;
      elem = elem.offsetParent;
    }
    if (navigator.userAgent.indexOf("Mac") !== -1 &&
      typeof document.body.leftMargin != "undefined") {
      offsetLeft += document.body.leftMargin;
      offsetTop += document.body.topMargin;
    }
    return { left: offsetLeft, top: offsetTop };
  }

  function createTip(b, toAnchor) {
    let newTipArray = tipArray;
    let elem = document.getElementsByClassName(b)[0];
    let pos = getPosicaoElemento(elem);
    let posTipLeft;
    let posTipTop;
    switch (toAnchor) {
      case "left":
        console.log(elem.style.height)
        posTipLeft = (pos.left-9);
        posTipTop = (pos.top+25);
        newTipArray.push(
          <svg style={{ position: 'absolute', top: posTipTop+"px", left: posTipLeft+"px", width: '20px', height: '20px' }}>
            <polygon points="8 6,1 11,1 1"
              style={{ fill: "#1C1C1C", stroke: "#1C1C1C", strokeWidth: "2" }} />
          </svg>
        );
        setTipArray(newTipArray);
        break;
      case "top":
        posTipLeft = (pos.left+42.5);
        posTipTop = (pos.top-7);
        newTipArray.push(
          <svg style={{ position: 'absolute', top: posTipTop+"px", left: posTipLeft+"px", width: '20px', height: '20px'}}>
            <polygon points="6 8,11 1,1 1"
              style={{ fill: "#1C1C1C", stroke: "#1C1C1C", strokeWidth: "2" }} />
          </svg>
        );
        break;
      case "bottom":
        posTipLeft = (pos.left+42.5);
        posTipTop = (pos.top+59);
        newTipArray.push(
          <svg style={{ position: 'absolute', top: posTipTop+"px", left: posTipLeft+"px", width: '20px', height: '20px'}}>
            <polygon points="6 1,1 11,11 11"
              style={{ fill: "#1C1C1C", stroke: "#1C1C1C", strokeWidth: "2px" }} />
          </svg>
        );
        break;
      default:
    }
  }

  function createArrow(a, b) {
    let a_aux = a.split("-");
    let b_aux = b.split("-");
    let fromAnchor = "right";
    let toAnchor = "left";
    if (a_aux[1] > b_aux[1]) {
      let c = a;
      a = b;
      b = c;
    }

    if (a_aux[1] === b_aux[1]) {
      if (a < b) {
        fromAnchor = "bottom"
        toAnchor = "top"
      }
      else {
        fromAnchor = "top"
        toAnchor = "bottom"
      }
    }
    createTip(b, toAnchor);
    let newArrowArray = arrowArray;
    newArrowArray.push(
      <div id={a + b}>
        <SteppedLineTo
          from={a}
          to={b}
          fromAnchor={fromAnchor}
          toAnchor={toAnchor}
          orientation="h"
          borderColor="#1C1C1C"
          borderStyle="solid"
          borderWidth="1"
        />

      </div>
    );
    setArrowArray(newArrowArray);
  }

  return (
    <div>
      {arrowArray.map((e) => (
        <div>
          {e}
        </div>
      ))}
      {tipArray.map((e) => (
        <div>
          {e}
        </div>
      ))}
    </div>
  );
}

export default ClassArrow;
