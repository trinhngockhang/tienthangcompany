'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _ref2 = (0, _jsx3.default)('meta', {
    charSet: 'utf-8'
});

var _ref3 = (0, _jsx3.default)('meta', {
    httpEquiv: 'x-ua-compatible',
    content: 'ie=edge'
});

var _ref4 = (0, _jsx3.default)('meta', {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
});

var _ref5 = (0, _jsx3.default)('link', {
    href: '/static/css/bootstrap-3.1.1.min.css',
    rel: 'stylesheet',
    type: 'text/css'
});

var _ref6 = (0, _jsx3.default)('script', {
    src: '/static/js/jquery.min.js'
});

var _ref7 = (0, _jsx3.default)('link', {
    href: '/static/css/style.css',
    rel: 'stylesheet',
    type: 'text/css',
    media: 'all'
});

var _ref8 = (0, _jsx3.default)('link', {
    href: '/static/css/popuo-box.css',
    rel: 'stylesheet',
    type: 'text/css',
    media: 'all'
});

var _ref9 = (0, _jsx3.default)('script', {
    src: '/static/js/jquery.magnific-popup.js',
    type: 'text/javascript'
});

var _ref10 = (0, _jsx3.default)('link', {
    href: 'http://fonts.googleapis.com/css?family=Raleway',
    rel: 'stylesheet',
    type: 'text/css'
});

var _ref11 = (0, _jsx3.default)('link', {
    href: 'http://fonts.googleapis.com/css?family=Poiret+One',
    rel: 'stylesheet',
    type: 'text/css'
});

var _ref12 = (0, _jsx3.default)('script', {
    src: '/static/js/bootstrap.min.js'
});

var _ref13 = (0, _jsx3.default)('script', {
    src: '/static/js/simpleCart.min.js'
}, void 0, ' ');

var _ref14 = (0, _jsx3.default)('script', {
    src: '/static/js/responsiveslides.min.js'
});

var _ref15 = (0, _jsx3.default)('link', {
    href: '/static/css/animate.min.css',
    rel: 'stylesheet'
});

var _ref16 = (0, _jsx3.default)('script', {
    src: '/static/js/wow.min.js'
});

var _ref17 = (0, _jsx3.default)('script', {}, void 0, 'new WOW().init();');

var _ref18 = (0, _jsx3.default)(_Header2.default, {});

var _ref19 = (0, _jsx3.default)(_Footer2.default, {});

exports.default = function (_ref) {
    var children = _ref.children,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? 'Vật liệu xây dựng' : _ref$title,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? 'mua hang online' : _ref$description;

    return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_head2.default, {}, void 0, _ref2, _ref3, _ref4, (0, _jsx3.default)('title', {}, void 0, title), (0, _jsx3.default)('meta', {
        name: 'description',
        content: description
    }), _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17), _ref18, children, _ref19);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHNcXGluZGV4LmpzIl0sIm5hbWVzIjpbImNoaWxkcmVuIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7YUFPOEI7Ozs7ZUFDRSxBO2FBQTBCOzs7O1UsQUFDL0I7YUFBbUI7Ozs7VUFHbkIsQTtTQUEwQyxBO1VBQWtCOzs7O1NBQzNEOzs7O1VBQ0QsQTtTQUE0QixBO1VBQWtCLEE7V0FBaUI7Ozs7VSxBQUMvRDtTLEFBQWdDO1UsQUFBa0I7V0FBaUI7Ozs7U0FDbEUsQTtVQUEyQzs7OztVQUM1QyxBO1NBQXFELEE7VUFBa0I7Ozs7VUFDdkUsQTtTQUF3RCxBO1VBQWtCOzs7O1NBQ3pFOzs7O1NBQ0E7Ozs7U0FDQTs7OztVQUNELEE7U0FBa0M7Ozs7U0FDakM7Ozs7Ozs7OztrQkFwQmIsZ0JBQWdGO1FBQTdFLEFBQTZFLGdCQUE3RSxBQUE2RTswQkFBbkUsQUFBbUU7UUFBbkUsQUFBbUUsbUNBQTNELEFBQTJELHNCQUFBO2dDQUF0QyxBQUFzQztRQUF0QyxBQUFzQywrQ0FBeEIsQUFBd0Isb0JBQzNGOzs2SkFBQSxBQU1vQjtjQU5wQixBQU91QjtpQkFQdkIsQUFPOEM7QUFQOUMsb0hBQUEsQUF5QlMsVUFJWjtBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ikc6L1JlYWN0IGJvaWxlcnBsYXRlIn0=