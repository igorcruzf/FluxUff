import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function CreateArrowButton(props) {
  function activateFlag() {
    props.setXPos("250");
    props.setYPos("50");
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
