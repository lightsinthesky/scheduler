'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var defaultState = (0, _immutable.Map)({
  cells: (0, _immutable.Map)({})
});

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'createCells':
      var range = action.range,
          resources = action.resources;

      var cells = (0, _immutable.Map)({});

      resources.forEach(function (resource) {
        range.forEach(function (date) {
          cells = cells.setIn(['' + resource + date.toRef()], (0, _immutable.Map)({ resource: resource, date: date.toRef() }));
        });
      });

      return (0, _immutable.fromJS)({ cells: cells });
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

  __REACT_HOT_LOADER__.register(defaultState, 'defaultState', 'src/reducers/cells.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/reducers/cells.js');
}();

;