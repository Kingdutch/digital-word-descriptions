module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../" + ({"2":"chunks/components_KeyHandler_0719f6cc5fb747e8b8f247f52a43e8e9"}[chunkId]||chunkId) + "-" + {"2":"476d1cac27f3e1118af1"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return require('next/dynamic').SameLoopPromise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic__ = __webpack_require__("next/dynamic");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PlayBoard__ = __webpack_require__("./components/PlayBoard.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LoadingScreen__ = __webpack_require__("./components/LoadingScreen.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SplashScreen__ = __webpack_require__("./components/SplashScreen.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CharacterSelection__ = __webpack_require__("./components/CharacterSelection.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TeamOverview__ = __webpack_require__("./components/TeamOverview.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TeamAdd__ = __webpack_require__("./components/TeamAdd.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__VictoryScreen__ = __webpack_require__("./components/VictoryScreen.jsx");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/Alexander/Projects/NodeJS/gg-30-seconds/components/App.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var TILE_COUNT = 29;

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      screen: 'loading',
      teams: [],
      activeTeam: null
    };
    return _this;
  }

  _createClass(App, [{
    key: 'advanceScreen',
    value: function advanceScreen() {
      this.setState(function (prevState, props) {
        var screen = null;
        switch (prevState.screen) {
          case 'loading':
            screen = 'splash';
            break;
          case 'splash':
            screen = 'team_overview';
            break;
          case 'team_add':
            screen = 'team_select_character';
            break;
        }

        if (screen) {
          return { screen: screen };
        }
      });
    }
  }, {
    key: 'addTeamScreen',
    value: function addTeamScreen() {
      this.setState({ screen: 'team_add' });
    }
  }, {
    key: 'addTeam',
    value: function addTeam(name) {
      console.log("Adding team", name);
      this.setState(function (prevState, props) {
        var teams = prevState.teams;
        var team = {
          name: name,
          character: null,
          tile: 0
        };

        teams.push(team);

        return {
          teams: teams,
          screen: 'team_select_character',
          activeTeam: teams.indexOf(team)
        };
      });
    }
  }, {
    key: 'setCharacter',
    value: function setCharacter(character) {
      var _this2 = this;

      this.setState(function (prevState, props) {
        var teams = prevState.teams;
        teams[_this2.state.activeTeam].character = character;

        return {
          teams: teams,
          screen: 'team_overview',
          activeTeam: null
        };
      });
    }
  }, {
    key: 'start',
    value: function start() {
      this.setState(function (prevState, props) {
        return {
          screen: 'play',
          teams: prevState.teams.reverse(),
          activeTeam: 0
        };
      });
    }
  }, {
    key: 'addScore',
    value: function addScore(score) {
      this.setState(function (prevState, props) {
        var teams = prevState.teams;
        teams[prevState.activeTeam].tile += score;

        // You can't go past the final tile (first tile = 0)
        if (teams[prevState.activeTeam].tile >= TILE_COUNT) {
          teams[prevState.activeTeam].tile = TILE_COUNT - 1;
        }

        // If this team has reached the end we have a winner!
        if (teams[prevState.activeTeam].tile === TILE_COUNT - 1) {
          return {
            screen: 'winner'
          };
        }

        // If we're not done we update the team score and advance the active team.
        var activeTeam = (prevState.activeTeam + 1) % teams.length;

        return {
          teams: teams,
          activeTeam: activeTeam
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var sharedProps = {
        goToNextScreen: this.advanceScreen.bind(this)
      };

      var component = void 0;

      switch (this.state.screen) {
        case 'splash':
          component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__SplashScreen__["a" /* default */], _extends({}, sharedProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            }
          }));
          break;
        case 'team_overview':
          component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__TeamOverview__["a" /* default */], { addTeam: this.addTeamScreen.bind(this), play: this.start.bind(this), teams: this.state.teams, __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            }
          });
          break;
        case 'team_add':
          component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__TeamAdd__["a" /* default */], _extends({ addTeam: this.addTeam.bind(this) }, sharedProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            }
          }));
          break;
        case 'team_select_character':
          component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__CharacterSelection__["a" /* default */], _extends({ team: this.state.teams[this.state.activeTeam], setCharacter: this.setCharacter.bind(this) }, sharedProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            }
          }));
          break;
        case 'play':
          component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__PlayBoard__["a" /* default */], { teams: this.state.teams, activeTeam: this.state.activeTeam, addScore: this.addScore.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            }
          });
          break;
        case 'winner':
          component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__VictoryScreen__["a" /* default */], { winner: this.state.teams[this.state.activeTeam], __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            }
          });
          break;
        default:
          component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__LoadingScreen__["a" /* default */], _extends({}, sharedProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            }
          }));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'fullscreen', __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Oswald', rel: 'stylesheet', __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'title',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              }
            },
            'GG Partner Game'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'style',
          { type: 'text/css', __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            }
          },
          '\n            body {\n              margin: 0;\n              background: black;\n              overflow: hidden;\n              font-family: sans-serif;\n              color: white;\n            }\n\n            html, body, #__next, .fullscreen {\n              height: 100%;\n            }\n\n            .fullscreen {\n              overflow: hidden;\n            }\n\n            @keyframes pulse\n            {\n              0% {background: rgba(0,0,0,0.95);}\n              50%   {background: rgba(0,0,0,0.2);}\n              100%   {background: rgba(0,0,0,0.2);}\n            }\n\n            * {\n              box-sizing: border-box;\n            }\n          '
        ),
        component
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./components/CharacterPicture.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/Alexander/Projects/NodeJS/gg-30-seconds/components/CharacterPicture.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var CharacterPicture = function (_React$Component) {
  _inherits(CharacterPicture, _React$Component);

  function CharacterPicture() {
    _classCallCheck(this, CharacterPicture);

    return _possibleConstructorReturn(this, (CharacterPicture.__proto__ || Object.getPrototypeOf(CharacterPicture)).apply(this, arguments));
  }

  _createClass(CharacterPicture, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { style: _extends({ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }, this.props.style), src: '/static/images/avatars/' + this.props.character + '.gif', __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      });
    }
  }]);

  return CharacterPicture;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (CharacterPicture);

