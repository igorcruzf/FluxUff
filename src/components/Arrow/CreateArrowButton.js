import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function CreateArrowButton(props) {
  function activateFlag() {
    props.setXPos("250");//aqui tem que passar a posição x do card
    props.setYPos("50"); //e aqui a y
    props.setFlagArrow(true);
  }

  return (
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
  );
}

export default CreateArrowButton;
