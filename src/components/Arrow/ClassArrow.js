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
    let newArrowArray = arrowArray;
    newArrowArray.push(
      <div id={a + b}>
        <SteppedLineTo
          from={a}
          to={b}
          fromAnchor="right"
          toAnchor="left"
          style={{
            delay: 0,
            borderColor: "#ddd",
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
