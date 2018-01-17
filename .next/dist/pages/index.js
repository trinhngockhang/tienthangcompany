'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoc = require('../hoc');

var _hoc2 = _interopRequireDefault(_hoc);

var _style = require('../static/css/style.css');

var _style2 = _interopRequireDefault(_style);

var _actions = require('../actions');

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _HomeBody = require('../components/HomeBody');

var _HomeBody2 = _interopRequireDefault(_HomeBody);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _ref = (0, _jsx3.default)(_Header2.default, {});
// import style from '../static/css/animate.min.css';
// import style from '../static/css/popuo-box.css';


var _ref2 = (0, _jsx3.default)(_HomeBody2.default, {});

function Home(props) {
    return (0, _jsx3.default)('div', {}, void 0, _ref, _ref2, (0, _jsx3.default)('style', {
        dangerouslySetInnerHTML: { __html: _style2.default }
    }));
}

exports.default = (0, _hoc2.default)(Home);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJfX2h0bWwiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7O0FBSkE7QUFDQTs7Ozs7cUJBT2EsQUFDTDs7aUNBSXdDLEVBQUUsZ0JBSjFDLEFBSXdDLEFBRzNDO0FBUEc7OztrQkFVTyxtQkFBQSxBQUFZLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovY29kZS9UaWVudGhhbmcvdGllbnRoYW5nY29tcGFueSJ9