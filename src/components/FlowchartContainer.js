import React, { useState } from "react";
import TableCards from "./CardArea/TableCards";
import Arrow from "./Arrow/Arrow";
import SvgHandler from "./Arrow/SvgHandler";

function FlowchartContainer() {
  const [idsArray, setIdsArray] = useState();
  const [flagArrow, setFlagArrow] = useState(false);
  const [xPos, setXPos] = useState();
  const [yPos, setYPos] = useState();
  const [arrowArray, setArrowArray] = useState([]);
  const [cardClicked, setCardClicked] = useState(false);
  const [path, setPath] = useState();
  const [pathArray, setPathArray] = useState([]);

  return (
    <div>
      <SvgHandler
        arrowArray={arrowArray}
        path={path}
        pathArray={pathArray}
      />
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
          path={path}
          setPath={setPath}
          pathArray={pathArray}
          setPathArray={setPathArray}
        />
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
