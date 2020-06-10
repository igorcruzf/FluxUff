import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import ContentEditable from "react-contenteditable";
import IconButton from "@material-ui/core/IconButton";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ClassCard(props) {
  let [color, setColor] = useState("#D3D3D3");
  let [text, setText] = useState("Matéria");
  let [displayPlus, setDisplayPlus] = useState("block");
  let [displayMinus, setDisplayMinus] = useState("none");
  let [displayContent, setDisplayContent] = useState("none");
  let [ableFlag, setAbleFlag] = useState(false);

  let [opacity, setOpacity] = useState(0.5);
  let [zIndex, setZIndex] = useState("0");

  function handleChange(evt) {
    setText(evt.target.value);
  }

  function able() {
    setDisplayPlus("none");
    setDisplayMinus("block");
    setDisplayContent("block");
    setColor("#F8F8FF");
    setAbleFlag(true);
  }

  function disable() {
    setDisplayPlus("block");
    setDisplayMinus("none");
    setDisplayContent("none");
    setColor("#D3D3D3");
    setText("Matéria");
    setAbleFlag(false);
  }

  function visible() {
    setOpacity(1);
    setZIndex(2);
  }

  function invisible() {
    if (!ableFlag) {
      setOpacity(0.5);
      setZIndex(0);
    }
  }

  function getPosicaoElemento() {
    var offsetTrail = document.getElementById(props.id);
    var offsetLeft = 0;
    var offsetTop = 0;
    while (offsetTrail) {
      offsetLeft += offsetTrail.offsetLeft;
      offsetTop += offsetTrail.offsetTop;
      offsetTrail = offsetTrail.offsetParent;
      console.log("oi");
    }
    if (
      navigator.userAgent.indexOf("Mac") !== -1 &&
      typeof document.body.leftMargin != "undefined"
    ) {
      offsetLeft += document.body.leftMargin;
      offsetTop += document.body.topMargin;
    }
    // props.setXPos(offsetLeft); //aqui tem que passar a posição x do card
    // props.setYPos(offsetTop); //e aqui a y
    props.setFlagArrow(true);
    let arrows = props.arrows;
    arrows.push([offsetLeft, offsetTop]);
    props.setArrows(arrows);
  }

  return (
    <div className={props.id} onMouseEnter={visible} onMouseLeave={invisible}>
      <Card
        style={{
          display: "block",
          width: "100px",
          transitionDuration: "0.3s",
          height: "60px",
          backgroundColor: color,
          opacity: opacity,
          position: "relative",
          zIndex: zIndex,
        }}
        id={props.id}
      >
        <IconButton
          id={props.id + "button-plus"}
          onClick={able}
          style={{
            display: displayPlus,
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
            display: displayMinus,
            position: "absolute",
          }}
          size="small"
        >
          <FontAwesomeIcon icon={faMinusCircle} />
        </IconButton>
        <IconButton
          size="small"
          onClick={getPosicaoElemento}
          style={{
            display: displayMinus,
            position: "absolute",
            marginLeft: "80px",
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </IconButton>
        <ContentEditable
          id={props.id + "content"}
          style={{
            display: displayContent,
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

export default React.memo(ClassCard);
