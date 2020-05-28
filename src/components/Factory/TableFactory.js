import React from "react";
import ClassCard from "../CardArea/ClassCard.js";

function TableFactory(props) {


  return (
    <table id="table-of-cards" cellPadding="30%">
      <thead key={"thead-table-cards"}>
        <tr key={"tr-head"}>
          {props.columns.map((i) => (
            <th id={`cell${i}`}>{i + 1}</th>
          ))}
        </tr>
      </thead>
      <tbody key={"tbody-table-cards"}>
        {props.rows.map((i) => (
          <tr key={i} id={`row${i}`}>
            {props.columns.map((j) => (
              <td
                className={`cell${i}-${j}`}
                key={`cell${i}-${j}`}
                id={`cell${i}-${j}`}
                onClick={() => props.onClickHandler(`cell${i}-${j}`)}
              >
                <ClassCard key={`cell${i}-${j}card`} id={`cell${i}-${j}card`} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableFactory;