/***/ }),

/***/ "./components/CharacterSelection.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic__ = __webpack_require__("next/dynamic");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CharacterPicture__ = __webpack_require__("./components/CharacterPicture.jsx");
var _jsxFileName = "/Users/Alexander/Projects/NodeJS/gg-30-seconds/components/CharacterSelection.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var KeyHandler = __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default()(new (__webpack_require__("next/dynamic").SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/("./components/KeyHandler.jsx");

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  __webpack_require__.e/* require.ensure */(2).then((function (require) {
    try {
      var m = __webpack_require__("./components/KeyHandler.jsx");

      m.__webpackChunkName = 'components_KeyHandler_0719f6cc5fb747e8b8f247f52a43e8e9';
      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}));

var rowWidth = 4;
var characters = ['banana', 'carlton', 'coolparrot', 'homer', 'llama', 'patrick', 'pikachu', 'turd'];

var CharacterSelection = function (_React$Component) {
  _inherits(CharacterSelection, _React$Component);

  function CharacterSelection(props) {
    _classCallCheck(this, CharacterSelection);

    var _this = _possibleConstructorReturn(this, (CharacterSelection.__proto__ || Object.getPrototypeOf(CharacterSelection)).call(this, props));

    _this.state = {
      activeCharacter: 0
    };
    return _this;
  }

  _createClass(CharacterSelection, [{
    key: "selectionRight",
    value: function selectionRight() {
      this.setState(function (prevState, props) {
        // We move right one but wrap on the same row.
        var row = Math.floor(prevState.activeCharacter / rowWidth);
        var selection = (prevState.activeCharacter + 1) % rowWidth + rowWidth * row;

        return {
          activeCharacter: selection
        };
      });
    }
  }, {
    key: "selectionLeft",
    value: function selectionLeft() {
      this.setState(function (prevState, props) {
        // We move left one but wrap on the same row.
        var row = Math.floor(prevState.activeCharacter / rowWidth);
        // We subtract one but add rowWidth to esure we do't go below 0
        var selection = (prevState.activeCharacter - 1 + rowWidth) % rowWidth + rowWidth * row;

        return {
          activeCharacter: selection
        };
      });
    }
  }, {
    key: "selectionUp",
    value: function selectionUp() {
      this.setState(function (prevState, props) {
        var rows = characters.length / rowWidth;

        // We move up an entire row but wrap at the top.
        var selection = prevState.activeCharacter - rowWidth;

        if (selection < 0) {
          selection += characters.length;
        }

        return {
          activeCharacter: selection
        };
      });
    }
  }, {
    key: "selectionDown",
    value: function selectionDown() {
      this.setState(function (prevState, props) {
        // We move down an entire row but wrap at the bottom.
        var selection = (prevState.activeCharacter + rowWidth) % characters.length;

        return {
          activeCharacter: selection
        };
      });
    }
  }, {
    key: "setCharacter",
    value: function setCharacter() {
      this.props.setCharacter(characters[this.state.activeCharacter]);
    }
  }, {
    key: "render",
    value: function render() {

      var containerStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '50% 50%',
        gridGap: "20px",
        margin: '0 20px',
        height: 'calc(100vh - 20em)',
        justifyItems: 'stretch',
        alignItems: 'stretch'
      };

      var selectedStyle = {
        border: '2px solid rgba(75, 174, 231, 0.8)'
      };

      var textStyle = {
        fontSize: '6em'
      };

      var characterPictures = [];

      for (var i in characters) {
        // Array indices (properties) are strings so we must cast for an exact match.
        var style = this.state.activeCharacter.toString() === i ? selectedStyle : null;

        characterPictures.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CharacterPicture__["a" /* default */], { key: 'character' + i, style: style, character: characters[i], __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "fullscreen", style: { textAlign: 'center' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(KeyHandler, {
          left: this.selectionLeft.bind(this),
          right: this.selectionRight.bind(this),
          up: this.selectionUp.bind(this),
          down: this.selectionDown.bind(this),
          "return": this.setCharacter.bind(this), __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h1",
          { style: textStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            }
          },
          "Character Selection"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { style: containerStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            }
          },
          characterPictures
        )
      );
    }
  }]);

  return CharacterSelection;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (CharacterSelection);

/***/ }),

