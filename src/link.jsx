import React, { Component } from "react";

const startX = 2;
const startY = 2;
const radius = 3;

class Link extends Component {
  render() {
    let { from, to, color = "#798c97" } = this.props;

    let hLength = 2; // distance / 2
    let vLength = 45; // height

    let path = `M${startX},${startY} h${hLength} a${radius},${radius} 0 0 1 ${radius},${radius} v${vLength} a${radius},${radius} 1 0 0 ${radius},${radius} h${hLength}`;

    return (
      <svg style={{ position: "absolute", zIndex: 9000, height: vLength + 15 }} ref="svg">
        <g>
          <circle cx="2" cy="2" r="2" stroke="none" fill={color} />
          <path stroke={color} strokeWidth="1" fill="none" d={path} />
          <rect
            transform={`rotate(45, 12, 53)`}
            x={hLength * 5}
            y={vLength + 6}
            width="4"
            height="4"
            stroke="none"
            fill={color}
          />
        </g>
      </svg>
    );
  }
}

export default Link;
