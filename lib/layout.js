"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; // Vendor Libraries


// Local Libraries


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require("react-redux");

require("legit-rubyfill/array/equals");

var _chart = require("./chart");

var _chart2 = _interopRequireDefault(_chart);

var _header = require("./header");

var _header2 = _interopRequireDefault(_header);

var _resources = require("./resources");

var _resources2 = _interopRequireDefault(_resources);

var _range_selector = require("./range_selector");

var _range_selector2 = _interopRequireDefault(_range_selector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = (_temp = _class = function (_Component) {
  _inherits(Layout, _Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

    _this.state = {
      scrollLeft: 0
    };
    return _this;
  }

  _createClass(Layout, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var shouldUpdate = true;

      //if (nextProps.resources.equals(this.props.resources)) { shouldUpdate = false }
      //if (nextProps.events.length !== this.props.events.length) { shouldUpdate = true }

      return shouldUpdate;
    }
  }, {
    key: "handleScroll",
    value: function handleScroll(e) {
      this.setState({ scrollLeft: e });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          rangeDidChange = _props.rangeDidChange,
          rangeChanged = _props.rangeChanged,
          width = _props.width,
          range = _props.range,
          resources = _props.resources,
          rowHeight = _props.rowHeight,
          resourceWidth = _props.resourceWidth,
          headerHeight = _props.headerHeight,
          eventHeaderRenderer = _props.eventHeaderRenderer,
          resourceHeaderRenderer = _props.resourceHeaderRenderer,
          resourceRenderer = _props.resourceRenderer,
          cellWidth = _props.cellWidth,
          style = _props.style;
      var scrollLeft = this.state.scrollLeft;

      /**<Header
              range={range}
              height={headerHeight}
              width={width}
              cellWidth={cellWidth}
              renderer={eventHeaderRenderer}
              resourceRenderer={resourceHeaderRenderer}
              resourceWidth={resourceWidth}
              scrollLeft={scrollLeft}
            /> */

      var shadowOpacity = scrollLeft;
      return _react2.default.createElement(
        "div",
        { style: Object.assign({}, style, { width: width, overflow: "hidden" }) },
        _react2.default.createElement(
          "div",
          { className: "layout-wrapper", style: { width: width } },
          _react2.default.createElement(
            "div",
            {
              className: "chart-wrapper",
              style: { display: "flex", width: width, position: "relative" }
            },
            _react2.default.createElement(_resources2.default, {
              height: rowHeight,
              width: resourceWidth,
              resources: resources,
              renderer: resourceRenderer,
              headerRenderer: resourceHeaderRenderer
            }),
            _react2.default.createElement(_chart2.default, _extends({}, this.props, { scroll: function scroll(e) {
                return _this2.handleScroll(e);
              } })),
            _react2.default.createElement("div", {
              style: {
                width: 10,
                height: 500,
                backgroundColor: "red",
                position: "absolute",
                top: 0,
                left: resourceWidth,
                zIndex: 9000,
                background: "-webkit-linear-gradient(left, rgba(0,0,0,0.10) 0%,rgba(0,0,0,0) 100%)"
              }
            })
          )
        )
      );
    }
  }]);

  return Layout;
}(_react.Component), _class.propTypes = {
  resources: _propTypes2.default.array.isRequired,
  range: _propTypes2.default.object.isRequired,
  events: _propTypes2.default.array.isRequired,
  cells: _propTypes2.default.object.isRequired,
  eventChanged: _propTypes2.default.func.isRequired,
  eventResized: _propTypes2.default.func.isRequired,
  eventClicked: _propTypes2.default.func.isRequired,
  cellClicked: _propTypes2.default.func.isRequired,
  rangeChanged: _propTypes2.default.func.isRequired,
  rangeDidChange: _propTypes2.default.bool.isRequired,
  width: _propTypes2.default.number.isRequired,
  rowHeight: _propTypes2.default.number.isRequired
}, _temp);

var _default = (0, _reactRedux.connect)(function (state) {
  var _state$range$toJS = state.range.toJS(),
      rangeDidChange = _state$range$toJS.rangeDidChange,
      range = _state$range$toJS.range;

  var _state$event$toJS = state.event.toJS(),
      resources = _state$event$toJS.resources,
      events = _state$event$toJS.events;

  var _state$cells$toJS = state.cells.toJS(),
      cells = _state$cells$toJS.cells;

  return { rangeDidChange: rangeDidChange, cells: cells, range: range, resources: resources, events: events };
})(Layout);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Layout, "Layout", "src/layout.jsx");

  __REACT_HOT_LOADER__.register(_default, "default", "src/layout.jsx");
}();

;