/***/ "./components/LoadingScreen.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Tile__ = __webpack_require__("./components/Tile.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_dynamic__ = __webpack_require__("next/dynamic");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_dynamic__);
var _jsxFileName = '/Users/Alexander/Projects/NodeJS/gg-30-seconds/components/LoadingScreen.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var KeyHandler = __WEBPACK_IMPORTED_MODULE_3_next_dynamic___default()(new (__webpack_require__("next/dynamic").SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/("./components/KeyHandler.jsx");

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  __webpack_require__.e/* require.ensure */(2).then((function (require) {
    try {
      var m = __webpack_require__("./components/KeyHandler.jsx");

      m.__webpackChunkName = 'components_KeyHandler_0719f6cc5fb747e8b8f247f52a43e8e9';
      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}));

var maxDots = 5;

var LoadingScreen = function (_React$Component) {
  _inherits(LoadingScreen, _React$Component);

  function LoadingScreen(props) {
    _classCallCheck(this, LoadingScreen);

    var _this = _possibleConstructorReturn(this, (LoadingScreen.__proto__ || Object.getPrototypeOf(LoadingScreen)).call(this, props));

    _this.state = {
      dots: 0
    };
    return _this;
  }

  _createClass(LoadingScreen, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 800);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.setState(function (prevState, props) {
        return {
          dots: (prevState.dots + 1) % (maxDots + 1)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      };

      var textStyle = {
        fontFamily: 'sans-serif',
        fontSize: '6em'
      };

      var text = 'Loading' + '.'.repeat(this.state.dots) + '\xA0'.repeat(maxDots - this.state.dots);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: containerStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(KeyHandler, { 'return': this.props.goToNextScreen, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { style: textStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          },
          text
        )
      );
    }
  }]);

  return LoadingScreen;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (LoadingScreen);

