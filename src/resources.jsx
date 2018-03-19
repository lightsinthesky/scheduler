// Vendor Libraries
import React from "react";

// Styles
import { resourceWrapper, resourceSideBar } from "./styles";

export default ({ width, resources, height, headerRenderer, renderer }) => (
  <div className="resource-wrapper" style={Object.assign({ width: `${width}px` }, resourceWrapper)}>
    <div
      className="resource-cell"
      style={Object.assign({ height: height + 1, lineHeight: `${height}px` }, resourceSideBar)}
    >
      {headerRenderer()}
    </div>
    {resources.map(resource => (
      <div
        className="resource-cell"
        key={resource.id}
        style={Object.assign({ height, lineHeight: `${height}px` }, resourceSideBar)}
      >
        {renderer({ resource })}
      </div>
    ))}
  </div>
);
