import React, { useEffect, useState } from "react";
import { SteppedLineTo } from "react-lineto";

function ClassArrow(props) {
  let [arrowArray, setArrowArray] = useState([]);

  useEffect(() => {
    if (props.varFlag && props.idsArray.length >= 2) {
      let newArray = props.idsArray;
      createArrow(newArray[0] + "card", newArray[1] + "card");
      props.setIds([]);
      props.setFlag(false);
    }
  });

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
          <svg viewBox="200 220 100 100" style={{position:'absolute'}}>
            <polygon x="0" y="0" points="168 75,161 80,161 70"
              style={{ fill: "#1C1C1C", stroke: "#1C1C1C", strokeWidth: "2", fillRule: "evenodd" }} />
          </svg>
        </div>

      ))}
    </div>
  );
}

export default ClassArrow;