/***/ }),

/***/ "./components/PlayBoard.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Tile__ = __webpack_require__("./components/Tile.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Team__ = __webpack_require__("./components/Team.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_dynamic__ = __webpack_require__("next/dynamic");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_dynamic__);
var _jsxFileName = '/Users/Alexander/Projects/NodeJS/gg-30-seconds/components/PlayBoard.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var KeyHandler = __WEBPACK_IMPORTED_MODULE_4_next_dynamic___default()(new (__webpack_require__("next/dynamic").SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/("./components/KeyHandler.jsx");

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  __webpack_require__.e/* require.ensure */(2).then((function (require) {
    try {
      var m = __webpack_require__("./components/KeyHandler.jsx");

      m.__webpackChunkName = 'components_KeyHandler_0719f6cc5fb747e8b8f247f52a43e8e9';
      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}));

var PlayBoard = function (_React$Component) {
  _inherits(PlayBoard, _React$Component);

  function PlayBoard(props) {
    _classCallCheck(this, PlayBoard);

    var _this = _possibleConstructorReturn(this, (PlayBoard.__proto__ || Object.getPrototypeOf(PlayBoard)).call(this, props));

    _this.state = {
      action: 'waiting'
    };
    return _this;
  }

  _createClass(PlayBoard, [{
    key: 'enterScore',
    value: function enterScore(correctWords) {
      var score = correctWords - this.state.dieCount;

      // You can't go backwards.
      if (score < 0) {
        score = 0;
      }

      console.log("Received", correctWords, "correct words with discount", this.state.dieCount, "for total", score);

      this.setState({
        action: 'waiting'
      });

      this.props.addScore(score);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: 'roll',
    value: function roll(reset) {
      var die = ['0', '0', '1', '1', '2', '2'];

      if (reset || this.state.bounces > 0) {
        this.setState(function (prevState, props) {
          return {
            action: 'rolling',
            // Generate number [0..2]
            dieCount: parseInt(die[Math.floor(Math.random() * die.length)], 10),
            bounces: reset ? 17 : prevState.bounces - 1
          };
        });
      } else {
        clearInterval(this.timerID);
        this.setState({ action: 'ready' });
      }
    }
  }, {
    key: 'countDown',
    value: function countDown(reset) {
      if (reset || this.state.bounces > 1) {
        this.setState(function (prevState, props) {
          return {
            action: 'counting',
            bounces: reset ? 30 : prevState.bounces - 1
          };
        });
      } else {
        clearInterval(this.timerID);
        this.setState({ action: 'score' });
      }
    }
  }, {
    key: 'returnHandler',
    value: function returnHandler() {
      var _this2 = this;

      // After waiting we roll the die.
      if (this.state.action === 'waiting') {
        this.timerID = setInterval(function () {
          return _this2.roll(false);
        }, 100);
        this.roll(true);
      } else if (this.state.action === 'ready') {
        this.countDown(true);
        this.timerID = setInterval(function () {
          return _this2.countDown();
        }, 1000);
      }
    }
  }, {
    key: 'renderStatus',
    value: function renderStatus() {
      var centerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // Center of the board.
        gridColumn: '2 / span 7',
        gridRow: '3 / span 2',
        fontSize: '4em'
      };

      var statusStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // Top middle of the board.
        gridColumn: '4 / span 3',
        gridRow: 1,
        fontSize: '4em'
      };

      switch (this.state.action) {
        case 'waiting':
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: 'announcement', style: centerStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              }
            },
            'Roll Dice'
          );
        case 'rolling':
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: 'announcement', style: centerStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              }
            },
            this.state.dieCount
          );
        case 'ready':
          return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: 'discount', style: statusStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              }
            },
            'Rolled: ',
            this.state.dieCount
          ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: 'announcement', style: centerStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              }
            },
            'Ready?'
          )];
        case 'counting':
          return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: 'discount', style: statusStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 122
              }
            },
            'Rolled: ',
            this.state.dieCount
          ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: 'announcement', style: centerStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              }
            },
            this.state.bounces
          )];
        case 'score':
          return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: 'discount', style: statusStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 127
              }
            },
            'Rolled: ',
            this.state.dieCount
          ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: 'announcement', style: centerStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              }
            },
            'Time\'s Up! ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              }
            }),
            'Enter amount of correct words'
          ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(KeyHandler, {
            key: 'inputHandler',
            zero: this.enterScore.bind(this, [0]),
            one: this.enterScore.bind(this, [1]),
            two: this.enterScore.bind(this, [2]),
            three: this.enterScore.bind(this, [3]),
            four: this.enterScore.bind(this, [4]),
            five: this.enterScore.bind(this, [5]),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            }
          })];
      }

      return '';
    }
  }, {
    key: 'getTeamsOnTiles',
    value: function getTeamsOnTiles() {
      var teamsOnTiles = [];

      // Iterate over teams to group them by tile
      for (var i = 0; i < this.props.teams.length; i++) {
        var team = this.props.teams[i];

        if (typeof teamsOnTiles[team.tile] === 'undefined') {
          teamsOnTiles[team.tile] = [];
        }

        teamsOnTiles[team.tile].push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Team__["a" /* default */], { key: 'team-' + i, pictureOnly: true, name: team.name, character: team.character, __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        }));
      }

      return teamsOnTiles;
    }
  }, {
    key: 'renderBoard',
    value: function renderBoard(teamsOnTiles) {
      var tiles = [];

      for (var i = 0; i < tilePosition.length; i++) {
        // First tile should be blue (even).
        var type = i % 2 === 0 ? 'even' : 'odd';

        if (typeof teamsOnTiles[i] !== 'undefined') {
          tiles.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__components_Tile__["a" /* default */],
            { key: 'tile-' + i, index: i, type: type, position: tilePosition[i], __source: {
                fileName: _jsxFileName,
                lineNumber: 169
              }
            },
            teamsOnTiles[i]
          ));
        } else {
          tiles.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Tile__["a" /* default */], { key: 'tile-' + i, index: i, type: type, position: tilePosition[i], __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            }
          }));
        }
      }

      return tiles;
    }
  }, {
    key: 'render',
    value: function render() {
      var teamsOnTiles = this.getTeamsOnTiles();
      var tiles = this.renderBoard(teamsOnTiles);
      var status = this.renderStatus();

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
        'animation': 'pulse 20s ease-out 10s alternate infinite running'
      };

      var backgroundStyle = {
        width: '100vw',
        height: '100vh',
        background: 'black url("/static/images/background.png") no-repeat top center',
        backgroundSize: 'contain',
        textAlign: 'center'
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'background', style: backgroundStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(KeyHandler, { 'return': this.returnHandler.bind(this), __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 208
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'style',
            { type: 'text/css', __source: {
                fileName: _jsxFileName,
                lineNumber: 209
              }
            },
            '\n            @keyframes pulse\n            {\n              0% {background: rgba(0,0,0,0.95);}\n              50%   {background: rgba(0,0,0,0.2);}\n              100%   {background: rgba(0,0,0,0.2);}\n            }\n          '
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'grid', style: gridStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 219
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/images/logo.png', style: { display: 'block', width: '100%', height: '100%', gridColumn: '1 / span 3', gridRow: '1' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 220
            }
          }),
          status,
          tiles,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gridColumn: '7 / span 3', gridRow: '1', color: 'white', fontSize: '4em' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 223
              }
            },
            this.props.teams[this.props.activeTeam].name
          )
        )
      );
    }
  }]);

  return PlayBoard;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

