webpackHotUpdate(3,{

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Tile__ = __webpack_require__("./components/Tile.jsx");
var _jsxFileName = '/Users/Alexander/Projects/NodeJS/gg-30-seconds/pages/index.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PlayBoard = function (_React$Component) {
  _inherits(PlayBoard, _React$Component);

  function PlayBoard() {
    _classCallCheck(this, PlayBoard);

    return _possibleConstructorReturn(this, (PlayBoard.__proto__ || Object.getPrototypeOf(PlayBoard)).apply(this, arguments));
  }

  _createClass(PlayBoard, [{
    key: 'render',
    value: function render() {
      var tilePosition = [{ col: 4, row: 5 }, { col: 4, row: 6 }, { col: 4, row: 7 }, { col: 3, row: 7 }, { col: 2, row: 7 }, { col: 1, row: 7 }, { col: 1, row: 6 }, { col: 1, row: 5 }, { col: 1, row: 4 }, { col: 1, row: 3 }, { col: 1, row: 2 }, { col: 1, row: 1 }, { col: 2, row: 1 }, { col: 3, row: 1 }, { col: 4, row: 1 }, { col: 4, row: 2 }, { col: 4, row: 3 }, { col: 5, row: 3 }, { col: 6, row: 3 }, { col: 6, row: 2 }, { col: 6, row: 1 }, { col: 7, row: 1 }, { col: 8, row: 1 }, { col: 9, row: 1 }, { col: 9, row: 2 }, { col: 9, row: 3 }, { col: 9, row: 4 }, { col: 9, row: 5 }, { col: 9, row: 6 }, { col: 9, row: 7 }, { col: 8, row: 7 }, { col: 7, row: 7 }, { col: 6, row: 7 }, { col: 6, row: 6 }, { col: 6, row: 5 }];

      var teams = {
        4: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { key: 'team-1', style: { maxWidth: '40%', height: 'auto' }, src: '/static/images/avatars/banana.gif', __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { key: 'team-2', style: { maxWidth: '40%', height: 'auto' }, src: '/static/images/avatars/patrick.gif', __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        })],
        5: [],
        6: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { key: 'team-3', style: { maxWidth: '40%', height: 'auto' }, src: '/static/images/avatars/carlton.gif', __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        })]
      };

      var tiles = [];

      for (var i = 0; i < 35; i++) {
        var type = i % 2 === 0 ? 'odd' : 'even';

        if (typeof teams[i] !== 'undefined') {
          tiles.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__components_Tile__["a" /* default */],
            { key: 'tile-' + i, index: i, type: type, position: tilePosition[i], __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            teams[i]
          ));
        } else {
          tiles.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Tile__["a" /* default */], { key: 'tile-' + i, index: i, type: type, position: tilePosition[i], __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }));
        }
      }

      var gridStyle = {
        display: 'grid',
        width: '100%',
        height: '100%',
        padding: '20px 20px 20px',
        gridTemplateColumns: 'repeat(9, 1fr)',
        gridTemplateRows: 'repeat(7, 1fr)',
        gridColumnGap: '10px',
        gridRowGap: '10px',
        background: 'rgb(0,0,0)',
        'animation': 'pulse 10s ease-out 10s alternate infinite running'
      };

      var backgroundStyle = {
        width: '100vw',
        height: '100vh',
        background: 'black url("/static/images/background.png") no-repeat center center',
        backgroundSize: 'contain',
        textAlign: 'center'
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'background', style: backgroundStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'style',
            { type: 'text/css', __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            },
            '\n            body {\n              margin: 0;\n              background: black;\n              overflow: hidden;\n              font-family: sans-serif;\n            }\n            \n            @keyframes pulse\n            {\n              0% {background: rgba(0,0,0,0.95);}\n              50%   {background: rgba(0,0,0,0.2);}\n              100%   {background: rgba(0,0,0,0.2);}\n            }\n\n            * {\n              box-sizing: border-box;\n            }\n          '
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'grid', style: gridStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/images/logo-left.png', style: { display: 'block', width: '100%', height: '100%', gridColumn: '2 / span 2', gridRow: '2 / span 5' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            }
          }),
          tiles,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', gridColumn: '4 / span 3', gridRow: '4', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white', borderRadius: '20px', fontSize: '6em' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              }
            },
            'Banana\'s'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/images/logo-right.png', style: { display: 'block', width: '100%', height: '100%', gridColumn: '7 / span 2', gridRow: '2 / span 5' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            }
          })
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return PlayBoard;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = PlayBoard;


/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PlayBoard, 'PlayBoard', '/Users/Alexander/Projects/NodeJS/gg-30-seconds/pages/index.jsx');
  reactHotLoader.register(_default, 'default', '/Users/Alexander/Projects/NodeJS/gg-30-seconds/pages/index.jsx');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/index.jsx")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.ab778aecadea9ac0e6c2.hot-update.js.map