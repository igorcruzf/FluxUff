import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import ContentEditable from "react-contenteditable";
import IconButton from "@material-ui/core/IconButton";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ClassCard(props) {
  let [color, setColor] = useState("#D3D3D3");
  let [text, setText] = useState("Matéria");

  function handleChange(evt) {
    setText(evt.target.value);
  }

  function able() {
    document.getElementById(props.id + "button-plus").style.display = "none";
    document.getElementById(props.id + "button-minus").style.display = "block";
    document.getElementById(props.id + "content").style.display = "block";
    setColor("#F8F8FF");
  }

  function disable() {
    document.getElementById(props.id + "button-plus").style.display = "block";
    document.getElementById(props.id + "button-minus").style.display = "none";
    document.getElementById(props.id + "content").style.display = "none";
    setColor("#D3D3D3");
    setText("Matéria");
  }

  return (
    <div className={props.id}>
      <Card
        style={{
          display: "block",
          width: "100px",
          transitionDuration: "0.3s",
          height: "60px",
          backgroundColor: color,
        }}
        id={props.id + "card"}
      >
        <IconButton
          id={props.id + "button-plus"}
          onClick={able}
          style={{
            display: "block",
            margin: "0 auto",
            marginTop: "6%",
          }}
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </IconButton>
        <IconButton
          id={props.id + "button-minus"}
          onClick={disable}
          style={{
            display: "none",
            position: "absolute",
          }}
          size="small"
        >
          <FontAwesomeIcon icon={faMinusCircle} />
        </IconButton>
        <ContentEditable
          id={props.id + "content"}
          style={{
            display: "none",
            marginTop: "20%",
            textAlign: "center",
            fontFamily: "Arial",
            fontSize: "12px",
            fontWeight: "normal",
          }}
          tagName="h5"
          html={text} // innerHTML of the editable div
          disabled={false} // use true to disable edition
          onChange={handleChange} // handle innerHTML
        />
      </Card>
    </div>
  );
}

export default ClassCard;