// Original Tile Position
// const tilePosition = [
//   { col: 4, row: 5 },
//   { col: 4, row: 6 },
//   { col: 4, row: 7 },
//   { col: 3, row: 7 },
//   { col: 2, row: 7 },
//   { col: 1, row: 7 },
//   { col: 1, row: 6 },
//   { col: 1, row: 5 },
//   { col: 1, row: 4 },
//   { col: 1, row: 3 },
//   { col: 1, row: 2 },
//   { col: 1, row: 1 },
//   { col: 2, row: 1 },
//   { col: 3, row: 1 },
//   { col: 4, row: 1 },
//   { col: 4, row: 2 },
//   { col: 4, row: 3 },
//   { col: 5, row: 3 },
//   { col: 6, row: 3 },
//   { col: 6, row: 2 },
//   { col: 6, row: 1 },
//   { col: 7, row: 1 },
//   { col: 8, row: 1 },
//   { col: 9, row: 1 },
//   { col: 9, row: 2 },
//   { col: 9, row: 3 },
//   { col: 9, row: 4 },
//   { col: 9, row: 5 },
//   { col: 9, row: 6 },
//   { col: 9, row: 7 },
//   { col: 8, row: 7 },
//   { col: 7, row: 7 },
//   { col: 6, row: 7 },
//   { col: 6, row: 6 },
//   { col: 6, row: 5 },
// ];

