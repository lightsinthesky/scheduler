'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCells = createCells;
function createCells(resources, range) {
  return {
    type: 'createCells',
    range: range,
    resources: resources
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createCells, 'createCells', 'src/actions/cells.js');
}();

;