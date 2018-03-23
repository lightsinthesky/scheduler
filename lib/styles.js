"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var selectors = exports.selectors = {
  textAlign: "center",
  margin: "25px 0"
};

var leftButton = exports.leftButton = {
  position: "relative",
  marginRight: "10px",
  display: "inline-block",
  width: "2em",
  height: "2em",
  border: "0.25em solid darkgrey",
  borderRadius: "50%",
  verticalAlign: "middle"
};

var leftButtonAfter = exports.leftButtonAfter = {
  position: "absolute",
  display: "inline-block",
  top: "0.4em",
  left: "0.5em",
  width: "0.7em",
  height: "0.7em",
  borderTop: "0.25em solid darkgrey",
  borderRight: "0.25em solid darkgrey",
  transform: "rotate(-135deg)"
};

var rightButton = exports.rightButton = {
  position: "relative",
  marginLeft: "10px",
  display: "inline-block",
  width: "2em",
  height: "2em",
  border: "0.25em solid darkgrey",
  borderRadius: "50%",
  verticalAlign: "middle"
};

var rightButtonAfter = exports.rightButtonAfter = {
  position: "absolute",
  display: "inline-block",
  top: "0.4em",
  right: "0.5em",
  width: "0.7em",
  height: "0.7em",
  borderTop: "0.25em solid darkgrey",
  borderLeft: "0.25em solid darkgrey",
  transform: "rotate(135deg)"
};

var chartHeader = exports.chartHeader = {
  borderBottom: "solid 1px #e1e3e7",
  borderLeft: "solid 1px #e1e3e7",
  margin: "0 -1px -1px 0",
  flexGrow: 0
};

var headerWrapper = exports.headerWrapper = {
  borderRight: "solid 1px darkgrey"
};

var resourceSideBar = exports.resourceSideBar = {
  border: "solid 1px #e1e3e7",
  margin: "0 -1px -1px 0",
  textAlign: "center",
  zIndex: 99,
  backgroundColor: "#FFF"
};

var cell = exports.cell = {
  width: "100%",
  height: "100%",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center"
};

var chart = exports.chart = {
  display: "flex",
  flexWrap: "wrap",
  borderBottom: "solid 1px #eceeef",
  borderRight: "solid 1px #eceeef",
  overflowX: "auto"
};

var cellWrapper = exports.cellWrapper = {
  margin: "0 -1px -1px 0",
  border: "solid 1px #eceeef"
};

var resourceWrapper = exports.resourceWrapper = {
  display: "flex",
  flexDirection: "column"
};

var eventStyles = exports.eventStyles = {
  position: "relative",
  top: 0,
  left: "4px",
  borderRadius: "10px",
  padding: "2px 10px"
};

var partialEventStyles = exports.partialEventStyles = {
  position: "absolute",
  top: 0,
  right: "4px",
  borderRadius: "3px",
  padding: "2px 5px",
  textAlign: "right"
};

var resizerStyles = exports.resizerStyles = {
  top: 0,
  right: 0,
  width: "5px",
  display: "inline-block",
  position: "absolute"
};

var boxStyles = exports.boxStyles = {
  position: "relative",
  borderRadius: "3px"
};

var eventHandleStyles = exports.eventHandleStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: 30,
  display: "inline-block"
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(selectors, "selectors", "src/styles.js");

  __REACT_HOT_LOADER__.register(leftButton, "leftButton", "src/styles.js");

  __REACT_HOT_LOADER__.register(leftButtonAfter, "leftButtonAfter", "src/styles.js");

  __REACT_HOT_LOADER__.register(rightButton, "rightButton", "src/styles.js");

  __REACT_HOT_LOADER__.register(rightButtonAfter, "rightButtonAfter", "src/styles.js");

  __REACT_HOT_LOADER__.register(chartHeader, "chartHeader", "src/styles.js");

  __REACT_HOT_LOADER__.register(headerWrapper, "headerWrapper", "src/styles.js");

  __REACT_HOT_LOADER__.register(resourceSideBar, "resourceSideBar", "src/styles.js");

  __REACT_HOT_LOADER__.register(cell, "cell", "src/styles.js");

  __REACT_HOT_LOADER__.register(chart, "chart", "src/styles.js");

  __REACT_HOT_LOADER__.register(cellWrapper, "cellWrapper", "src/styles.js");

  __REACT_HOT_LOADER__.register(resourceWrapper, "resourceWrapper", "src/styles.js");

  __REACT_HOT_LOADER__.register(eventStyles, "eventStyles", "src/styles.js");

  __REACT_HOT_LOADER__.register(partialEventStyles, "partialEventStyles", "src/styles.js");

  __REACT_HOT_LOADER__.register(resizerStyles, "resizerStyles", "src/styles.js");

  __REACT_HOT_LOADER__.register(boxStyles, "boxStyles", "src/styles.js");

  __REACT_HOT_LOADER__.register(eventHandleStyles, "eventHandleStyles", "src/styles.js");
}();

;