// Aesthetic tile position


var tilePosition = [{ col: 4, row: 5 }, { col: 4, row: 6 }, { col: 4, row: 7 }, { col: 3, row: 7 }, { col: 2, row: 7 }, { col: 1, row: 7 }, { col: 1, row: 6 }, { col: 1, row: 5 }, { col: 1, row: 4 }, { col: 1, row: 3 }, { col: 1, row: 2 }, { col: 2, row: 2 }, { col: 3, row: 2 }, { col: 4, row: 2 }, { col: 5, row: 2 }, { col: 6, row: 2 }, { col: 7, row: 2 }, { col: 8, row: 2 }, { col: 9, row: 2 }, { col: 9, row: 3 }, { col: 9, row: 4 }, { col: 9, row: 5 }, { col: 9, row: 6 }, { col: 9, row: 7 }, { col: 8, row: 7 }, { col: 7, row: 7 }, { col: 6, row: 7 }, { col: 6, row: 6 }, { col: 6, row: 5 }];

/* harmony default export */ __webpack_exports__["a"] = (PlayBoard);

/***/ }),

/***/ "./components/SplashScreen.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic__ = __webpack_require__("next/dynamic");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_dynamic__);
var _jsxFileName = '/Users/Alexander/Projects/NodeJS/gg-30-seconds/components/SplashScreen.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var KeyHandler = __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default()(new (__webpack_require__("next/dynamic").SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/("./components/KeyHandler.jsx");

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  __webpack_require__.e/* require.ensure */(2).then((function (require) {
    try {
      var m = __webpack_require__("./components/KeyHandler.jsx");

      m.__webpackChunkName = 'components_KeyHandler_0719f6cc5fb747e8b8f247f52a43e8e9';
      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}));

var SplashScreen = function (_React$Component) {
  _inherits(SplashScreen, _React$Component);

  function SplashScreen() {
    _classCallCheck(this, SplashScreen);

    return _possibleConstructorReturn(this, (SplashScreen.__proto__ || Object.getPrototypeOf(SplashScreen)).apply(this, arguments));
  }

  _createClass(SplashScreen, [{
    key: 'render',
    value: function render() {
      var containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      };

      var textStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        borderRadius: '20px',
        fontSize: '6em'
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: containerStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(KeyHandler, { 'return': this.props.goToNextScreen, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/images/logo.png', style: { width: '60%' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        })
      );
    }
  }]);

  return SplashScreen;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SplashScreen);

/***/ }),

