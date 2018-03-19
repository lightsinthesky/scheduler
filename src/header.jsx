// Vendor Libraries
import React from "react";

// Styles
import { headerWrapper, chartHeader } from "./styles";

export default ({ range, width, renderer, resourceRenderer, height, cellWidth, resourceWidth }) => (
  <div className="header-wrapper" style={Object.assign({ width: width }, headerWrapper)}>
    <div
      className="header-cell-holder"
      style={{
        width: `${resourceWidth + cellWidth * range.daysInRange()}px`,
        height: height,
        display: "flex"
      }}
    >
      {range.map(date => (
        <div
          className="header-cell"
          key={date.toRef()}
          style={Object.assign(
            /*{ width: `${(width - resourceWidth) / range.daysInRange() + 1}px` },*/
            { width: cellWidth },
            chartHeader
          )}
        >
          {renderer({ date })}
        </div>
      ))}
    </div>
  </div>
);
