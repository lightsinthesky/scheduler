'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp; // Vendor Libraries


// Local LIbraries


// Styles


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = require('react-dnd');

var _constants = require('./constants');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cellTarget = {
  drop: function drop(props, monitor, component) {
    return Object.assign(component.state, props);
  },
  canDrop: function canDrop(props) {
    return !props.children;
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

var Cell = (_dec = (0, _reactDnd.DropTarget)(_constants.ItemTypes.EVENT, cellTarget, collect), _dec(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Cell, _React$Component);

  function Cell(props) {
    _classCallCheck(this, Cell);

    var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, props));

    _this.state = { cellWidth: 0 };
    return _this;
  }

  _createClass(Cell, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var node = this.wrapper;
      var rect = node.getBoundingClientRect();
      var cellWidth = rect.width + 2;

      this.setState({ cellWidth: cellWidth });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      //if (this.state.cellWidth !== nextState.cellWidth) { shouldUpdate = true }
      //if (nextProps.resource !== this.props.resource) { shouldUpdate = true }
      //if (nextProps.date !== this.props.date) { shouldUpdate = true }
      //if (nextProps.children && !this.props.children) { shouldUpdate = true }

      if (!this.areObjectsEqual(this.props.children, nextProps.children)) {
        return true;
      }

      return false;
    }
  }, {
    key: 'areObjectsEqual',
    value: function areObjectsEqual() {
      var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var second = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return Object.keys(first).reduce(function (prev, curr) {
        if (first[curr] !== second[curr]) {
          return false;
        }
      }, true);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          connectDropTarget = _props.connectDropTarget,
          onClick = _props.onClick;


      return connectDropTarget(_react2.default.createElement(
        'div',
        { className: 'cell', style: _styles.cell, onClick: onClick, ref: function ref(el) {
            _this2.wrapper = el;
          } },
        _react2.default.Children.map(children, function (child) {
          return _react2.default.cloneElement(child, _this2.state);
        })
      ));
    }
  }]);

  return Cell;
}(_react2.default.Component), _class2.propTypes = {
  resource: _propTypes2.default.string.isRequired,
  date: _propTypes2.default.string.isRequired
}, _temp)) || _class);
exports.default = Cell;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(cellTarget, 'cellTarget', 'src/cell.jsx');

  __REACT_HOT_LOADER__.register(collect, 'collect', 'src/cell.jsx');

  __REACT_HOT_LOADER__.register(Cell, 'Cell', 'src/cell.jsx');
}();

;