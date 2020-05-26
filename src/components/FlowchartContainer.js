import React, { useState } from "react";
import TableCards from "./CardArea/TableCards";
import ClassArrow from "./Arrow/ClassArrow";
import CreateArrowButtom from "./Arrow/CreateArrowButton";

function FlowchartContainer() {
  const [ids, setIds] = useState([]);
  const [flag, setFlag] = useState(false);

  return (
    <div>
      <CreateArrowButtom setFlag={setFlag} varFlag={flag} />
      <ClassArrow
        setIds={setIds}
        idsArray={ids}
        setFlag={setFlag}
        varFlag={flag}
      />
      <TableCards
        setIds={setIds}
        idsArray={ids}
        setFlag={setFlag}
        varFlag={flag}
      />
    </div>
  );
}

export default FlowchartContainer;