/***/ "./components/Team.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic__ = __webpack_require__("next/dynamic");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CharacterPicture__ = __webpack_require__("./components/CharacterPicture.jsx");
var _jsxFileName = "/Users/Alexander/Projects/NodeJS/gg-30-seconds/components/Team.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var KeyHandler = __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default()(new (__webpack_require__("next/dynamic").SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/("./components/KeyHandler.jsx");

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  __webpack_require__.e/* require.ensure */(2).then((function (require) {
    try {
      var m = __webpack_require__("./components/KeyHandler.jsx");

      m.__webpackChunkName = 'components_KeyHandler_0719f6cc5fb747e8b8f247f52a43e8e9';
      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}));

var Team = function (_React$Component) {
  _inherits(Team, _React$Component);

  function Team() {
    _classCallCheck(this, Team);

    return _possibleConstructorReturn(this, (Team.__proto__ || Object.getPrototypeOf(Team)).apply(this, arguments));
  }

  _createClass(Team, [{
    key: "render",
    value: function render() {
      var teamStyle = {
        display: 'flex',
        height: '100px',
        alignItems: 'center',
        padding: '10px',
        fontSize: '2em',
        fontFamily: ['Oswald', 'sans-serif']
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { style: teamStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CharacterPicture__["a" /* default */], { character: this.props.character, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }),
        !this.props.pictureOnly ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { style: { paddingLeft: '20px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          this.props.name
        ) : null
      );
    }
  }]);

  return Team;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Team);

/***/ }),

/***/ "./components/TeamAdd.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic__ = __webpack_require__("next/dynamic");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_dynamic__);
var _jsxFileName = '/Users/Alexander/Projects/NodeJS/gg-30-seconds/components/TeamAdd.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var KeyHandler = __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default()(new (__webpack_require__("next/dynamic").SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/("./components/KeyHandler.jsx");

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  __webpack_require__.e/* require.ensure */(2).then((function (require) {
    try {
      var m = __webpack_require__("./components/KeyHandler.jsx");

      m.__webpackChunkName = 'components_KeyHandler_0719f6cc5fb747e8b8f247f52a43e8e9';
      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}));

var TeamAdd = function (_React$Component) {
  _inherits(TeamAdd, _React$Component);

  function TeamAdd(props) {
    _classCallCheck(this, TeamAdd);

    var _this = _possibleConstructorReturn(this, (TeamAdd.__proto__ || Object.getPrototypeOf(TeamAdd)).call(this, props));

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(TeamAdd, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ value: e.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      // Handle return
      if (e.keyCode === 13) {
        this.addTeam();
      }
    }
  }, {
    key: 'addTeam',
    value: function addTeam() {
      console.log('Adding team');
      if (this.state.value.length > 2) {
        this.props.addTeam(this.state.value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      };

      var inputStyle = {
        fontSize: '3em',
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        border: 'none',
        borderBottom: '2px solid rgba(75, 174, 231, 0.8)',
        outline: 'none'
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: containerStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(KeyHandler, { 'return': this.addTeam.bind(this), __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', autoFocus: true, placeholder: 'Team name', value: this.state.value, onChange: this.handleChange.bind(this), onKeyUp: this.handleSubmit.bind(this), style: inputStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        })
      );
    }
  }]);

  return TeamAdd;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (TeamAdd);

/***/ }),

/***/ "./components/TeamOverview.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic__ = __webpack_require__("next/dynamic");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Team__ = __webpack_require__("./components/Team.jsx");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/Alexander/Projects/NodeJS/gg-30-seconds/components/TeamOverview.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var KeyHandler = __WEBPACK_IMPORTED_MODULE_1_next_dynamic___default()(new (__webpack_require__("next/dynamic").SameLoopPromise)(function (resolve, reject) {
  var weakId = /*require.resolve*/("./components/KeyHandler.jsx");

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  __webpack_require__.e/* require.ensure */(2).then((function (require) {
    try {
      var m = __webpack_require__("./components/KeyHandler.jsx");

      m.__webpackChunkName = 'components_KeyHandler_0719f6cc5fb747e8b8f247f52a43e8e9';
      resolve(m);
    } catch (error) {
      reject(error);
    }
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}));

var TeamOverview = function (_React$Component) {
  _inherits(TeamOverview, _React$Component);

  function TeamOverview(props) {
    _classCallCheck(this, TeamOverview);

    var _this = _possibleConstructorReturn(this, (TeamOverview.__proto__ || Object.getPrototypeOf(TeamOverview)).call(this, props));

    _this.state = {
      activeButton: 'addTeam'
    };
    return _this;
  }

  _createClass(TeamOverview, [{
    key: "toggleButton",
    value: function toggleButton(e) {
      var _this2 = this;

      this.setState(function (prevState, props) {
        // With less than 2 teams you can only add teams.
        if (_this2.props.teams.length < 2) {
          return { activeButton: 'addTeam' };
        }

        return {
          activeButton: prevState.activeButton === 'addTeam' ? 'play' : 'addTeam'
        };
      });

      e.preventDefault();
    }
  }, {
    key: "nextScreen",
    value: function nextScreen() {
      if (this.state.activeButton === 'addTeam') {
        this.props.addTeam();
      }
      // Only allow play start with two teams or more.
      else if (this.props.teams.length >= 2) {
          this.props.play();
        }
    }
  }, {
    key: "render",
    value: function render() {
      var containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flexDirection: 'column'
      };

      var buttonContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px'
      };

      var buttonStyle = {
        fontSize: '2em',
        color: 'white',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px'
      };

      var highlightBorder = '4px solid rgba(75, 174, 231, 0.8)';
      var normalBorder = '3px solid white';

      var teams = [];

      for (var i = 0; i < this.props.teams.length; i++) {
        var team = this.props.teams[i];

        teams.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Team__["a" /* default */], _extends({ key: "team-" + i }, team, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        })));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { style: containerStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(KeyHandler, { right: this.toggleButton.bind(this), left: this.toggleButton.bind(this), "return": this.nextScreen.bind(this), __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }),
        teams,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { style: buttonContainerStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "a",
            { onClick: this.props.addTeam, style: _extends({}, buttonStyle, { border: this.state.activeButton === 'addTeam' ? highlightBorder : normalBorder }), __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              }
            },
            "Add Team"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "a",
            { onClick: this.props.play, style: _extends({}, buttonStyle, { border: this.state.activeButton === 'play' ? highlightBorder : normalBorder, display: this.props.teams.length < 2 ? 'none' : 'inherit' }), __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              }
            },
            "Play"
          )
        )
      );
    }
  }]);

  return TeamOverview;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (TeamOverview);

