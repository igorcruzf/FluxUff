import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function CreateArrowButton(props) {
  function activateFlag() {
    props.setFlag(true);
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
    </div>
  );
}

export default CreateArrowButton;
