'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = 'D:\\code\\Tienthang\\tienthangcompany\\hoc\\index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _ref = (0, _jsx3.default)(_head2.default, {}, void 0, (0, _jsx3.default)('meta', {
    charSet: 'utf-8'
}), (0, _jsx3.default)('meta', {
    httpEquiv: 'x-ua-compatible',
    content: 'ie=edge'
}), (0, _jsx3.default)('meta', {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
}), (0, _jsx3.default)('title', {}, void 0, 'Call me crazy!'), (0, _jsx3.default)('meta', {
    name: 'description',
    content: 'Call me crazy'
}));

var PageWrapper = function PageWrapper(Page) {
    return function (_React$Component) {
        (0, _inherits3.default)(Higher, _React$Component);

        function Higher() {
            (0, _classCallCheck3.default)(this, Higher);
            return (0, _possibleConstructorReturn3.default)(this, (Higher.__proto__ || (0, _getPrototypeOf2.default)(Higher)).apply(this, arguments));
        }

        (0, _createClass3.default)(Higher, [{
            key: 'render',
            value: function render() {
                return (0, _jsx3.default)('div', {}, void 0, _ref, _react2.default.createElement(Page, (0, _extends3.default)({}, this.props, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                })));
            }
        }], [{
            key: 'getInitialProps',
            value: function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!Page.getInitialProps) {
                                        _context.next = 6;
                                        break;
                                    }

                                    _context.next = 3;
                                    return Page.getInitialProps(ctx);

                                case 3:
                                    _context.t0 = _context.sent;
                                    _context.next = 7;
                                    break;

                                case 6:
                                    _context.t0 = {};

                                case 7:
                                    return _context.abrupt('return', _context.t0);

                                case 8:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function getInitialProps(_x) {
                    return _ref2.apply(this, arguments);
                }

                return getInitialProps;
            }()
        }]);
        return Higher;
    }(_react2.default.Component);
};

exports.default = PageWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvY1xcaW5kZXguanMiXSwibmFtZXMiOlsiUGFnZVdyYXBwZXIiLCJQYWdlIiwicHJvcHMiLCJjdHgiLCJnZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7O2FBV3NDOztlQUNFLEE7YUFBMEI7O1VBQy9CLEE7YUFBbUI7O1VBRW5CLEE7YUFBc0I7OztBQWJ6RCxJQUFNLGNBQWMsU0FBZCxBQUFjLFlBQUEsQUFBQyxNQUFTLEFBQzFCO3VDQUFBO3dDQUFBOzswQkFBQTtnREFBQTswSUFBQTtBQUFBOzs7aUJBQUE7cUNBSWEsQUFDTDtpR0FTUSxBQUFDLGlDQUFTLEtBQVYsQUFBZTs7a0NBQWY7b0NBVFIsQUFTUSxBQUdYO0FBSFc7QUFBQSxrQkFBQTtBQWRoQjtBQUFBO2lCQUFBOytCQUFBO3NIQUFBLEFBQ2lDLEtBRGpDO2tGQUFBO2tDQUFBOzZEQUFBO3FDQUFBO3lDQUVlLEtBRmYsQUFFb0IsaUJBRnBCO3dEQUFBO0FBQUE7QUFBQTs7b0RBQUE7MkNBRTRDLEtBQUEsQUFBSyxnQkFGakQsQUFFNEMsQUFBcUI7O3FDQUZqRTsyREFBQTtvREFBQTtBQUFBOztxQ0FBQTtrREFBQSxBQUV3RTs7cUNBRnhFOzhFQUFBOztxQ0FBQTtxQ0FBQTtvREFBQTs7QUFBQTtnQ0FBQTtBQUFBOzs2Q0FBQTs2Q0FBQTtBQUFBOzt1QkFBQTtBQUFBO0FBQUE7ZUFBQTtNQUE0QixnQkFBNUIsQUFBa0MsQUFtQnJDO0FBcEJEOztrQkFzQmUsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJEOi9jb2RlL1RpZW50aGFuZy90aWVudGhhbmdjb21wYW55In0=