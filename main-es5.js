function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container container-fluid\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <toaster-container></toaster-container>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/favorites/favorites.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/favorites/favorites.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesFavoritesFavoritesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"favorites-wrapper\">\r\n  <div class=\"row center\" *ngIf=\"reducer.favorites && reducer.favorites.length>0; else noFavorties\">\r\n    <div class=\"current-weather-wrapper col-lg-2\" *ngFor=\"let fav of reducer.favorites; let i = index\" (click)=\"openLocation(fav)\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header text-white bg-info\">\r\n          {{fav.name}}\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">\r\n            <img *ngIf=\"fav.icon\" class=\"condition-image\" src=\"../../../assets/images/{{fav.icon  + '-s.png'}}\">\r\n            <div class=\"condition-text\">{{fav.value | temperature: fav.unit}}</div>\r\n          </h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #noFavorties>\r\n    You don't have any favorite locations.\r\n  </ng-template>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/header/header.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/header/header.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header-wrapper\">\n  <nav class=\"navbar nav-custom\">\n    <a class=\"navbar-brand\">My Weather App</a>\n    <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n        <label class=\"btn btn-info\" *ngFor=\"let toggle of reducer.toggles; let i = index\" [ngClass]=\"{'active' : toggle.isSelected}\">\n        <input type=\"radio\" name=\"options\" id=\"home-button\" autocomplete=\"off\" (click)=\"handleToggle(i)\"> {{toggle.label}}\n      </label>\n    </div>\n  </nav>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/homepage/homepage.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/homepage/homepage.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesHomepageHomepageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"homepage-wrapper\">\n  <div class=\"search-wrapper row\">\n    <div class=\"col-lg-6\">\n      <ng-select [items]=\"reducer.cities\"\n                 bindLabel=\"name\"\n                 placeholder=\"Select city\"\n                 [(ngModel)]=\"reducer.autocompleteSearch\"\n                 dropdownPosition=\"bottom\"\n                 (search)=\"doSearch($event)\"\n                 (close)=\"doSelect()\"\n                 (clear)=\"emptyList()\">\n      </ng-select>\n    </div>\n  </div>\n  <div class=\"row center\">\n    <div class=\"current-weather-wrapper col-lg-10\" *ngIf=\"reducer.autocompleteSearch && reducer.currentCondition\">\n      <div class=\"card\">\n        <div class=\"card-header text-white bg-info\">\n          {{reducer.autocompleteSearch.name}}\n          <span (click)=\"favoriteHandle()\">\n            <i class=\"fa fa-heart heart-icon\" [ngClass]=\"{'is-favorite': reducer.autocompleteSearch.isFavorite}\"></i>\n          </span>\n        </div>\n        <div class=\"card-body\">\n          <p class=\"card-text\">{{reducer.currentCondition.text}}</p>\n          <h5 class=\"card-title\">\n            <img *ngIf=\"reducer.currentCondition.icon\" class=\"condition-image\" src=\"../../../assets/images/{{reducer.currentCondition.icon  + '-s.png'}}\">\n            <span class=\"condition-text\">{{reducer.currentCondition.value | temperature: reducer.currentCondition.unit}}</span>\n          </h5>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row center\" *ngIf=\"reducer.autocompleteSearch && reducer.forecast\">\n    <div class=\"current-weather-wrapper forecast-card-wrapper col-lg-2\" *ngFor=\"let day of reducer.forecast; let i = index\">\n      <div class=\"card\">\n        <div class=\"card-body my-card-body\">\n            <p class=\"card-text\">{{day.date | date: 'EEEE'}}</p>\n          <img *ngIf=\"day.icon\" src=\"../../../assets/images/{{day.icon  + '-s.png'}}\">\n          <p class=\"card-text\">{{day.text}}</p>\n          <h5 class=\"card-title\">\n            <div class=\"condition-text\">{{day.value | temperature: day.unit}}</div>\n          </h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/services/user.service */
    "./src/app/shared/services/user.service.ts");

    var AppComponent = function AppComponent(user) {
      var _this = this;

      _classCallCheck(this, AppComponent);

      this.user = user;
      this.title = 'hrl';
      this.user.getAllStates().subscribe(function (state) {
        _this.user.globalReducer = state;
      }, function () {});
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _features_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./features/homepage/homepage.component */
    "./src/app/features/homepage/homepage.component.ts");
    /* harmony import */


    var _features_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./features/header/header.component */
    "./src/app/features/header/header.component.ts");
    /* harmony import */


    var _features_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./features/favorites/favorites.component */
    "./src/app/features/favorites/favorites.component.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _shared_reducers_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/reducers/index */
    "./src/app/shared/reducers/index.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var _shared_pipes_temperature_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/pipes/temperature.pipe */
    "./src/app/shared/pipes/temperature.pipe.ts");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/services/user.service */
    "./src/app/shared/services/user.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _features_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"], _features_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _features_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__["FavoritesComponent"], _shared_pipes_temperature_pipe__WEBPACK_IMPORTED_MODULE_15__["TemperaturePipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot(_shared_reducers_index__WEBPACK_IMPORTED_MODULE_12__["reducers"], {}), _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([{
        path: 'favorites',
        component: _features_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__["FavoritesComponent"]
      }, {
        path: '',
        component: _features_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"]
      }]), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], angular2_toaster__WEBPACK_IMPORTED_MODULE_14__["ToasterModule"].forRoot()],
      providers: [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/features/favorites/favorites.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/features/favorites/favorites.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesFavoritesFavoritesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".favorites-wrapper .current-weather-wrapper {\n  text-align: center;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZmF2b3JpdGVzL0M6XFxVc2Vyc1xcaXRhaW5hXFxXZWJzdG9ybVByb2plY3RzXFxocmwvc3JjXFxhcHBcXGZlYXR1cmVzXFxmYXZvcml0ZXNcXGZhdm9yaXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQjtFQUNsQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhdm9yaXRlcy13cmFwcGVye1xyXG4gIC5jdXJyZW50LXdlYXRoZXItd3JhcHBlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/features/favorites/favorites.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/features/favorites/favorites.component.ts ***!
    \***********************************************************/

  /*! exports provided: FavoritesComponent */

  /***/
  function srcAppFeaturesFavoritesFavoritesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function () {
      return FavoritesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/user.service */
    "./src/app/shared/services/user.service.ts");
    /* harmony import */


    var _shared_reducers_appActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/reducers/appActions */
    "./src/app/shared/reducers/appActions.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var FavoritesComponent =
    /*#__PURE__*/
    function () {
      function FavoritesComponent(user, router, store) {
        _classCallCheck(this, FavoritesComponent);

        this.user = user;
        this.router = router;
        this.store = store;
      }

      _createClass(FavoritesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.reducer = this.user.globalReducer;
        }
      }, {
        key: "openLocation",
        value: function openLocation(fav) {
          this.store.dispatch({
            type: _shared_reducers_appActions__WEBPACK_IMPORTED_MODULE_3__["ACTION_CHANGE_TOGGLE"],
            payload: 0
          });
          this.store.dispatch({
            type: _shared_reducers_appActions__WEBPACK_IMPORTED_MODULE_3__["ACTION_AUTOCOMPLETE_SEARCH"],
            payload: {
              id: fav.id,
              name: fav.name
            }
          });
          this.router.navigate(['']);
        }
      }]);

      return FavoritesComponent;
    }();

    FavoritesComponent.ctorParameters = function () {
      return [{
        type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
      }];
    };

    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorites',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorites.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/favorites/favorites.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorites.component.scss */
      "./src/app/features/favorites/favorites.component.scss")).default]
    })], FavoritesComponent);
    /***/
  },

  /***/
  "./src/app/features/header/header.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/features/header/header.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-wrapper .nav-custom {\n  padding-right: 0;\n  padding-left: 0;\n  padding-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvaGVhZGVyL0M6XFxVc2Vyc1xcaXRhaW5hXFxXZWJzdG9ybVByb2plY3RzXFxocmwvc3JjXFxhcHBcXGZlYXR1cmVzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci13cmFwcGVye1xyXG4gIC5uYXYtY3VzdG9te1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/features/header/header.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/features/header/header.component.ts ***!
    \*****************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppFeaturesHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/user.service */
    "./src/app/shared/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _shared_reducers_appActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/reducers/appActions */
    "./src/app/shared/reducers/appActions.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(user, router, store) {
        _classCallCheck(this, HeaderComponent);

        this.user = user;
        this.router = router;
        this.store = store;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.user.getAllStates().subscribe(function (state) {
            _this2.reducer = state;
          }, function () {});
        }
      }, {
        key: "handleToggle",
        value: function handleToggle(position) {
          this.store.dispatch({
            type: _shared_reducers_appActions__WEBPACK_IMPORTED_MODULE_5__["ACTION_CHANGE_TOGGLE"],
            payload: position
          });
          this.router.navigate([this.reducer.toggles[position].route]);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/features/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/features/homepage/extractor/extractor.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/features/homepage/extractor/extractor.service.ts ***!
    \******************************************************************/

  /*! exports provided: ExtractorService */

  /***/
  function srcAppFeaturesHomepageExtractorExtractorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExtractorService", function () {
      return ExtractorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExtractorService =
    /*#__PURE__*/
    function () {
      function ExtractorService() {
        _classCallCheck(this, ExtractorService);
      }

      _createClass(ExtractorService, [{
        key: "getMetricValue",
        value: function getMetricValue(object) {
          try {
            return object[0].Temperature.Metric.Value;
          } catch (_a) {
            return '';
          }
        }
      }, {
        key: "getMetricUnit",
        value: function getMetricUnit(object) {
          try {
            return object[0].Temperature.Metric.Unit;
          } catch (_a) {
            return '';
          }
        }
      }, {
        key: "getWeatherText",
        value: function getWeatherText(object) {
          try {
            return object[0].WeatherText;
          } catch (_a) {
            return '';
          }
        }
      }, {
        key: "getWeatherIcon",
        value: function getWeatherIcon(object) {
          try {
            return object[0].WeatherIcon;
          } catch (_a) {
            return '';
          }
        }
      }, {
        key: "getForecastValue",
        value: function getForecastValue(object) {
          try {
            return object.Temperature.Maximum.Value;
          } catch (_a) {
            return '';
          }
        }
      }, {
        key: "getForecastUnit",
        value: function getForecastUnit(object) {
          try {
            return object.Temperature.Maximum.Unit;
          } catch (_a) {
            return '';
          }
        }
      }, {
        key: "getForecastIcon",
        value: function getForecastIcon(object) {
          try {
            return object.Day.Icon;
          } catch (_a) {
            return '';
          }
        }
      }, {
        key: "getForecastText",
        value: function getForecastText(object) {
          try {
            return object.Day.IconPhrase;
          } catch (_a) {
            return '';
          }
        }
      }]);

      return ExtractorService;
    }();

    ExtractorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ExtractorService);
    /***/
  },

  /***/
  "./src/app/features/homepage/homepage.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/features/homepage/homepage.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesHomepageHomepageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".homepage-wrapper .search-wrapper {\n  display: flex;\n  justify-content: center; }\n\n.homepage-wrapper .center {\n  justify-content: center; }\n\n.homepage-wrapper .current-weather-wrapper {\n  justify-content: center; }\n\n.homepage-wrapper .current-weather-wrapper .heart-icon {\n    float: right;\n    position: relative;\n    top: 6px;\n    cursor: pointer; }\n\n.homepage-wrapper .current-weather-wrapper .heart-icon:hover {\n      color: red; }\n\n.homepage-wrapper .current-weather-wrapper .heart-icon.is-favorite {\n      color: red; }\n\n.homepage-wrapper .current-weather-wrapper .condition-image {\n    margin-right: 10px; }\n\n.homepage-wrapper .forecast-card-wrapper {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvaG9tZXBhZ2UvQzpcXFVzZXJzXFxpdGFpbmFcXFdlYnN0b3JtUHJvamVjdHNcXGhybC9zcmNcXGFwcFxcZmVhdHVyZXNcXGhvbWVwYWdlXFxob21lcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFIM0I7RUFNSSx1QkFBdUIsRUFBQTs7QUFOM0I7RUFTSSx1QkFBdUIsRUFBQTs7QUFUM0I7SUFZTSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixlQUFlLEVBQUE7O0FBZnJCO01Ba0JRLFVBQVUsRUFBQTs7QUFsQmxCO01Bc0JRLFVBQVUsRUFBQTs7QUF0QmxCO0lBMkJNLGtCQUFrQixFQUFBOztBQTNCeEI7RUErQkksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lcGFnZS13cmFwcGVye1xyXG4gIC5zZWFyY2gtd3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmNlbnRlcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuY3VycmVudC13ZWF0aGVyLXdyYXBwZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAuaGVhcnQtaWNvbntcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogNnB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuaXMtZmF2b3JpdGV7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb25kaXRpb24taW1hZ2V7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvcmVjYXN0LWNhcmQtd3JhcHBlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/features/homepage/homepage.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/features/homepage/homepage.component.ts ***!
    \*********************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppFeaturesHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _extractor_extractor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./extractor/extractor.service */
    "./src/app/features/homepage/extractor/extractor.service.ts");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/user.service */
    "./src/app/shared/services/user.service.ts");
    /* harmony import */


    var _shared_reducers_appActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/reducers/appActions */
    "./src/app/shared/reducers/appActions.ts");
    /* harmony import */


    var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular2-toaster */
    "./node_modules/angular2-toaster/angular2-toaster.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var HomepageComponent =
    /*#__PURE__*/
    function () {
      function HomepageComponent(store, http, extractor, toasterService, user) {
        _classCallCheck(this, HomepageComponent);

        this.store = store;
        this.http = http;
        this.extractor = extractor;
        this.toasterService = toasterService;
        this.user = user;
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.user.getAllStates().subscribe(function (state) {
            _this3.reducer = state;
          }, function () {});
          this.selectedCity = Object.assign({}, this.reducer.autocompleteSearch);
          this.doSelect();
        }
      }, {
        key: "doSearch",
        value: function doSearch(e) {
          var _this4 = this;

          var cities = [];

          if (!e.term) {
            this.store.dispatch({
              type: _shared_reducers_appActions__WEBPACK_IMPORTED_MODULE_5__["ACTION_UPDATE_CITIES"],
              payload: cities
            });
            return;
          }

          this.http.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=1TPRKkt33Ems8fy00UWSEQknQ95m6GtL&q=' + e.term).subscribe(function (response) {
            response.forEach(function (item) {
              cities = [].concat(_toConsumableArray(cities), [{
                id: item.Key,
                name: item.LocalizedName
              }]);
            });

            _this4.store.dispatch({
              type: _shared_reducers_appActions__WEBPACK_IMPORTED_MODULE_5__["ACTION_UPDATE_CITIES"],
              payload: cities
            });
          }, function (e) {
            _this4.toasterService.pop('error', 'Error', 'No date was received');
          });
        }
      }, {
        key: "doSelect",
        value: function doSelect() {
          var _this5 = this;

          if (!this.reducer.autocompleteSearch) {
            return;
          }

          this.reducer.autocompleteSearch.isFavorite = this.getFavoriteStatus();
          this.store.dispatch({
            type: _shared_reducers_appActions__WEBPACK_IMPORTED_MODULE_5__["ACTION_AUTOCOMPLETE_SEARCH"],
            payload: this.reducer.autocompleteSearch
          });
          var request1 = this.http.get('http://dataservice.accuweather.com/currentconditions/v1/' + this.reducer.autocompleteSearch.id + '?apikey=1TPRKkt33Ems8fy00UWSEQknQ95m6GtL');
          var request2 = this.http.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + this.reducer.autocompleteSearch.id + '?apikey=1TPRKkt33Ems8fy00UWSEQknQ95m6GtL&metric=true');
          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(request1, request2).subscribe(function (response) {
            var currentCondition = {
              value: _this5.extractor.getMetricValue(response[0]),
              unit: _this5.extractor.getMetricUnit(response[0]),
              icon: _this5.extractor.getWeatherIcon(response[0]),
              text: _this5.extractor.getWeatherText(response[0])
            };

            _this5.store.dispatch({
              type: _shared_reducers_appActions__WEBPACK_IMPORTED_MODULE_5__["ACTION_CURRENT_CONDITION"],
              payload: currentCondition
            });

            var fiveDays = _this5.getFiveDaysData(response[1]);

            _this5.store.dispatch({
              type: _shared_reducers_appActions__WEBPACK_IMPORTED_MODULE_5__["ACTION_FORECAST"],
              payload: fiveDays
            });
          }, function (e) {
            _this5.toasterService.pop('error', 'Error', 'No date was received');
          });
        }
      }, {
        key: "getFiveDaysData",
        value: function getFiveDaysData(fiveDaysRes) {
          var _this6 = this;

          var forecast = [];
          fiveDaysRes.DailyForecasts.forEach(function (item) {
            forecast.push({
              date: new Date(item.Date),
              value: _this6.extractor.getForecastValue(item),
              unit: _this6.extractor.getForecastUnit(item),
              icon: _this6.extractor.getForecastIcon(item),
              text: _this6.extractor.getForecastText(item)
            });
          });
          return forecast;
        }
      }, {
        key: "emptyList",
        value: function emptyList() {
          this.store.dispatch({
            type: _shared_reducers_appActions__WEBPACK_IMPORTED_MODULE_5__["ACTION_UPDATE_CITIES"],
            payload: []
          });
          this.store.dispatch({
            type: _shared_reducers_appActions__WEBPACK_IMPORTED_MODULE_5__["ACTION_FORECAST"],
            payload: []
          });
        }
      }, {
        key: "favoriteHandle",
        value: function favoriteHandle() {
          var search = this.reducer.autocompleteSearch;
          search.isFavorite = !search.isFavorite;
          this.store.dispatch({
            type: _shared_reducers_appActions__WEBPACK_IMPORTED_MODULE_5__["ACTION_AUTOCOMPLETE_SEARCH"],
            payload: Object.assign(this.reducer.autocompleteSearch, this.reducer.currentCondition)
          });
          var action = this.reducer.autocompleteSearch.isFavorite ? _shared_reducers_appActions__WEBPACK_IMPORTED_MODULE_5__["ACTION_ADD_FAVORITE"] : _shared_reducers_appActions__WEBPACK_IMPORTED_MODULE_5__["ACTION_REMOVE_FAVORITE"];
          this.store.dispatch({
            type: action
          });
        }
      }, {
        key: "getFavoriteStatus",
        value: function getFavoriteStatus() {
          var _this7 = this;

          var favoriteObj = this.reducer.favorites.filter(function (item) {
            return item.id === _this7.reducer.autocompleteSearch.id;
          });

          if (favoriteObj.length > 0) {
            return true;
          }

          return false;
        }
      }]);

      return HomepageComponent;
    }();

    HomepageComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _extractor_extractor_service__WEBPACK_IMPORTED_MODULE_3__["ExtractorService"]
      }, {
        type: angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]
      }, {
        type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homepage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./homepage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/homepage/homepage.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./homepage.component.scss */
      "./src/app/features/homepage/homepage.component.scss")).default]
    })], HomepageComponent);
    /***/
  },

  /***/
  "./src/app/shared/pipes/temperature.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/pipes/temperature.pipe.ts ***!
    \**************************************************/

  /*! exports provided: TemperaturePipe */

  /***/
  function srcAppSharedPipesTemperaturePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemperaturePipe", function () {
      return TemperaturePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TemperaturePipe =
    /*#__PURE__*/
    function () {
      function TemperaturePipe() {
        _classCallCheck(this, TemperaturePipe);
      }

      _createClass(TemperaturePipe, [{
        key: "transform",
        value: function transform(degrees, unit) {
          return degrees + '° ' + unit;
        }
      }]);

      return TemperaturePipe;
    }();

    TemperaturePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'temperature'
    })], TemperaturePipe);
    /***/
  },

  /***/
  "./src/app/shared/reducers/appActions.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/reducers/appActions.ts ***!
    \***********************************************/

  /*! exports provided: ACTION_AUTOCOMPLETE_SEARCH, ACTION_CURRENT_CONDITION, ACTION_FORECAST, ACTION_UPDATE_CITIES, ACTION_ADD_FAVORITE, ACTION_REMOVE_FAVORITE, ACTION_CHANGE_TOGGLE */

  /***/
  function srcAppSharedReducersAppActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACTION_AUTOCOMPLETE_SEARCH", function () {
      return ACTION_AUTOCOMPLETE_SEARCH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACTION_CURRENT_CONDITION", function () {
      return ACTION_CURRENT_CONDITION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACTION_FORECAST", function () {
      return ACTION_FORECAST;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACTION_UPDATE_CITIES", function () {
      return ACTION_UPDATE_CITIES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACTION_ADD_FAVORITE", function () {
      return ACTION_ADD_FAVORITE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACTION_REMOVE_FAVORITE", function () {
      return ACTION_REMOVE_FAVORITE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACTION_CHANGE_TOGGLE", function () {
      return ACTION_CHANGE_TOGGLE;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ACTION_AUTOCOMPLETE_SEARCH = 'AUTOCOMPLETE_SEARCH';
    var ACTION_CURRENT_CONDITION = 'CURRENT_CONDITION';
    var ACTION_FORECAST = 'FORECAST';
    var ACTION_UPDATE_CITIES = 'UPDATE_CITIES';
    var ACTION_ADD_FAVORITE = 'ADD_FAVORITE';
    var ACTION_REMOVE_FAVORITE = 'REMOVE_FAVORITE';
    var ACTION_CHANGE_TOGGLE = 'CHANGE_TOGGLE';
    /***/
  },

  /***/
  "./src/app/shared/reducers/appReducer.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/reducers/appReducer.ts ***!
    \***********************************************/

  /*! exports provided: reducer */

  /***/
  function srcAppSharedReducersAppReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _appActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./appActions */
    "./src/app/shared/reducers/appActions.ts");

    var initialState = {
      autocompleteSearch: {
        id: '215854',
        name: 'Tel Aviv',
        isFavorite: false
      },
      currentCondition: [],
      forecast: [],
      cities: [],
      favorites: [],
      toggles: [{
        label: 'Home',
        isSelected: true,
        route: ''
      }, {
        label: 'Favorites',
        isSelected: false,
        route: 'favorites'
      }]
    };

    function reducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _appActions__WEBPACK_IMPORTED_MODULE_1__["ACTION_AUTOCOMPLETE_SEARCH"]:
          return Object.assign({}, state, {
            autocompleteSearch: action.payload
          });
          break;

        case _appActions__WEBPACK_IMPORTED_MODULE_1__["ACTION_CURRENT_CONDITION"]:
          return Object.assign({}, state, {
            currentCondition: action.payload
          });
          break;

        case _appActions__WEBPACK_IMPORTED_MODULE_1__["ACTION_FORECAST"]:
          return Object.assign({}, state, {
            forecast: action.payload
          });
          break;

        case _appActions__WEBPACK_IMPORTED_MODULE_1__["ACTION_UPDATE_CITIES"]:
          return Object.assign({}, state, {
            cities: action.payload
          });
          break;

        case _appActions__WEBPACK_IMPORTED_MODULE_1__["ACTION_ADD_FAVORITE"]:
          var updatedFavorites = state.favorites;
          updatedFavorites.push(state.autocompleteSearch);
          return Object.assign({}, state, {
            favorites: updatedFavorites
          });
          break;

        case _appActions__WEBPACK_IMPORTED_MODULE_1__["ACTION_REMOVE_FAVORITE"]:
          var updatesFavorites = state.favorites.filter(function (item) {
            return item.id !== state.autocompleteSearch.id;
          });
          return Object.assign({}, state, {
            favorites: updatesFavorites
          });
          break;

        case _appActions__WEBPACK_IMPORTED_MODULE_1__["ACTION_CHANGE_TOGGLE"]:
          var oppositePosition = Math.abs(action.payload - 1);
          state.toggles[action.payload].isSelected = true;
          state.toggles[oppositePosition].isSelected = false;
          return Object.assign({}, state, {
            toggles: state.toggles
          });
          break;

        default:
          return Object.assign({}, state);
      }
    }
    /***/

  },

  /***/
  "./src/app/shared/reducers/index.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/reducers/index.ts ***!
    \******************************************/

  /*! exports provided: reducers */

  /***/
  function srcAppSharedReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _appReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./appReducer */
    "./src/app/shared/reducers/appReducer.ts");

    var reducers = {
      userReducer: _appReducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
    };
    /***/
  },

  /***/
  "./src/app/shared/services/user.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/user.service.ts ***!
    \*************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(store) {
        _classCallCheck(this, UserService);

        this.store = store;
      }

      _createClass(UserService, [{
        key: "getAllStates",
        value: function getAllStates() {
          return this.store.select('userReducer');
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\itaina\WebstormProjects\hrl\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map