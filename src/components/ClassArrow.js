import React, { useState } from "react";
import { SteppedLineTo } from "react-lineto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ClassArrow(props) {
  let [arrowArray, setArrowArray] = useState([]);

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
            delay: true,
            borderColor: "#ddd",
            borderStyle: "solid",
            borderWidth: 3,
          }}
        />
      </div>
    );
    setArrowArray(newArrowArray);
  }

  function getId() {
    let newArray = props.idsArray;
    console.log(newArray);
    if (newArray.length >= 2) {
      console.log("entrou");
      createArrow(newArray[0], newArray[1]);
      props.setIds([]);
    }
  }

  return (
    <div>
      <IconButton
        size="small"
        onClick={getId}
        style={{
          position: "relative",
          float: "left",
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </IconButton>
      {arrowArray}
    </div>
  );
}

export default ClassArrow;
