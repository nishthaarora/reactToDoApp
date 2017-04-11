webpackHotUpdate(0,{

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _class;\n// import { browserHistory } from 'react-router';\n\n\nvar _react = __webpack_require__(3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(188);\n\nvar _reactRouter = __webpack_require__(198);\n\nvar _reactRouter2 = _interopRequireDefault(_reactRouter);\n\nvar _RaisedButton = __webpack_require__(344);\n\nvar _RaisedButton2 = _interopRequireDefault(_RaisedButton);\n\nvar _MuiThemeProvider = __webpack_require__(357);\n\nvar _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);\n\nvar _TextField = __webpack_require__(350);\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _todoModelReducer = __webpack_require__(133);\n\nvar _todoFooter = __webpack_require__(502);\n\nvar _todoFooter2 = _interopRequireDefault(_todoFooter);\n\nvar _axios = __webpack_require__(210);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reactTapEventPlugin = __webpack_require__(478);\n\nvar _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n(0, _reactTapEventPlugin2.default)();\n\nvar toDoModel = (_dec = (0, _reactRedux.connect)(function (store) {\n    return {\n        item: store.todoModel.item\n    };\n}), _dec(_class = function (_React$Component) {\n    _inherits(toDoModel, _React$Component);\n\n    function toDoModel(context, props) {\n        _classCallCheck(this, toDoModel);\n\n        return _possibleConstructorReturn(this, (toDoModel.__proto__ || Object.getPrototypeOf(toDoModel)).call(this, context, props));\n    }\n\n    _createClass(toDoModel, [{\n        key: 'handleSubmit',\n        value: function handleSubmit(event) {\n            event.preventDefault();\n            _axios2.default.post('/api/create', { newItem: this.props.item.enterTodo, status: 'active' }).then(function (res) {\n                console.log('res2', res);\n            }).catch(function (err) {\n                console.log(err);\n            });\n        }\n    }, {\n        key: 'handleChange',\n        value: function handleChange(event) {\n            this.props.dispatch((0, _todoModelReducer.todoItem)(_defineProperty({}, event.target.name, event.target.value)));\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _MuiThemeProvider2.default,\n                null,\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'form',\n                        { onSubmit: this.handleSubmit.bind(this) },\n                        _react2.default.createElement(_TextField2.default, { className: 'inputField',\n                            name: 'enterTodo',\n                            hintText: 'Hint Text',\n                            floatingLabelText: 'enter your todo',\n                            floatingLabelFixed: true,\n                            onChange: this.handleChange.bind(this)\n                        }),\n                        _react2.default.createElement(\n                            'button',\n                            null,\n                            'Submit'\n                        )\n                    ),\n                    _react2.default.createElement(_todoFooter2.default, null)\n                )\n            );\n        }\n    }]);\n\n    return toDoModel;\n}(_react2.default.Component)) || _class);\nexports.default = toDoModel;\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/components/toDoModel.js\n// module id = 229\n// module chunks = 0\n\n//# sourceURL=webpack:///./app/components/toDoModel.js?");

/***/ })

})