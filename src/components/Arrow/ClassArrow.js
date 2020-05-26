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
    if(a_aux[1] === b_aux[1]){
      if(a < b){
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
          fromAnchor="right"
          toAnchor="left"
          orientation="h"
          style={{
            delay: 0,
            borderColor: "#1C1C1C",
            borderStyle: "solid",
            borderWidth: 3,
          }}
        />
      </div>
    );
    setArrowArray(newArrowArray);
  }

  return (
    <div>
      {arrowArray.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
}

export default ClassArrow;
