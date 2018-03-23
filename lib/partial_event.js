"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; // Vendor Libraries


// Styles


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PartialEvent = (_temp = _class = function (_React$Component) {
  _inherits(PartialEvent, _React$Component);

  function PartialEvent(props) {
    _classCallCheck(this, PartialEvent);

    var _this = _possibleConstructorReturn(this, (PartialEvent.__proto__ || Object.getPrototypeOf(PartialEvent)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(PartialEvent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          duration = _props.duration,
          cellWidth = _props.cellWidth,
          width = duration * cellWidth === 0 ? cellWidth : duration * cellWidth - duration - 9;


      this.setState({ cellWidth: cellWidth, width: width, startWidth: width });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var duration = nextProps.duration,
          cellWidth = nextProps.cellWidth,
          width = duration * cellWidth === 0 ? cellWidth : duration * cellWidth - duration - 9;


      this.setState({ duration: duration, width: width, startWidth: width });
    }
  }, {
    key: "dispatchEventClick",
    value: function dispatchEventClick(ev) {
      ev.stopPropagation();
      this.props.eventClicked(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          styles = _props2.styles,
          id = _props2.id,
          title = _props2.title,
          children = _props2.children,
          rowHeight = _props2.rowHeight,
          color = _props2.color,
          rest = _objectWithoutProperties(_props2, ["styles", "id", "title", "children", "rowHeight", "color"]),
          width = this.state.width,
          defaultStyles = { color: "#fff", backgroundColor: color },
          eventStyleMerge = Object.assign({ width: width }, styles || defaultStyles, _styles.partialEventStyles),
          boxStyleMerge = Object.assign({ height: "100%", top: "2px", width: width }, _styles.boxStyles);

      return _react2.default.createElement(
        "div",
        { className: "event-box", style: boxStyleMerge },
        _react2.default.createElement(
          "div",
          { className: "event", style: eventStyleMerge, onClick: this.dispatchEventClick.bind(this) },
          title
        )
      );
    }
  }]);

  return PartialEvent;
}(_react2.default.Component), _class.propTypes = {
  title: _propTypes2.default.string.isRequired,
  startDate: _propTypes2.default.string.isRequired,
  duration: _propTypes2.default.number.isRequired,
  resource: _propTypes2.default.string.isRequired,
  dispatch: _propTypes2.default.func,
  cellWidth: _propTypes2.default.number,
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.string.isRequired,
  styles: _propTypes2.default.object,
  rowHeight: _propTypes2.default.number.isRequired,
  children: _propTypes2.default.node,
  eventClicked: _propTypes2.default.func.isRequired
}, _temp);
exports.default = PartialEvent;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PartialEvent, "PartialEvent", "src/partial_event.jsx");
}();

;