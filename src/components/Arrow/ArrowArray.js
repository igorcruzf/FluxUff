import React from "react";

function ArrowArray(props) {
  return props.arrowArray.map((pathArray) => 
    <div id={"arrow"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          left: "0px",
          top: "0px",
          width: "100%",
          height: "100%",
          display: "block",
          minWidth: "2429px",
          minHeight: "1679px",
          position: "absolute",
          backgroundImage: "none",
        }}
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" />
          </marker>
        </defs>
        <path
          d={pathArray.join(" ")}
          stroke="#000"
          strokeWidth="1"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
      </svg>
    </div>
  );
}

export default ArrowArray;
