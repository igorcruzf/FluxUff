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

  function getId() {
    props.setFlag(false);
    let newArray = props.idsArray;
    createArrow(newArray[0] + "card", newArray[1] + "card");
    props.setIds([]);
  }

  function activateFlag(){
    props.setFlag(true);
  }

  function listener(){
    console.log("1")
    if(props.varFlag === true){
    setInterval(function() {
      console.log(props.varFlag);
        if(props.idsArray.length >= 2){
          getId();
          console.log("2");
        }
      },1000)
    }
  }

  return (
    <div>
      <IconButton
        size="small"
        onClick={activateFlag}
        style={{
          position: "relative",
          float: "left",
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </IconButton>
      {arrowArray.map((e) => <div>{e}</div>)}
      {listener()}
    </div>
  );
}

export default ClassArrow;
