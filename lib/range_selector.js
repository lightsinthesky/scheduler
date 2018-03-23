'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; // Vendor Libraries


// Actions


// Styles


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _range = require('./actions/range');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangeSelector = (_temp = _class = function (_Component) {
  _inherits(RangeSelector, _Component);

  function RangeSelector(props) {
    _classCallCheck(this, RangeSelector);

    var _this = _possibleConstructorReturn(this, (RangeSelector.__proto__ || Object.getPrototypeOf(RangeSelector)).call(this, props));

    _this.addLeftHover = function () {
      return _this.__addLeftHover__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.addRightHover = function () {
      return _this.__addRightHover__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.removeLeftHover = function () {
      return _this.__removeLeftHover__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.removeRightHover = function () {
      return _this.__removeRightHover__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {};
    return _this;
  }

  _createClass(RangeSelector, [{
    key: '__removeRightHover__REACT_HOT_LOADER__',
    value: function __removeRightHover__REACT_HOT_LOADER__() {
      return this.__removeRightHover__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__removeLeftHover__REACT_HOT_LOADER__',
    value: function __removeLeftHover__REACT_HOT_LOADER__() {
      return this.__removeLeftHover__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__addRightHover__REACT_HOT_LOADER__',
    value: function __addRightHover__REACT_HOT_LOADER__() {
      return this.__addRightHover__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__addLeftHover__REACT_HOT_LOADER__',
    value: function __addLeftHover__REACT_HOT_LOADER__() {
      return this.__addLeftHover__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.rangeDidChange) {
        return true;
      }
      return !this.areCursorsEqual(this.state, nextState);
    }
  }, {
    key: 'areCursorsEqual',
    value: function areCursorsEqual(currentState, nextState) {
      return currentState.rightCursor === nextState.rightCursor && currentState.leftCursor === nextState.leftCursor;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.rangeDidChange) {
        this.props.dispatch((0, _range.clearRangeFlag)());
        this.props.rangeChanged(nextProps.range);
      }
    }
  }, {
    key: '__addLeftHover__REACT_HOT_LOADER__',
    value: function __addLeftHover__REACT_HOT_LOADER__() {
      this.setState({ leftCursor: 'pointer' });
    }
  }, {
    key: '__addRightHover__REACT_HOT_LOADER__',
    value: function __addRightHover__REACT_HOT_LOADER__() {
      this.setState({ rightCursor: 'pointer' });
    }
  }, {
    key: '__removeLeftHover__REACT_HOT_LOADER__',
    value: function __removeLeftHover__REACT_HOT_LOADER__() {
      this.setState({ leftCursor: 'arrow' });
    }
  }, {
    key: '__removeRightHover__REACT_HOT_LOADER__',
    value: function __removeRightHover__REACT_HOT_LOADER__() {
      this.setState({ rightCursor: 'arrow' });
    }
  }, {
    key: 'previousClicked',
    value: function previousClicked() {
      this.props.dispatch((0, _range.retardRange)());
    }
  }, {
    key: 'nextClicked',
    value: function nextClicked() {
      this.props.dispatch((0, _range.advanceRange)());
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          leftCursor = _state.leftCursor,
          rightCursor = _state.rightCursor,
          range = this.props.range,
          mergedLeftButtonStyle = Object.assign({ cursor: leftCursor }, _styles.leftButton),
          mergedRightButtonStyle = Object.assign({ cursor: rightCursor }, _styles.rightButton);


      return _react2.default.createElement(
        'div',
        { className: 'selector-holder', style: _styles.selectors },
        _react2.default.createElement(
          'div',
          {
            className: 'selector-left',
            style: mergedLeftButtonStyle,
            onClick: this.previousClicked.bind(this),
            onMouseOver: this.addLeftHover,
            onMouseLeave: this.removeLeftHover },
          _react2.default.createElement('div', { style: _styles.leftButtonAfter })
        ),
        _react2.default.createElement(
          'div',
          { className: 'selector-range', style: { display: 'inline-block' } },
          range.toString()
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'selector-right',
            style: mergedRightButtonStyle,
            onClick: this.nextClicked.bind(this),
            onMouseOver: this.addRightHover,
            onMouseLeave: this.removeRightHover },
          _react2.default.createElement('div', { style: _styles.rightButtonAfter })
        )
      );
    }
  }]);

  return RangeSelector;
}(_react.Component), _class.propTypes = {
  range: _propTypes2.default.object.isRequired,
  rangeDidChange: _propTypes2.default.bool.isRequired,
  dispatch: _propTypes2.default.func.isRequired,
  rangeChanged: _propTypes2.default.func.isRequired,
  leftCursor: _propTypes2.default.string,
  rightCursor: _propTypes2.default.string
}, _temp);

var _default = (0, _reactRedux.connect)()(RangeSelector);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RangeSelector, 'RangeSelector', 'src/range_selector.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/range_selector.jsx');
}();

;