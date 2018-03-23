'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var defaultState = (0, _immutable.Map)({
  events: [],
  resources: []
});

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  var index = void 0,
      newEvent = void 0;

  switch (action.type) {
    case 'replaceResources':
      var resources = (0, _immutable.fromJS)(action.resources);
      return state.setIn(['resources'], resources);
    case 'replaceEvents':
      var events = (0, _immutable.fromJS)(action.events);
      return state.setIn(['events'], events);
    case 'moveEvent':
      newEvent = (0, _immutable.Map)(action.event).withMutations(function (map) {
        map.set('startDate', action.cell.date).set('resource', action.cell.resource);
      }).filter(function (value, key) {
        return ['styles', 'duration', 'id', 'resource', 'startDate', 'title'].includes(key);
      });

      index = state.get('events').findIndex(function (item) {
        return item.get('id') === action.event.id;
      });

      return state.setIn(['events', index], newEvent);
    case 'updateEventDuration':
      newEvent = (0, _immutable.Map)(action.event).withMutations(function (map) {
        map.set('duration', action.duration);
      });
      index = state.get('events').findIndex(function (item) {
        return item.get('id') === action.event.id;
      });

      return state.setIn(['events', index], newEvent);
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

  __REACT_HOT_LOADER__.register(defaultState, 'defaultState', 'src/reducers/event.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/reducers/event.js');
}();

;