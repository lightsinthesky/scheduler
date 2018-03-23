'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveEvent = moveEvent;
exports.updateEventDuration = updateEventDuration;
exports.replaceResources = replaceResources;
exports.replaceEvents = replaceEvents;
function moveEvent(event, cell, callback) {
  return {
    type: 'moveEvent',
    callback: callback,
    event: event,
    cell: cell
  };
}

function updateEventDuration(event, duration, callback) {
  return {
    type: 'updateEventDuration',
    callback: callback,
    event: event,
    duration: duration
  };
}

function replaceResources(resources) {
  return {
    type: 'replaceResources',
    resources: resources
  };
}

function replaceEvents(events) {
  return {
    type: 'replaceEvents',
    events: events
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(moveEvent, 'moveEvent', 'src/actions/events.js');

  __REACT_HOT_LOADER__.register(updateEventDuration, 'updateEventDuration', 'src/actions/events.js');

  __REACT_HOT_LOADER__.register(replaceResources, 'replaceResources', 'src/actions/events.js');

  __REACT_HOT_LOADER__.register(replaceEvents, 'replaceEvents', 'src/actions/events.js');
}();

;