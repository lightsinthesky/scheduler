"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Vendor Libraries
var _default = function _default(_ref) {
  var range = _ref.range,
      width = _ref.width,
      renderer = _ref.renderer,
      resourceRenderer = _ref.resourceRenderer,
      height = _ref.height,
      cellWidth = _ref.cellWidth,
      resourceWidth = _ref.resourceWidth;
  return _react2.default.createElement(
    "div",
    { className: "header-wrapper", style: Object.assign({ width: width }, _styles.headerWrapper) },
    _react2.default.createElement(
      "div",
      {
        className: "header-cell-holder",
        style: {
          width: resourceWidth + cellWidth * range.daysInRange() + "px",
          height: height,
          display: "flex"
        }
      },
      range.map(function (date) {
        return _react2.default.createElement(
          "div",
          {
            className: "header-cell",
            key: date.toRef(),
            style: Object.assign(
            /*{ width: `${(width - resourceWidth) / range.daysInRange() + 1}px` },*/
            { width: cellWidth }, _styles.chartHeader)
          },
          renderer({ date: date })
        );
      })
    )
  );
};

// Styles


exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "src/header.jsx");
}();

;