"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Backoff = /*#__PURE__*/function () {
  /**
   * Create a backoff instance can automatically backoff retries.
   */
  function Backoff() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var jitter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    _classCallCheck(this, Backoff);

    this._fails = 0;

    if (min <= 0) {
      throw Error("Backoff min value must be greater than zero or backoff will never back-off.");
    }

    this.min = min;
    this.max = max != null ? max : min * 10;
    this.jitter = jitter;
    this._current = min;
  }
  /**
   * Return the number of failures.
   */


  _createClass(Backoff, [{
    key: "succeed",

    /**
     * Clear any pending callbacks and reset the backoff.
     */
    value: function succeed() {
      this.cancel();
      this._fails = 0;
      this._current = this.min;
    }
    /**
     * Incremet the backoff and schedule a callback if provided.
     */

  }, {
    key: "fail",
    value: function fail(callback) {
      var _this = this;

      this._fails += 1;
      var delay = this._current * 2;

      if (this.jitter) {
        delay *= Math.random();
      }

      this._current = Math.min(this._current + delay, this.max);

      if (callback != null) {
        if (this._timeoutId != null) {
          if (this._callback !== callback) {
            throw new Error('callback already pending');
          } else {
            // If the callback is the same, just cancel it and re-schedule.
            this.cancel();
          }
        }

        this._callback = callback;
        this._timeoutId = setTimeout(function () {
          try {
            if (callback != null) {
              callback();
            }
          } finally {
            _this.cancel();
          }
        }, this._current);
      }

      return this._current;
    }
    /**
     *  Clear any pending callbacks.
     */

  }, {
    key: "cancel",
    value: function cancel() {
      this._callback = null;

      if (this._timeoutId != null) {
        clearTimeout(this._timeoutId);
        this._timeoutId = null;
      }
    }
  }, {
    key: "fails",
    get: function get() {
      return this._fails;
    }
    /**
     * Current backoff value in milliseconds.
     */

  }, {
    key: "current",
    get: function get() {
      return this._current;
    }
    /**
     * A callback is going to fire.
     */

  }, {
    key: "pending",
    get: function get() {
      return this._timeoutId != null;
    }
  }]);

  return Backoff;
}();

exports["default"] = Backoff;
module.exports = exports.default;
