import React from "react";

const CirclePercent = ({ radius, percentage }) => {

      const circumfernce = 2*Math.PI *radius
  return (
    <div>
      
      <svg width="50" height="50">
        <g transform="rotate(-90 25 25)">
          <circle
            r={radius}
            cx="25"
            cy="25"
            fill="transparent"
            stroke="lightgrey"
            stroke-width="6px"
            stroke-dasharray={circumfernce}
            stroke-dashoffset="0"
          ></circle>
          <circle
            r={radius}
            cx="25"
            cy="25"
            fill="transparent"
            stroke="blue"
            stroke-width="6px"
            stroke-dasharray={circumfernce}
            stroke-dashoffset={circumfernce *(1-percentage/100)}
          ></circle>
        </g>
        <text
          x="50%"
          y="50%"
          dominant-baseline="central"
          text-anchor="middle"
          fontSize={"14px"}
          fontWeight="bold"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CirclePercent;
