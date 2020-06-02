import React from "react";
import TableFactory from "../Factory/TableFactory.js";

function TableCards(props) {
  const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  let tableCards = (
    <TableFactory
      idsArray={props.idsArray}
      setIds={props.setIds}
      rows={rows}
      columns={columns}
      onClickHandler={onClickHandler}
    />
  );

  function onClickHandler(cellID) {
    if (props.varFlag && !props.idsArray.includes(cellID)) {
      let vetor = [...props.idsArray, cellID];
      props.setIds(vetor);
    }
  }

  function render() {
    return tableCards;
  }

  return render();
}

export default TableCards;
