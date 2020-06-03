import React, { useState } from "react";
import TableCards from "./CardArea/TableCards";
import Arrow from "./Arrow/Arrow";

function FlowchartContainer() {
  const [idsArray, setIdsArray] = useState();
  const [flagArrow, setFlagArrow] = useState(false);
  const [xPos, setXPos] = useState();
  const [yPos, setYPos] = useState();

  return (
    <div>
      {flagArrow && (
        <Arrow
          xPos={xPos}
          yPos={yPos}
          setFlagArrow={setFlagArrow}
          flagArrow={flagArrow}
        />
      )}
      {/* <ArrowList> aqui tem que ter uma lista de arrows */}
      <TableCards
        setIds={setIdsArray}
        idsArray={idsArray}
        setFlagArrow={setFlagArrow}
        flagArrow={flagArrow}
        setXPos={setXPos}
        setYPos={setYPos}
      />
    </div>
  );
}

export default FlowchartContainer;
