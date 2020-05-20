import React, { useState } from "react";
import TableCards from "./Table/TableCards";
import ClassArrow from "../components/ClassArrow";

function TableCardContainer() {
  const [ids, setIds] = useState([]);

  return (
    <div>
      <ClassArrow setIds={setIds} idsArray={ids} />
      <TableCards setIds={setIds} idsArray={ids} />
    </div>
  );
}

export default TableCardContainer;
