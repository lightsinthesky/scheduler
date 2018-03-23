"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var startX = 2;
var startY = 2;
var radius = 3;

var Link = function (_Component) {
  _inherits(Link, _Component);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          from = _props.from,
          to = _props.to,
          _props$color = _props.color,
          color = _props$color === undefined ? "#798c97" : _props$color;


      var hLength = 2; // distance / 2
      var vLength = 45; // height

      var path = "M" + startX + "," + startY + " h" + hLength + " a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius + " v" + vLength + " a" + radius + "," + radius + " 1 0 0 " + radius + "," + radius + " h" + hLength;

      return _react2.default.createElement(
        "svg",
        { style: { position: "absolute", zIndex: 9000, height: vLength + 15 }, ref: "svg" },
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement("circle", { cx: "2", cy: "2", r: "2", stroke: "none", fill: color }),
          _react2.default.createElement("path", { stroke: color, strokeWidth: "1", fill: "none", d: path }),
          _react2.default.createElement("rect", {
            transform: "rotate(45, 12, 53)",
            x: hLength * 5,
            y: vLength + 6,
            width: "4",
            height: "4",
            stroke: "none",
            fill: color
          })
        )
      );
    }
  }]);

  return Link;
}(_react.Component);

var _default = Link;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(startX, "startX", "src/link.jsx");

  __REACT_HOT_LOADER__.register(startY, "startY", "src/link.jsx");

  __REACT_HOT_LOADER__.register(radius, "radius", "src/link.jsx");

  __REACT_HOT_LOADER__.register(Link, "Link", "src/link.jsx");

  __REACT_HOT_LOADER__.register(_default, "default", "src/link.jsx");
}();

;