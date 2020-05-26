import React, { useState } from "react";
import TableCards from "./Table/TableCards";
import ClassArrow from "./Arrow/ClassArrow";
import CreateArrowButtom from "./Arrow/CreateArrowButton";

function TableCardContainer() {
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

export default TableCardContainer;
