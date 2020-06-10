import React, { useState } from "react";
import TableCards from "./CardArea/TableCards";
import Arrow from "./Arrow/Arrow";

function FlowchartContainer() {
  //const [idsArray, setIdsArray] = useState();
  const [flagArrow, setFlagArrow] = useState(false);
  const [cardClicked, setCardClicked] = useState(false);
  const [arrows, setArrows] = useState([]);

  return (
    <div>
      <div>
        {arrows.map(([x, y]) => (
          <Arrow
            xPos={x}
            yPos={y}
            setFlagArrow={setFlagArrow}
            flagArrow={flagArrow}
            cardClicked={cardClicked}
            setCardClicked={setCardClicked}
          />
        ))}
      </div>

      <div>
        <TableCards
          // setIds={setIdsArray}
          // idsArray={idsArray}
          setFlagArrow={setFlagArrow}
          flagArrow={flagArrow}
          setArrows={setArrows}
          arrows={arrows}
          cardClicked={cardClicked}
          setCardClicked={setCardClicked}
        />
      </div>
    </div>
  );
}

export default FlowchartContainer;