/***/ }),

/***/ "./components/Tile.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/Alexander/Projects/NodeJS/gg-30-seconds/components/Tile.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Tile = function (_React$Component) {
  _inherits(Tile, _React$Component);

  function Tile() {
    _classCallCheck(this, Tile);

    return _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).apply(this, arguments));
  }

  _createClass(Tile, [{
    key: 'render',
    value: function render() {
      var tileColor = 'rgba(75, 174, 231, 0.8)';

      var style = {
        // width: '100px',
        // height: '100px',
        backgroundColor: tileColor,
        border: '2px solid ' + tileColor,
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gridColumn: this.props.position.col,
        gridRow: this.props.position.row
      };

      if (this.props.type === 'odd') {
        delete style.backgroundColor;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: style, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        this.props.children
      );
    }
  }]);

  return Tile;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Tile);

/***/ }),

/***/ "./components/VictoryScreen.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Team__ = __webpack_require__("./components/Team.jsx");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/Alexander/Projects/NodeJS/gg-30-seconds/components/VictoryScreen.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var VictoryScreen = function (_React$Component) {
  _inherits(VictoryScreen, _React$Component);

  function VictoryScreen() {
    _classCallCheck(this, VictoryScreen);

    return _possibleConstructorReturn(this, (VictoryScreen.__proto__ || Object.getPrototypeOf(VictoryScreen)).apply(this, arguments));
  }

  _createClass(VictoryScreen, [{
    key: 'render',
    value: function render() {
      var containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
        fontSize: '3em'
      };

      console.log("Victory screen for", this.props.winner);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: containerStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          'Congratulations'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Team__["a" /* default */], _extends({}, this.props.winner, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }))
      );
    }
  }]);

  return VictoryScreen;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (VictoryScreen);

/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_App__ = __webpack_require__("./components/App.jsx");



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1__components_App__["a" /* default */]);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


/***/ }),

/***/ "keymaster":
/***/ (function(module, exports) {

module.exports = require("keymaster");

/***/ }),

/***/ "next/dynamic":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map