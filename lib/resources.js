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
  var width = _ref.width,
      resources = _ref.resources,
      height = _ref.height,
      headerRenderer = _ref.headerRenderer,
      renderer = _ref.renderer;
  return _react2.default.createElement(
    "div",
    { className: "resource-wrapper", style: Object.assign({ width: width + "px" }, _styles.resourceWrapper) },
    _react2.default.createElement(
      "div",
      {
        className: "resource-cell",
        style: Object.assign({ height: height + 1, lineHeight: height + "px" }, _styles.resourceSideBar)
      },
      headerRenderer()
    ),
    resources.map(function (resource) {
      return _react2.default.createElement(
        "div",
        {
          className: "resource-cell",
          key: resource.id,
          style: Object.assign({ height: height, lineHeight: height + "px" }, _styles.resourceSideBar)
        },
        renderer({ resource: resource })
      );
    })
  );
};

// Styles


exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "src/resources.jsx");
}();

;