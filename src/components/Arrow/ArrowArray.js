import React from "react";

function ArrowArray(props) {
  return (
    <div>
      {props.arrowArray.map((arrow) => (
        <div>{arrow}</div>
      ))}
    </div>
  );
}

export default ArrowArray;