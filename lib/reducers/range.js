'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _range_date = require('../range_date');

var _range_date2 = _interopRequireDefault(_range_date);

var _date_range = require('../date_range');

var _date_range2 = _interopRequireDefault(_date_range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var from = new _range_date2.default();
var to = new _range_date2.default().advance('weeks', 4);

var defaultState = (0, _immutable.Map)({
  range: new _date_range2.default(from, to),
  rangeDidChange: false
});

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  var newRange = void 0;

  switch (action.type) {
    case 'setRange':
      return state.setIn(['range'], action.range);
    case 'advanceRange':
      newRange = state.get('range').advance();
      return state.withMutations(function (map) {
        map.set('range', newRange).set('rangeDidChange', true);
      });
    case 'retardRange':
      newRange = state.get('range').advance(true);
      return state.withMutations(function (map) {
        map.set('range', newRange).set('rangeDidChange', true);
      });
    case 'clearRangeFlag':
      return state.setIn(['rangeDidChange'], false);
    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(from, 'from', 'src/reducers/range.js');

  __REACT_HOT_LOADER__.register(to, 'to', 'src/reducers/range.js');

  __REACT_HOT_LOADER__.register(defaultState, 'defaultState', 'src/reducers/range.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/reducers/range.js');
}();

;