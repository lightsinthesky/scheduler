"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp; // Vendor Libraries


// Local Libraries


// Styles


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = require("react-dnd");

var _reactRedux = require("react-redux");

var _events = require("./actions/events");

var _constants = require("./constants");

var _link = require("./link");

var _link2 = _interopRequireDefault(_link);

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* globals document */

var eventSource = {
  beginDrag: function beginDrag(props) {
    return {
      resource: props.resource,
      date: props.startDate,
      id: props.id
    };
  },
  endDrag: function endDrag(props, monitor, component) {
    if (!monitor.didDrop()) return;

    component.props.dispatch((0, _events.moveEvent)(props, monitor.getDropResult(), props.eventChanged));
  },
  canDrag: function canDrag(props) {
    return !props.disabled;
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview()
  };
}

var Event = (_dec = (0, _reactDnd.DragSource)(_constants.ItemTypes.EVENT, eventSource, collect), _dec(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Event, _React$Component);

  function Event(props) {
    _classCallCheck(this, Event);

    var _this = _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, props));

    _this.initDrag = function () {
      return _this.__initDrag__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.doDrag = function () {
      return _this.__doDrag__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.stopDrag = function () {
      return _this.__stopDrag__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {};
    return _this;
  }

  _createClass(Event, [{
    key: "__stopDrag__REACT_HOT_LOADER__",
    value: function __stopDrag__REACT_HOT_LOADER__() {
      return this.__stopDrag__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__doDrag__REACT_HOT_LOADER__",
    value: function __doDrag__REACT_HOT_LOADER__() {
      return this.__doDrag__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "__initDrag__REACT_HOT_LOADER__",
    value: function __initDrag__REACT_HOT_LOADER__() {
      return this.__initDrag__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          duration = _props.duration,
          cellWidth = _props.cellWidth,
          width = duration * cellWidth === 0 ? cellWidth : duration * cellWidth - duration - 9;


      this.setState({ cellWidth: cellWidth, width: width, startWidth: width });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refs.resizer.addEventListener("mousedown", this.initDrag, false);
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
    key: "__initDrag__REACT_HOT_LOADER__",
    value: function __initDrag__REACT_HOT_LOADER__(ev) {
      ev.stopPropagation();

      this.setState({
        startX: ev.clientX
      });

      document.documentElement.addEventListener("mousemove", this.doDrag, false);
      document.documentElement.addEventListener("mouseup", this.stopDrag, false);
    }
  }, {
    key: "__doDrag__REACT_HOT_LOADER__",
    value: function __doDrag__REACT_HOT_LOADER__(ev) {
      ev.stopPropagation();
      var _state = this.state,
          startWidth = _state.startWidth,
          startX = _state.startX,
          newWidth = startWidth + ev.clientX - startX;


      this.setState({ width: newWidth });
    }
  }, {
    key: "__stopDrag__REACT_HOT_LOADER__",
    value: function __stopDrag__REACT_HOT_LOADER__(ev) {
      ev.stopPropagation();
      var _props2 = this.props,
          eventResized = _props2.eventResized,
          disabled = _props2.disabled,
          dispatch = _props2.dispatch,
          id = _props2.id,
          title = _props2.title,
          startDate = _props2.startDate,
          resource = _props2.resource,
          styles = _props2.styles,
          width = this.state.width,
          newDuration = this.roundToNearest(width);


      dispatch((0, _events.updateEventDuration)({ disabled: disabled, id: id, title: title, startDate: startDate, resource: resource, styles: styles }, newDuration, eventResized));

      document.documentElement.removeEventListener("mousemove", this.doDrag, false);
      document.documentElement.removeEventListener("mouseup", this.stopDrag, false);
    }
  }, {
    key: "roundToNearest",
    value: function roundToNearest(numToRound) {
      return Math.ceil(numToRound / this.props.cellWidth);
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
      var _props3 = this.props,
          styles = _props3.styles,
          isDragging = _props3.isDragging,
          connectDragSource = _props3.connectDragSource,
          connectDragPreview = _props3.connectDragPreview,
          id = _props3.id,
          title = _props3.title,
          children = _props3.children,
          rowHeight = _props3.rowHeight,
          color = _props3.color,
          renderer = _props3.renderer,
          link = _props3.link,
          rest = _objectWithoutProperties(_props3, ["styles", "isDragging", "connectDragSource", "connectDragPreview", "id", "title", "children", "rowHeight", "color", "renderer", "link"]);

      var width = this.state.width;


      var resizerStyleMerge = Object.assign({ height: "100%" }, _styles.resizerStyles);
      var defaultStyles = { color: "#fff", backgroundColor: color };
      var eventStyleMerge = Object.assign({ width: width }, styles || defaultStyles, _styles.eventStyles);
      var opacity = isDragging ? 0 : 1;
      var boxStyleMerge = Object.assign({ width: width, opacity: opacity }, _styles.boxStyles);

      // link to - how?

      return _react2.default.createElement(
        "div",
        { className: "event-box", style: boxStyleMerge },
        isDragging ? null : connectDragPreview(_react2.default.createElement(
          "div",
          {
            key: id,
            className: "event",
            style: eventStyleMerge,
            onClick: this.dispatchEventClick.bind(this)
          },
          connectDragSource(_react2.default.createElement("span", { style: _styles.eventHandleStyles, className: "event-handle" })),
          renderer(this.props)
        )),
        _react2.default.createElement("span", { className: "resizer", style: resizerStyleMerge, ref: "resizer" }),
        link && _react2.default.createElement(
          "div",
          { style: { position: "absolute", top: 10, right: -1 } },
          _react2.default.createElement(_link2.default, null)
        )
      );
    }
  }]);

  return Event;
}(_react2.default.Component), _class2.propTypes = {
  title: _propTypes2.default.string.isRequired,
  startDate: _propTypes2.default.string.isRequired,
  duration: _propTypes2.default.number.isRequired,
  resource: _propTypes2.default.string.isRequired,
  dispatch: _propTypes2.default.func,
  eventChanged: _propTypes2.default.func.isRequired,
  eventResized: _propTypes2.default.func.isRequired,
  eventClicked: _propTypes2.default.func.isRequired,
  cellWidth: _propTypes2.default.number,
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.string.isRequired,
  styles: _propTypes2.default.object,
  isDragging: _propTypes2.default.bool.isRequired,
  connectDragSource: _propTypes2.default.func.isRequired,
  connectDragPreview: _propTypes2.default.func.isRequired,
  rowHeight: _propTypes2.default.number.isRequired,
  children: _propTypes2.default.node
}, _temp)) || _class);

var _default = (0, _reactRedux.connect)()(Event);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(eventSource, "eventSource", "src/event.jsx");

  __REACT_HOT_LOADER__.register(collect, "collect", "src/event.jsx");

  __REACT_HOT_LOADER__.register(Event, "Event", "src/event.jsx");

  __REACT_HOT_LOADER__.register(_default, "default", "src/event.jsx");
}();

;