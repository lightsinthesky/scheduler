"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp; // Vendor Libraries


// Local Libraries


// Styles


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = require("react-dnd-html5-backend");

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

require("legit-rubyfill/array/each_slice");

require("legit-rubyfill/array/equals");

var _event = require("./event");

var _event2 = _interopRequireDefault(_event);

var _header = require("./header");

var _header2 = _interopRequireDefault(_header);

var _partial_event = require("./partial_event");

var _partial_event2 = _interopRequireDefault(_partial_event);

var _cell = require("./cell");

var _cell2 = _interopRequireDefault(_cell);

var _range_date = require("./range_date");

var _range_date2 = _interopRequireDefault(_range_date);

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chart = (_dec = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Chart, _Component);

  function Chart(props) {
    _classCallCheck(this, Chart);

    return _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, props));
  }

  _createClass(Chart, [{
    key: "handleScroll",
    value: function handleScroll(event) {
      if (this.refs.scroller) {
        this.props.scroll(this.refs.scroller.scrollLeft);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this2 = this;

      var shouldUpdate = true;

      // First test to see if the resources are exactly the same
      if (nextProps.resources.equals(this.props.resources)) {
        shouldUpdate = false;
      }

      // Now let's look at the events and see if they are different
      nextProps.events.forEach(function (event, idx) {
        if (!_this2.areObjectsEqual(event, _this2.props.events[idx])) {
          shouldUpdate = true;
        }
      });

      return shouldUpdate;
    }
  }, {
    key: "areObjectsEqual",
    value: function areObjectsEqual(first, second) {
      return Object.keys(first).reduce(function (prev, curr) {
        if (first[curr] !== second[curr]) {
          return false;
        }
      }, true);
    }
  }, {
    key: "renderEvent",
    value: function renderEvent(resource, date) {
      var _this3 = this;

      var _props = this.props,
          rowHeight = _props.rowHeight,
          eventChanged = _props.eventChanged,
          eventResized = _props.eventResized,
          eventRenderer = _props.eventRenderer,
          eventClicked = _props.eventClicked;

      var currentEvent = this.props.events.find(function (event) {
        return event.resource === resource.id && event.startDate === date;
      });

      if (currentEvent) {
        return _react2.default.createElement(_event2.default, _extends({}, currentEvent, {
          rowHeight: rowHeight,
          eventChanged: eventChanged,
          eventResized: eventResized,
          eventClicked: eventClicked,
          color: resource.color,
          renderer: eventRenderer
        }));
      } else {
        var partialEvent = this.props.events.find(function (event) {
          var eventEnd = new _range_date2.default(event.startDate).advance("days", event.duration),
              from = _this3.props.range.from.date,
              eventStart = new _range_date2.default(event.startDate).date;

          return eventEnd.toRef() === date && from.isAfter(eventStart, "day") && event.resource === resource.id;
        });

        if (partialEvent) return _react2.default.createElement(_partial_event2.default, _extends({}, partialEvent, {
          rowHeight: rowHeight,
          eventClicked: eventClicked,
          color: resource.color
        }));
      }
    }
  }, {
    key: "cellClicked",
    value: function cellClicked(ev, resource, date) {
      ev.stopPropagation();
      var targetClass = ev.target.attributes[0].value;
      if (targetClass !== "resizer") {
        this.props.cellClicked(resource, date);
      }
    }
  }, {
    key: "renderCell",
    value: function renderCell(resource, date) {
      var _this4 = this;

      var _props2 = this.props,
          width = _props2.width,
          resourceWidth = _props2.resourceWidth,
          range = _props2.range,
          cellWidth = _props2.cellWidth;


      return _react2.default.createElement(
        "div",
        {
          className: "cell-wrapper",
          key: "" + resource + date,
          style: Object.assign({
            /*width: `${(width - resourceWidth) / range.daysInRange() + 1}px`,*/
            width: cellWidth,
            height: this.props.rowHeight
          }, _styles.cellWrapper)
        },
        _react2.default.createElement(
          _cell2.default,
          {
            resource: resource.id,
            date: date,
            onClick: function onClick(ev) {
              return _this4.cellClicked.call(_this4, ev, resource, date);
            }
          },
          this.renderEvent(resource, date)
        )
      );
    }
  }, {
    key: "renderRow",
    value: function renderRow(resource, idx) {
      var _this5 = this;

      var _props3 = this.props,
          range = _props3.range,
          resourceWidth = _props3.resourceWidth,
          width = _props3.width,
          cellWidth = _props3.cellWidth;

      //cellWidth

      var rowLength = cellWidth * range.daysInRange();
      return _react2.default.createElement(
        "div",
        { key: idx, className: "row-wrapper", style: { width: rowLength + "px", display: "flex" } },
        range.map(function (date) {
          return _this5.renderCell(resource, date.toRef());
        })
      );
    }
  }, {
    key: "createCells",
    value: function createCells() {
      var _this6 = this;

      var resources = this.props.resources,
          rows = [];


      resources.forEach(function (resource, idx) {
        rows.push(_this6.renderRow(resource, idx));
      });

      return rows;
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var _props4 = this.props,
          range = _props4.range,
          headerHeight = _props4.headerHeight,
          width = _props4.width,
          resourceWidth = _props4.resourceWidth,
          cellWidth = _props4.cellWidth,
          eventHeaderRenderer = _props4.eventHeaderRenderer,
          resourceHeaderRenderer = _props4.resourceHeaderRenderer;


      return _react2.default.createElement(
        "div",
        {
          className: "chart",
          style: Object.assign({ width: width - resourceWidth + "px" }, _styles.chart),
          onScroll: function onScroll(e) {
            return _this7.handleScroll(e);
          },
          ref: "scroller"
        },
        _react2.default.createElement(_header2.default, {
          range: range,
          height: headerHeight,
          width: width,
          cellWidth: cellWidth,
          renderer: eventHeaderRenderer,
          resourceRenderer: resourceHeaderRenderer,
          resourceWidth: resourceWidth
        }),
        this.createCells()
      );
    }
  }]);

  return Chart;
}(_react.Component), _class2.propTypes = {
  events: _propTypes2.default.array.isRequired,
  resources: _propTypes2.default.array.isRequired,
  range: _propTypes2.default.object.isRequired,
  cells: _propTypes2.default.object.isRequired,
  eventChanged: _propTypes2.default.func.isRequired,
  eventResized: _propTypes2.default.func.isRequired,
  eventClicked: _propTypes2.default.func.isRequired,
  cellClicked: _propTypes2.default.func.isRequired,
  rowHeight: _propTypes2.default.number.isRequired,
  width: _propTypes2.default.number.isRequired
}, _temp)) || _class);
exports.default = Chart;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Chart, "Chart", "src/chart.jsx");
}();

;