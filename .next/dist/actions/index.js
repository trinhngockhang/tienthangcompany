'use strict';

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetchData = require('./fetchData');

(0, _keys2.default)(_fetchData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  (0, _defineProperty2.default)(exports, key, {
    enumerable: true,
    get: function get() {
      return _fetchData[key];
    }
  });
});

var _adminRole = require('./adminRole');

(0, _keys2.default)(_adminRole).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  (0, _defineProperty2.default)(exports, key, {
    enumerable: true,
    get: function get() {
      return _adminRole[key];
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFBO2lEQUFBOzs7Z0JBQUE7d0JBQUE7d0JBQUE7QUFBQTtBQUFBOzs7OztBQUVBLHVEQUFBO2lEQUFBOzs7Z0JBQUE7d0JBQUE7d0JBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ikc6L1JlYWN0IGJvaWxlcnBsYXRlIn0=