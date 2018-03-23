'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.advanceRange = advanceRange;
exports.retardRange = retardRange;
exports.setRange = setRange;
exports.clearRangeFlag = clearRangeFlag;
function advanceRange() {
  return {
    type: 'advanceRange',
    nextAction: 'createCells'
  };
}

function retardRange() {
  return {
    type: 'retardRange',
    nextAction: 'createCells'
  };
}

function setRange(range) {
  return {
    type: 'setRange',
    range: range
  };
}

function clearRangeFlag() {
  return {
    type: 'clearRangeFlag'
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(advanceRange, 'advanceRange', 'src/actions/range.js');

  __REACT_HOT_LOADER__.register(retardRange, 'retardRange', 'src/actions/range.js');

  __REACT_HOT_LOADER__.register(setRange, 'setRange', 'src/actions/range.js');

  __REACT_HOT_LOADER__.register(clearRangeFlag, 'clearRangeFlag', 'src/actions/range.js');
}();

;