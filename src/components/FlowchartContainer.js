import React, { useState } from "react";
import TableCards from "./CardArea/TableCards";
import Arrow from "./Arrow/Arrow";
import ArrowArray from "./Arrow/ArrowArray";

function FlowchartContainer() {
  const [idsArray, setIdsArray] = useState();
  const [flagArrow, setFlagArrow] = useState(false);
  const [xPos, setXPos] = useState();
  const [yPos, setYPos] = useState();
  const [arrowArray, setArrowArray] = useState([]);
  const [cardClicked, setCardClicked] = useState(false);

  return (
    <div>
      {flagArrow && (
        <Arrow
          xPos={xPos}
          yPos={yPos}
          setFlagArrow={setFlagArrow}
          flagArrow={flagArrow}
          arrowArray={arrowArray}
          setArrowArray={setArrowArray}
          cardClicked={cardClicked}
          setCardClicked={setCardClicked}
        />
      )}
      {!flagArrow && (
        <ArrowArray arrowArray={arrowArray} setArrowArray={setArrowArray} />
      )}

      <TableCards
        setIds={setIdsArray}
        idsArray={idsArray}
        setFlagArrow={setFlagArrow}
        flagArrow={flagArrow}
        setXPos={setXPos}
        setYPos={setYPos}
        cardClicked={cardClicked}
        setCardClicked={setCardClicked}
      />
    </div>
  );
}

export default FlowchartContainer;
