'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _login = require('../static/css/login.css');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _ref = (0, _jsx3.default)('div', {
    className: 'login-page'
}, void 0, (0, _jsx3.default)('div', {
    className: 'form'
}, void 0, (0, _jsx3.default)('form', {
    className: 'login-form',
    action: '/admin/login',
    method: 'post'
}, void 0, (0, _jsx3.default)('input', {
    type: 'text',
    name: 'username',
    placeholder: 'username'
}), (0, _jsx3.default)('input', {
    type: 'password',
    name: 'password',
    placeholder: 'password'
}), (0, _jsx3.default)('button', {}, void 0, 'Login'))));

exports.default = function () {
    return (0, _jsx3.default)('div', {}, void 0, _ref, (0, _jsx3.default)('style', {
        dangerouslySetInnerHTML: { __html: _login2.default }
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhZG1pbi5qcyJdLCJuYW1lcyI6WyJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7ZUFHdUI7O2VBQ0k7O2VBQ0ssQTtZQUFvQixBO1lBQXNCOztVLEFBQzFDO1VBQVksQTtpQkFBdUI7O1UsQUFDbkM7VUFBZ0IsQTtpQkFBdUI7OztrQkFOeEQsWUFBTSxBQUNqQjs7aUNBV29DLEVBQUUsZ0JBWHRDLEFBV29DLEFBRXZDO0FBYkc7QSIsImZpbGUiOiJhZG1pbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9jb2RlL1RpZW50aGFuZy90aWVudGhhbmdjb21wYW55In0=