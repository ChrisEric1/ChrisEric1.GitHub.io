"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FeatureFlags = /*#__PURE__*/function () {
  function FeatureFlags() {
    _classCallCheck(this, FeatureFlags);

    this.flags = new Set();
  }

  _createClass(FeatureFlags, [{
    key: "getSupported",
    value: function getSupported() {
      return Array.from(this.flags);
    }
  }, {
    key: "supports",
    value: function supports(feature) {
      return this.flags.has(feature);
    }
  }, {
    key: "declareSupported",
    value: function declareSupported(feature) {
      if (this.supports(feature)) {
        console.error('Feature redeclared; is this a duplicate flag? ', feature);
        return;
      }

      this.flags.add(feature);
    }
  }]);

  return FeatureFlags;
}();

exports["default"] = FeatureFlags;
module.exports = exports.default;
