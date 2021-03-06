'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _range_date = require('./range_date');

var _range_date2 = _interopRequireDefault(_range_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateRange = function () {
  function DateRange() {
    _classCallCheck(this, DateRange);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var from = args[0],
        to = args[1];


    this.from = new _range_date2.default(from);
    this.to = new _range_date2.default(to);
  }

  _createClass(DateRange, [{
    key: 'daysInRange',
    value: function daysInRange() {
      return this.to.date.diff(this.from.date, 'days') + 1;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.from.toString() + ' - ' + this.to.toString();
    }
  }, {
    key: 'advance',
    value: function advance() {
      var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var advanceAmount = reverse ? -this.daysInRange() : this.daysInRange(),
          from = this.from.advance('days', advanceAmount),
          to = this.to.advance('days', advanceAmount);

      return new DateRange(from, to);
    }
  }, {
    key: 'map',
    value: function map(func) {
      var current = this.from,
          dates = [];

      while (current.value() <= this.to.value()) {
        dates.push(func(current));
        current = current.advance('days', 1);
      }

      return dates;
    }
  }, {
    key: 'forEach',
    value: function forEach(func) {
      var current = this.from;

      while (current.value() <= this.to.value()) {
        func(current);
        current = current.advance('days', 1);
      }
    }
  }]);

  return DateRange;
}();

exports.default = DateRange;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DateRange, 'DateRange', 'src/date_range.jsx');
}();

;