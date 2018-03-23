'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxBatchedActions = require('redux-batched-actions');

var _range_date = require('./range_date');

var _range_date2 = _interopRequireDefault(_range_date);

var _date_range = require('./date_range');

var _date_range2 = _interopRequireDefault(_date_range);

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _cells = require('./actions/cells');

var _events = require('./actions/events');

var _range = require('./actions/range');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // Vendor Libraries


// Local Libraries


// Actions


// Promise Middleware
var promiseMiddleware = function promiseMiddleware(store) {
  return function (next) {
    return function (action) {
      var callback = action.callback,
          nextAction = action.nextAction,
          type = action.type,
          rest = _objectWithoutProperties(action, ['callback', 'nextAction', 'type']);

      if (!nextAction && !callback) {
        return next(action);
      }

      var p = new Promise(function (resolve) {
        next(_extends({}, rest, { type: type }));
        resolve(store.getState());
      });

      p.then(function (state) {
        if (nextAction) {
          next(_extends({}, rest, { type: action.nextAction, range: state.range.toJS().range, resources: state.event.toJS().resources }));
        } else {
          var id = action.event.id;
          var index = state.event.get('events').findIndex(function (i) {
            return i.get('id') === id;
          });

          callback(state.event.getIn(['events', index]).toJS());
        }
      }).catch(function (ex) {
        next(_extends({}, rest, { ex: ex, type: type + '_FAILURE' }));
        throw new Error(ex);
      });
    };
  };
};

// Create the store
var createStoreWithMiddleware = (0, _redux.applyMiddleware)(promiseMiddleware)(_redux.createStore);
var store = createStoreWithMiddleware((0, _reduxBatchedActions.enableBatching)(_reducers2.default));

var Scheduler = (_temp2 = _class = function (_Component) {
  _inherits(Scheduler, _Component);

  function Scheduler() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Scheduler);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Scheduler.__proto__ || Object.getPrototypeOf(Scheduler)).call.apply(_ref, [this].concat(args))), _this), _this.fireEventChanged = function () {
      var _this2;

      return (_this2 = _this).__fireEventChanged__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.fireEventResized = function () {
      var _this3;

      return (_this3 = _this).__fireEventResized__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.fireEventClicked = function () {
      var _this4;

      return (_this4 = _this).__fireEventClicked__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _this.fireCellClicked = function () {
      var _this5;

      return (_this5 = _this).__fireCellClicked__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.fireRangeChanged = function () {
      var _this6;

      return (_this6 = _this).__fireRangeChanged__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Scheduler, [{
    key: '__fireRangeChanged__REACT_HOT_LOADER__',
    value: function __fireRangeChanged__REACT_HOT_LOADER__() {
      return this.__fireRangeChanged__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__fireCellClicked__REACT_HOT_LOADER__',
    value: function __fireCellClicked__REACT_HOT_LOADER__() {
      return this.__fireCellClicked__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__fireEventClicked__REACT_HOT_LOADER__',
    value: function __fireEventClicked__REACT_HOT_LOADER__() {
      return this.__fireEventClicked__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__fireEventResized__REACT_HOT_LOADER__',
    value: function __fireEventResized__REACT_HOT_LOADER__() {
      return this.__fireEventResized__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__fireEventChanged__REACT_HOT_LOADER__',
    value: function __fireEventChanged__REACT_HOT_LOADER__() {
      return this.__fireEventChanged__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          resources = _props.resources,
          from = _props.from,
          to = _props.to,
          range = new _date_range2.default(from, to);


      this.initializeStore(this.props);
      store.dispatch((0, _cells.createCells)(resources, range));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.initializeStore(nextProps);
    }
  }, {
    key: 'initializeStore',
    value: function initializeStore(props) {
      var resources = props.resources,
          events = props.events,
          from = props.from,
          to = props.to,
          range = new _date_range2.default(from, to);


      store.dispatch((0, _reduxBatchedActions.batchActions)([(0, _range.setRange)(range), (0, _events.replaceResources)(resources), (0, _events.replaceEvents)(events)]));
    }
  }, {
    key: '__fireEventChanged__REACT_HOT_LOADER__',
    value: function __fireEventChanged__REACT_HOT_LOADER__(props) {
      var onEventChanged = this.props.onEventChanged,
          id = props.id,
          title = props.title,
          startDate = props.startDate,
          duration = props.duration,
          resource = props.resource,
          disabled = props.disabled;

      if (onEventChanged) onEventChanged({ id: id, title: title, startDate: startDate, duration: duration, resource: resource, disabled: disabled });
    }
  }, {
    key: '__fireEventResized__REACT_HOT_LOADER__',
    value: function __fireEventResized__REACT_HOT_LOADER__(props) {
      var onEventResized = this.props.onEventResized,
          id = props.id,
          title = props.title,
          startDate = props.startDate,
          duration = props.duration,
          resource = props.resource,
          disabled = props.disabled;

      if (onEventResized) onEventResized({ id: id, title: title, startDate: startDate, duration: duration, resource: resource, disabled: disabled });
    }
  }, {
    key: '__fireEventClicked__REACT_HOT_LOADER__',
    value: function __fireEventClicked__REACT_HOT_LOADER__(props) {
      var onEventClicked = this.props.onEventClicked,
          id = props.id,
          title = props.title,
          startDate = props.startDate,
          duration = props.duration,
          resource = props.resource,
          disabled = props.disabled;

      if (onEventClicked) onEventClicked({ id: id, title: title, startDate: startDate, duration: duration, resource: resource, disabled: disabled });
    }
  }, {
    key: '__fireCellClicked__REACT_HOT_LOADER__',
    value: function __fireCellClicked__REACT_HOT_LOADER__(resource, date) {
      var onCellClicked = this.props.onCellClicked;

      if (onCellClicked) onCellClicked(resource, date);
    }
  }, {
    key: '__fireRangeChanged__REACT_HOT_LOADER__',
    value: function __fireRangeChanged__REACT_HOT_LOADER__(range) {
      var onRangeChanged = this.props.onRangeChanged;

      if (onRangeChanged) onRangeChanged(range);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_layout2.default, _extends({}, this.props, {
          rangeChanged: this.fireRangeChanged,
          eventChanged: this.fireEventChanged,
          eventResized: this.fireEventResized,
          eventClicked: this.fireEventClicked,
          cellClicked: this.fireCellClicked
        }))
      );
    }
  }]);

  return Scheduler;
}(_react.Component), _class.propTypes = {
  resources: _propTypes2.default.array.isRequired,
  events: _propTypes2.default.array.isRequired,
  from: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  rowHeight: _propTypes2.default.number,
  width: _propTypes2.default.number.isRequired,
  onEventChanged: _propTypes2.default.func,
  onEventResized: _propTypes2.default.func,
  onEventClicked: _propTypes2.default.func,
  onCellClicked: _propTypes2.default.func,
  onRangeChanged: _propTypes2.default.func
}, _class.defaultProps = {
  from: new _range_date2.default(),
  to: new _range_date2.default().advance('weeks', 4),
  rowHeight: 30,
  selectorStyles: {},
  chartStyles: {}
}, _temp2);
exports.default = Scheduler;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(promiseMiddleware, 'promiseMiddleware', 'src/scheduler.jsx');

  __REACT_HOT_LOADER__.register(createStoreWithMiddleware, 'createStoreWithMiddleware', 'src/scheduler.jsx');

  __REACT_HOT_LOADER__.register(store, 'store', 'src/scheduler.jsx');

  __REACT_HOT_LOADER__.register(Scheduler, 'Scheduler', 'src/scheduler.jsx');
}();

;