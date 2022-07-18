/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Reset CSS ============================ */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* Main Styling ============================ */\nbody {\n  background-color: lightgrey;\n}\n\n.todas-wrap {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 1fr 4fr;\n  min-height: 100vh;\n}\n\n.header {\n  grid-area: 1/1/2/3;\n  background-color: orange;\n}\n\n.sidebar {\n  grid-area: 2/1/3/2;\n  background-color: lightblue;\n}\n\n.project-wrap {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n}\n\n.project-wrap h3 {\n  grid-area: 1/1/2/2;\n}\n\n.project-wrap .edit-wrap {\n  grid-area: 1/2/2/3;\n}\n\n.project-wrap .task-wrap {\n  grid-area: 2/1/3/3;\n}\n\n.task-wrap li {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  border: 1px dotted #000;\n}\n\n.edit-proj-close,\n.edit-proj-input {\n  display: none;\n}\n\n.active .edit-proj-close,\n.active .edit-proj-input {\n  display: inline-block;\n}\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n}\n\n/* The Close Button */\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.project-form,\n.task-form,\n.task-edit-show #formSubmit {\n  display: none;\n}\n\n.modal.project-show .project-form,\n.modal.task-add-show .task-form,\n.modal.task-edit-show .task-form,\n.modal.project-show,\n.modal.task-add-show,\n.modal.task-edit-show {\n  display: block;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA,2CAAA;AACA;;;CAAA;AAKA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AAAF;;AAEA,gDAAA;AACA;;;;;;;;;;;EAWE,cAAA;AACF;;AACA;EACE,cAAA;AAEF;;AAAA;;EAEE,gBAAA;AAGF;;AADA;;EAEE,YAAA;AAIF;;AAFA;;;;EAIE,WAAA;EACA,aAAA;AAKF;;AAHA;EACE,yBAAA;EACA,iBAAA;AAMF;;AAHA,8CAAA;AAIA;EACE,2BAAA;AAGF;;AAAA;EACE,aAAA;EACA,8BAAA;EACA,2BAAA;EACA,iBAAA;AAGF;;AAAA;EACE,kBAAA;EACA,wBAAA;AAGF;;AAAA;EACE,kBAAA;EACA,2BAAA;AAGF;;AAAA;EACE,aAAA;EACA,8BAAA;AAGF;;AADA;EACE,kBAAA;AAIF;;AAFA;EACE,kBAAA;AAKF;;AAHA;EACE,kBAAA;AAMF;;AAHA;EACE,aAAA;EACA,qCAAA;EACA,uBAAA;AAMF;;AAFA;;EAEE,aAAA;AAKF;;AAFA;;EAEE,qBAAA;AAKF;;AAAA,2BAAA;AACA;EACE,aAAA,EAAA,sBAAA;EACA,eAAA,EAAA,kBAAA;EACA,UAAA,EAAA,eAAA;EACA,kBAAA,EAAA,wBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA,EAAA,eAAA;EACA,YAAA,EAAA,gBAAA;EACA,cAAA,EAAA,4BAAA;EACA,8BAAA,EAAA,mBAAA;EACA,oCAAA,EAAA,qBAAA;AAGF;;AAAA;EACE,yBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,UAAA;AAGF;;AAAA,qBAAA;AACA;EACE,cAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;AAGF;;AAAA;;EAEE,WAAA;EACA,qBAAA;EACA,eAAA;AAGF;;AAAA;;;EAGE,aAAA;AAGF;;AAAA;;;;;;EAME,cAAA;AAGF","sourcesContent":["/* Reset CSS ============================ */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* Main Styling ============================ */\n:root {\n}\n\nbody {\n  background-color: lightgrey;\n}\n\n.todas-wrap {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 1fr 4fr;\n  min-height: 100vh;\n}\n\n.header {\n  grid-area: 1 / 1 / 2 / 3;\n  background-color: orange;\n}\n\n.sidebar {\n  grid-area: 2 / 1 / 3 / 2;\n  background-color: lightblue;\n}\n// Main content\n.project-wrap {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n}\n.project-wrap h3 {\n  grid-area: 1 / 1 / 2 / 2;\n}\n.project-wrap .edit-wrap {\n  grid-area: 1 / 2 / 2 / 3;\n}\n.project-wrap .task-wrap {\n  grid-area: 2 / 1 / 3 / 3;\n}\n\n.task-wrap li {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  border: 1px dotted #000;\n}\n\n// Options\n.edit-proj-close,\n.edit-proj-input {\n  display: none;\n}\n\n.active .edit-proj-close,\n.active .edit-proj-input {\n  display: inline-block;\n}\n\n\n\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n}\n\n/* The Close Button */\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.project-form,\n.task-form,\n.task-edit-show #formSubmit{\n  display: none;\n}\n\n.modal.project-show .project-form,\n.modal.task-add-show .task-form,\n.modal.task-edit-show .task-form,\n.modal.project-show,\n.modal.task-add-show,\n.modal.task-edit-show {\n  display: block;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/class.js":
/*!**********************!*\
  !*** ./src/class.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.js */ "./src/variables.js");
// Module import from index.js

// Project modal variables


// Task class
class Task {
    constructor(title, desc, dueDate, priority, project) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.object = this;
        this.done = false;
        this.delete = null;
        this.check = null;
        this.edit = null;
        this.parentProj = null;
        this.li = null;
        this.titleElem = document.createElement('h4');
        this.descElem = document.createElement('p');
        this.dueDateElem = document.createElement('p');
        this.priorityElem = document.createElement('p');
        this.projectElem = document.createElement('p');
    }

    deleteTaskBtn() {
        this.delete = document.createElement('button');
        this.delete.innerText = 'X';
        this.delete.addEventListener('click', (e) => {
            // this.li.remove();
            this.parentProj.tasks.splice(this.parentProj.tasks.indexOf(this.object), 1);
            this.parentProj.projectShow();
        }); // Delete task
        return this.delete;
    }

    updateEdit() {
        const updateBtn = document.createElement('button');
        updateBtn.innerText = 'Update';
        updateBtn.classList.add('update-btn');
        updateBtn.addEventListener('click', () => {
            this.title = _variables_js__WEBPACK_IMPORTED_MODULE_1__.formTitle.value;
            this.desc = _variables_js__WEBPACK_IMPORTED_MODULE_1__.formDesc.value;
            this.dueDate = _variables_js__WEBPACK_IMPORTED_MODULE_1__.formDate.value;
            this.priority = _variables_js__WEBPACK_IMPORTED_MODULE_1__.formPriority.value;
            this.project = _variables_js__WEBPACK_IMPORTED_MODULE_1__.formProject.value;
            if (this.project !== this.parentProj.name) {
                _index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.addNewTask(new Task(_variables_js__WEBPACK_IMPORTED_MODULE_1__.formTitle.value, _variables_js__WEBPACK_IMPORTED_MODULE_1__.formDesc.value, _variables_js__WEBPACK_IMPORTED_MODULE_1__.formDate.value, _variables_js__WEBPACK_IMPORTED_MODULE_1__.formPriority.value, _variables_js__WEBPACK_IMPORTED_MODULE_1__.formProject.value));
                this.parentProj.tasks.splice(this.parentProj.tasks.indexOf(this.object), 1);
            }
            _index_js__WEBPACK_IMPORTED_MODULE_0__.modalControl.closeModal();
            this.parentProj.projectShow();
        });
        return updateBtn;
    }

    editTaskBtn() {
        this.edit = document.createElement('button');
        this.edit.innerText = 'edit';
        this.edit.addEventListener('click', (e) => {
            _variables_js__WEBPACK_IMPORTED_MODULE_1__.taskForm.appendChild(this.updateEdit());
            _variables_js__WEBPACK_IMPORTED_MODULE_1__.formTitle.value = this.title;
            _variables_js__WEBPACK_IMPORTED_MODULE_1__.formDesc.value = this.desc;
            _variables_js__WEBPACK_IMPORTED_MODULE_1__.formDate.value = this.dueDate;
            _variables_js__WEBPACK_IMPORTED_MODULE_1__.formPriority.value = this.priority;
            _variables_js__WEBPACK_IMPORTED_MODULE_1__.formProject.value = this.project;
            _index_js__WEBPACK_IMPORTED_MODULE_0__.modalControl.openModal('task-edit-show');
        });
        return this.edit;
    }

    buildElem() {
        this.li = document.createElement('li');
        this.check = document.createElement('input');
        this.titleElem.innerText = this.title;
        this.descElem.innerText = this.desc;
        this.dueDateElem.innerText = this.dueDate;
        this.priorityElem.innerText = this.priority;
        this.projectElem.innerText = this.project;
        this.check.type = 'checkbox';
        this.check.checked = this.done;
        this.check.addEventListener('click', (e) => this.done = this.check.checked); // Update done key
        this.li.append(this.check, this.titleElem, this.descElem, this.dueDateElem, this.priorityElem, this.projectElem, this.editTaskBtn(), this.deleteTaskBtn());
        return this.li;
    }


};

// Project class
class Project {
    constructor(name) {
        this.name = name;
        this.allProj = [];
        this.tasks = [];
        this.object = this;
        this.projHeader = document.createElement('h3');
        this.projBtn = null;
        this.option = document.createElement('option');
        this.sbLi = null;
        this.closeBtn = null;
    }

    addToTasks(p) { this.tasks.push(p) }; // Add new projects

    // Sidebar li element
    liDOM() {
        this.sbLi = document.createElement('li');
        this.closeBtn = document.createElement('button');
        this.projBtn = document.createElement('button');
        this.projBtn.innerText = this.name;
        this.closeBtn.innerText = 'X';
        this.sbLi.append(this.projBtn, this.closeBtn);
        // Remove project 
        this.closeBtn.addEventListener('click', (e) => {
            this.sbLi.remove(); // Remove DOM element
            this.option.remove(); // Remove task creation option
            this.allProj.splice(this.allProj.indexOf(e), 1); // Remove from project list
        });

        this.projBtn.addEventListener('click', (e) => {
            this.projectShow();
        });
        return this.sbLi;
    }

    // Clear & append tasks on page
    projectShow() {
        _variables_js__WEBPACK_IMPORTED_MODULE_1__.mainContent.innerHTML = '';
        _variables_js__WEBPACK_IMPORTED_MODULE_1__.mainContent.appendChild(this.tasksElem());
    }

    // Task form option element
    optionDOM() {
        this.option.value = this.name;
        this.option.innerText = this.name;
        return this.option;
    }

    // Edit project title
    editTitle() {
        const div = document.createElement('div');
        const editBtn = document.createElement('button');
        const closeEdit = document.createElement('button');
        const editInput = document.createElement('input');
        // Attributes
        div.classList.add('edit-wrap');
        editInput.type = 'text';
        editBtn.innerText = 'edit';
        closeEdit.innerText = 'X';
        closeEdit.classList.add('edit-proj-close');
        editInput.classList.add('edit-proj-input');
        // Append
        div.append(editInput, closeEdit, editBtn);
        // Click events
        editBtn.addEventListener('click', (e) => {
            if (div.classList.contains('active')) {
                if (_index_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.checkProjList(editInput.value)) {
                    this.name = editInput.value;
                    this.projHeader.innerText = this.name;
                    this.projBtn.innerText = this.name;
                    this.option.innerText = this.name;
                    editBtn.innerText = 'edit';
                    this.tasks.forEach(task => {
                        task.project = this.name;
                        task.projectElem.innerText = this.name;
                    });
                    div.classList.remove('active');
                } else {
                    console.log('Write Function to handle => Project Already Exists');
                }
            } else {
                editBtn.innerText = 'update';
                div.classList.add('active');
            }

        });
        closeEdit.addEventListener('click', (e) => {
            div.classList.remove('active');
        });

        return div;
    }

    // Show project tasks
    tasksElem() {
        const mainDiv = document.createElement('div');
        const ul = document.createElement('ul');
        mainDiv.classList.add('project-wrap');
        this.projHeader.innerText = this.name;

        mainDiv.append(this.projHeader, this.editTitle(), ul);

        ul.classList.add('task-wrap');
        this.tasks.forEach(task => {
            ul.appendChild(task.buildElem());
        });

        return mainDiv;
    }

}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "modalControl": () => (/* binding */ modalControl)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.js */ "./src/variables.js");
/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class.js */ "./src/class.js");

// Styling

// All variables

// Classes


// Main control
const allProjects = (function () {
    const list = [];

    const checkProjList = (p) => list.every((proj) => proj.name !== p); // Check array if project already exists in projects
    const checkTaskList = (taskList, newTask) => taskList.every((task) => task.title !== newTask.title) // Check array if project already exists in tasks

    // Update application
    const updateApp = () => {
        _variables_js__WEBPACK_IMPORTED_MODULE_1__.projList.innerHTML = '';
        list.forEach(proj => {
            _variables_js__WEBPACK_IMPORTED_MODULE_1__.projList.appendChild(proj.liDOM()); // Update sidebar
            _variables_js__WEBPACK_IMPORTED_MODULE_1__.formProject.appendChild(proj.optionDOM()); // Update task form (project selection)
        })
    };

    // Add new projects
    const addNewProj = (p) => {
        if (p !== '') {
            if (checkProjList(p)) {
                const newProject = new _class_js__WEBPACK_IMPORTED_MODULE_2__.Project(p);
                newProject.allProj = list;
                list.push(newProject); // Add new project to array
            } else {
                console.log('Write Function to handle => Project Already Exists');
            }
        } else {
            console.log('Write Function to handle => Empty Project Input');
        }
        updateApp();
    }

    // Add new projects
    const addNewTask = (newTask) => {
        if (newTask.title !== '') {
            for (let i = 0; i < list.length; i++) {
                if (list[i].name === newTask.project) {
                    if (checkTaskList(list[i].tasks, newTask)) {
                        newTask.parentProj = list[i];
                        list[i].tasks.push(newTask);
                        list[i].projectShow();
                    } else {
                        console.log('Write Function to handle => Task Already Exists');
                    }
                }
            }

        } else {
            console.log('Write Function to handle => Empty Task Input');
        }
        updateApp();
    }

    // Main content showcase
    // const showMainContent = (e) => {
    //     console.log(list);
    //     mainContent.innerHTML = '';
    //     mainContent.appendChild(e);
    // }

    return { addNewProj, updateApp, addNewTask, checkProjList };
})();

// Modal control
const modalControl = (() => {
    // When the user clicks the button, open the modal 
    _variables_js__WEBPACK_IMPORTED_MODULE_1__.modalProj.onclick = () => openModal('project-show');
    _variables_js__WEBPACK_IMPORTED_MODULE_1__.modalTask.onclick = () => openModal('task-add-show');
    // When the user clicks on <span> (x), close the modal
    _variables_js__WEBPACK_IMPORTED_MODULE_1__.span.onclick = () => closeModal();
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (e) => { if (e.target == _variables_js__WEBPACK_IMPORTED_MODULE_1__.modal) { closeModal(); } };
    // Open / Close modal
    const openModal = (e) => { _variables_js__WEBPACK_IMPORTED_MODULE_1__.modal.classList.add(e); }
    const closeModal = () => {
        if (_variables_js__WEBPACK_IMPORTED_MODULE_1__.modal.classList.contains('task-edit-show')) { document.querySelector('.update-btn').remove(); }
        _variables_js__WEBPACK_IMPORTED_MODULE_1__.modal.className = 'modal';
    }
    return { closeModal, openModal };
})();

// Click event handlers for Project/ Task modal
_variables_js__WEBPACK_IMPORTED_MODULE_1__.projAddBtn.addEventListener('click', () => {
    allProjects.addNewProj(_variables_js__WEBPACK_IMPORTED_MODULE_1__.projInput.value);
    modalControl.closeModal();
});

_variables_js__WEBPACK_IMPORTED_MODULE_1__.formSubmit.addEventListener('click', () => {
    allProjects.addNewTask(new _class_js__WEBPACK_IMPORTED_MODULE_2__.Task(_variables_js__WEBPACK_IMPORTED_MODULE_1__.formTitle.value, _variables_js__WEBPACK_IMPORTED_MODULE_1__.formDesc.value, _variables_js__WEBPACK_IMPORTED_MODULE_1__.formDate.value, _variables_js__WEBPACK_IMPORTED_MODULE_1__.formPriority.value, _variables_js__WEBPACK_IMPORTED_MODULE_1__.formProject.value));
    modalControl.closeModal();
})

allProjects.addNewProj('Inbox');
allProjects.addNewProj('Shopping');
allProjects.addNewTask(new _class_js__WEBPACK_IMPORTED_MODULE_2__.Task('Call Mum', 'This is my description people', '2022-07-15', '3', 'Inbox'));
allProjects.addNewTask(new _class_js__WEBPACK_IMPORTED_MODULE_2__.Task('Pizza', 'This is my description people', '2022-07-18', '2', 'Shopping'));
allProjects.addNewTask(new _class_js__WEBPACK_IMPORTED_MODULE_2__.Task('Wine', 'This is my description people', '2022-07-18', '1', 'Shopping'));



/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formDate": () => (/* binding */ formDate),
/* harmony export */   "formDesc": () => (/* binding */ formDesc),
/* harmony export */   "formPriority": () => (/* binding */ formPriority),
/* harmony export */   "formProject": () => (/* binding */ formProject),
/* harmony export */   "formSubmit": () => (/* binding */ formSubmit),
/* harmony export */   "formTitle": () => (/* binding */ formTitle),
/* harmony export */   "mainContent": () => (/* binding */ mainContent),
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "modalProj": () => (/* binding */ modalProj),
/* harmony export */   "modalTask": () => (/* binding */ modalTask),
/* harmony export */   "projAddBtn": () => (/* binding */ projAddBtn),
/* harmony export */   "projCancelBtn": () => (/* binding */ projCancelBtn),
/* harmony export */   "projInput": () => (/* binding */ projInput),
/* harmony export */   "projList": () => (/* binding */ projList),
/* harmony export */   "span": () => (/* binding */ span),
/* harmony export */   "taskForm": () => (/* binding */ taskForm)
/* harmony export */ });
// Project Form
const projAddBtn = document.querySelector('.project-form .add');
const projCancelBtn = document.querySelector('.project-form .cancel');
const projInput = document.querySelector('.project-form .project');
// Form Elements
const formTitle = document.querySelector('#title');
const formDesc = document.querySelector('#desc');
const formDate = document.querySelector('#duedate');
const formPriority = document.querySelector('#priority');
const formProject = document.querySelector('#project');
const formSubmit = document.querySelector('#formSubmit');
// Sidebar Elements
const projList = document.querySelector('.projects ul');
// Main Elements
const mainContent = document.querySelector('.main-content');
// Modal Elements
const modal = document.querySelector("#myModal");
const modalProj = document.querySelector('.btn-proj');
const modalTask = document.querySelector('.btn-task');
const span = document.getElementsByClassName("close")[0];
const taskForm = document.querySelector(".task-form");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kYXMtbGlzdGEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZGFzLWxpc3RhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kYXMtbGlzdGEvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3RvZGFzLWxpc3RhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZGFzLWxpc3RhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2Rhcy1saXN0YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2Rhcy1saXN0YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2Rhcy1saXN0YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZGFzLWxpc3RhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kYXMtbGlzdGEvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9kYXMtbGlzdGEvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kYXMtbGlzdGEvLi9zcmMvdmFyaWFibGVzLmpzIiwid2VicGFjazovL3RvZGFzLWxpc3RhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZGFzLWxpc3RhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZGFzLWxpc3RhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2Rhcy1saXN0YS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZGFzLWxpc3RhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kYXMtbGlzdGEvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZGFzLWxpc3RhL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kYXMtbGlzdGEvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZGFzLWxpc3RhL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFJlc2V0IENTUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogTWFpbiBTdHlsaW5nID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLnRvZGFzLXdyYXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMztcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxufVxcblxcbi5wcm9qZWN0LXdyYXAgaDMge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwIC5lZGl0LXdyYXAge1xcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwIC50YXNrLXdyYXAge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xcbn1cXG5cXG4udGFzay13cmFwIGxpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbiAgYm9yZGVyOiAxcHggZG90dGVkICMwMDA7XFxufVxcblxcbi5lZGl0LXByb2otY2xvc2UsXFxuLmVkaXQtcHJvai1pbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWN0aXZlIC5lZGl0LXByb2otY2xvc2UsXFxuLmFjdGl2ZSAuZWRpdC1wcm9qLWlucHV0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICBjb2xvcjogI2FhYWFhYTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLFxcbi50YXNrLWZvcm0sXFxuLnRhc2stZWRpdC1zaG93ICNmb3JtU3VibWl0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbC5wcm9qZWN0LXNob3cgLnByb2plY3QtZm9ybSxcXG4ubW9kYWwudGFzay1hZGQtc2hvdyAudGFzay1mb3JtLFxcbi5tb2RhbC50YXNrLWVkaXQtc2hvdyAudGFzay1mb3JtLFxcbi5tb2RhbC5wcm9qZWN0LXNob3csXFxuLm1vZGFsLnRhc2stYWRkLXNob3csXFxuLm1vZGFsLnRhc2stZWRpdC1zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyQ0FBQTtBQUNBOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQUFGOztBQUVBLGdEQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0VBV0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBOztFQUVFLGdCQUFBO0FBR0Y7O0FBREE7O0VBRUUsWUFBQTtBQUlGOztBQUZBOzs7O0VBSUUsV0FBQTtFQUNBLGFBQUE7QUFLRjs7QUFIQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFNRjs7QUFIQSw4Q0FBQTtBQUlBO0VBQ0UsMkJBQUE7QUFHRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7QUFHRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxrQkFBQTtBQU1GOztBQUhBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsdUJBQUE7QUFNRjs7QUFGQTs7RUFFRSxhQUFBO0FBS0Y7O0FBRkE7O0VBRUUscUJBQUE7QUFLRjs7QUFBQSwyQkFBQTtBQUNBO0VBQ0UsYUFBQSxFQUFBLHNCQUFBO0VBQ0EsZUFBQSxFQUFBLGtCQUFBO0VBQ0EsVUFBQSxFQUFBLGVBQUE7RUFDQSxrQkFBQSxFQUFBLHdCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBLEVBQUEsZUFBQTtFQUNBLFlBQUEsRUFBQSxnQkFBQTtFQUNBLGNBQUEsRUFBQSw0QkFBQTtFQUNBLDhCQUFBLEVBQUEsbUJBQUE7RUFDQSxvQ0FBQSxFQUFBLHFCQUFBO0FBR0Y7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBQUEscUJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBQUE7O0VBRUUsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBOzs7RUFHRSxhQUFBO0FBR0Y7O0FBQUE7Ozs7OztFQU1FLGNBQUE7QUFHRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBSZXNldCBDU1MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIE1haW4gU3R5bGluZyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuOnJvb3Qge1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLnRvZGFzLXdyYXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG4vLyBNYWluIGNvbnRlbnRcXG4ucHJvamVjdC13cmFwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxufVxcbi5wcm9qZWN0LXdyYXAgaDMge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbn1cXG4ucHJvamVjdC13cmFwIC5lZGl0LXdyYXAge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbn1cXG4ucHJvamVjdC13cmFwIC50YXNrLXdyYXAge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAzO1xcbn1cXG5cXG4udGFzay13cmFwIGxpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbiAgYm9yZGVyOiAxcHggZG90dGVkICMwMDA7XFxufVxcblxcbi8vIE9wdGlvbnNcXG4uZWRpdC1wcm9qLWNsb3NlLFxcbi5lZGl0LXByb2otaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFjdGl2ZSAuZWRpdC1wcm9qLWNsb3NlLFxcbi5hY3RpdmUgLmVkaXQtcHJvai1pbnB1dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcblxcblxcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhYWFhO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6ICMwMDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0sXFxuLnRhc2stZm9ybSxcXG4udGFzay1lZGl0LXNob3cgI2Zvcm1TdWJtaXR7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWwucHJvamVjdC1zaG93IC5wcm9qZWN0LWZvcm0sXFxuLm1vZGFsLnRhc2stYWRkLXNob3cgLnRhc2stZm9ybSxcXG4ubW9kYWwudGFzay1lZGl0LXNob3cgLnRhc2stZm9ybSxcXG4ubW9kYWwucHJvamVjdC1zaG93LFxcbi5tb2RhbC50YXNrLWFkZC1zaG93LFxcbi5tb2RhbC50YXNrLWVkaXQtc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gTW9kdWxlIGltcG9ydCBmcm9tIGluZGV4LmpzXG5pbXBvcnQgeyBhbGxQcm9qZWN0cywgbW9kYWxDb250cm9sIH0gZnJvbSAnLi9pbmRleC5qcyc7XG4vLyBQcm9qZWN0IG1vZGFsIHZhcmlhYmxlc1xuaW1wb3J0IHsgZm9ybVRpdGxlLCBmb3JtRGVzYywgZm9ybURhdGUsIGZvcm1Qcmlvcml0eSwgZm9ybVByb2plY3QsIHRhc2tGb3JtLCBtYWluQ29udGVudCB9IGZyb20gJy4vdmFyaWFibGVzLmpzJztcblxuLy8gVGFzayBjbGFzc1xuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLm9iamVjdCA9IHRoaXM7XG4gICAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlbGV0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hlY2sgPSBudWxsO1xuICAgICAgICB0aGlzLmVkaXQgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcmVudFByb2ogPSBudWxsO1xuICAgICAgICB0aGlzLmxpID0gbnVsbDtcbiAgICAgICAgdGhpcy50aXRsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICB0aGlzLmRlc2NFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aGlzLmR1ZURhdGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aGlzLnByaW9yaXR5RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB9XG5cbiAgICBkZWxldGVUYXNrQnRuKCkge1xuICAgICAgICB0aGlzLmRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0aGlzLmRlbGV0ZS5pbm5lclRleHQgPSAnWCc7XG4gICAgICAgIHRoaXMuZGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMubGkucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudFByb2oudGFza3Muc3BsaWNlKHRoaXMucGFyZW50UHJvai50YXNrcy5pbmRleE9mKHRoaXMub2JqZWN0KSwgMSk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudFByb2oucHJvamVjdFNob3coKTtcbiAgICAgICAgfSk7IC8vIERlbGV0ZSB0YXNrXG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVFZGl0KCkge1xuICAgICAgICBjb25zdCB1cGRhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdXBkYXRlQnRuLmlubmVyVGV4dCA9ICdVcGRhdGUnO1xuICAgICAgICB1cGRhdGVCdG4uY2xhc3NMaXN0LmFkZCgndXBkYXRlLWJ0bicpO1xuICAgICAgICB1cGRhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gZm9ybVRpdGxlLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5kZXNjID0gZm9ybURlc2MudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBmb3JtRGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBmb3JtUHJpb3JpdHkudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBmb3JtUHJvamVjdC52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2plY3QgIT09IHRoaXMucGFyZW50UHJvai5uYW1lKSB7XG4gICAgICAgICAgICAgICAgYWxsUHJvamVjdHMuYWRkTmV3VGFzayhuZXcgVGFzayhmb3JtVGl0bGUudmFsdWUsIGZvcm1EZXNjLnZhbHVlLCBmb3JtRGF0ZS52YWx1ZSwgZm9ybVByaW9yaXR5LnZhbHVlLCBmb3JtUHJvamVjdC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50UHJvai50YXNrcy5zcGxpY2UodGhpcy5wYXJlbnRQcm9qLnRhc2tzLmluZGV4T2YodGhpcy5vYmplY3QpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZGFsQ29udHJvbC5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudFByb2oucHJvamVjdFNob3coKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1cGRhdGVCdG47XG4gICAgfVxuXG4gICAgZWRpdFRhc2tCdG4oKSB7XG4gICAgICAgIHRoaXMuZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0aGlzLmVkaXQuaW5uZXJUZXh0ID0gJ2VkaXQnO1xuICAgICAgICB0aGlzLmVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGhpcy51cGRhdGVFZGl0KCkpO1xuICAgICAgICAgICAgZm9ybVRpdGxlLnZhbHVlID0gdGhpcy50aXRsZTtcbiAgICAgICAgICAgIGZvcm1EZXNjLnZhbHVlID0gdGhpcy5kZXNjO1xuICAgICAgICAgICAgZm9ybURhdGUudmFsdWUgPSB0aGlzLmR1ZURhdGU7XG4gICAgICAgICAgICBmb3JtUHJpb3JpdHkudmFsdWUgPSB0aGlzLnByaW9yaXR5O1xuICAgICAgICAgICAgZm9ybVByb2plY3QudmFsdWUgPSB0aGlzLnByb2plY3Q7XG4gICAgICAgICAgICBtb2RhbENvbnRyb2wub3Blbk1vZGFsKCd0YXNrLWVkaXQtc2hvdycpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdDtcbiAgICB9XG5cbiAgICBidWlsZEVsZW0oKSB7XG4gICAgICAgIHRoaXMubGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0aGlzLmNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGhpcy50aXRsZUVsZW0uaW5uZXJUZXh0ID0gdGhpcy50aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjRWxlbS5pbm5lclRleHQgPSB0aGlzLmRlc2M7XG4gICAgICAgIHRoaXMuZHVlRGF0ZUVsZW0uaW5uZXJUZXh0ID0gdGhpcy5kdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5RWxlbS5pbm5lclRleHQgPSB0aGlzLnByaW9yaXR5O1xuICAgICAgICB0aGlzLnByb2plY3RFbGVtLmlubmVyVGV4dCA9IHRoaXMucHJvamVjdDtcbiAgICAgICAgdGhpcy5jaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgdGhpcy5jaGVjay5jaGVja2VkID0gdGhpcy5kb25lO1xuICAgICAgICB0aGlzLmNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuZG9uZSA9IHRoaXMuY2hlY2suY2hlY2tlZCk7IC8vIFVwZGF0ZSBkb25lIGtleVxuICAgICAgICB0aGlzLmxpLmFwcGVuZCh0aGlzLmNoZWNrLCB0aGlzLnRpdGxlRWxlbSwgdGhpcy5kZXNjRWxlbSwgdGhpcy5kdWVEYXRlRWxlbSwgdGhpcy5wcmlvcml0eUVsZW0sIHRoaXMucHJvamVjdEVsZW0sIHRoaXMuZWRpdFRhc2tCdG4oKSwgdGhpcy5kZWxldGVUYXNrQnRuKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5saTtcbiAgICB9XG5cblxufTtcblxuLy8gUHJvamVjdCBjbGFzc1xuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFsbFByb2ogPSBbXTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgICAgICB0aGlzLm9iamVjdCA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJvakhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHRoaXMucHJvakJ0biA9IG51bGw7XG4gICAgICAgIHRoaXMub3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHRoaXMuc2JMaSA9IG51bGw7XG4gICAgICAgIHRoaXMuY2xvc2VCdG4gPSBudWxsO1xuICAgIH1cblxuICAgIGFkZFRvVGFza3MocCkgeyB0aGlzLnRhc2tzLnB1c2gocCkgfTsgLy8gQWRkIG5ldyBwcm9qZWN0c1xuXG4gICAgLy8gU2lkZWJhciBsaSBlbGVtZW50XG4gICAgbGlET00oKSB7XG4gICAgICAgIHRoaXMuc2JMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHRoaXMuY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGhpcy5wcm9qQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRoaXMucHJvakJ0bi5pbm5lclRleHQgPSB0aGlzLm5hbWU7XG4gICAgICAgIHRoaXMuY2xvc2VCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuICAgICAgICB0aGlzLnNiTGkuYXBwZW5kKHRoaXMucHJvakJ0biwgdGhpcy5jbG9zZUJ0bik7XG4gICAgICAgIC8vIFJlbW92ZSBwcm9qZWN0IFxuICAgICAgICB0aGlzLmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2JMaS5yZW1vdmUoKTsgLy8gUmVtb3ZlIERPTSBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLm9wdGlvbi5yZW1vdmUoKTsgLy8gUmVtb3ZlIHRhc2sgY3JlYXRpb24gb3B0aW9uXG4gICAgICAgICAgICB0aGlzLmFsbFByb2ouc3BsaWNlKHRoaXMuYWxsUHJvai5pbmRleE9mKGUpLCAxKTsgLy8gUmVtb3ZlIGZyb20gcHJvamVjdCBsaXN0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RTaG93KCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5zYkxpO1xuICAgIH1cblxuICAgIC8vIENsZWFyICYgYXBwZW5kIHRhc2tzIG9uIHBhZ2VcbiAgICBwcm9qZWN0U2hvdygpIHtcbiAgICAgICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHRoaXMudGFza3NFbGVtKCkpO1xuICAgIH1cblxuICAgIC8vIFRhc2sgZm9ybSBvcHRpb24gZWxlbWVudFxuICAgIG9wdGlvbkRPTSgpIHtcbiAgICAgICAgdGhpcy5vcHRpb24udmFsdWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIHRoaXMub3B0aW9uLmlubmVyVGV4dCA9IHRoaXMubmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uO1xuICAgIH1cblxuICAgIC8vIEVkaXQgcHJvamVjdCB0aXRsZVxuICAgIGVkaXRUaXRsZSgpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgY2xvc2VFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGVkaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIC8vIEF0dHJpYnV0ZXNcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXQtd3JhcCcpO1xuICAgICAgICBlZGl0SW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgZWRpdEJ0bi5pbm5lclRleHQgPSAnZWRpdCc7XG4gICAgICAgIGNsb3NlRWRpdC5pbm5lclRleHQgPSAnWCc7XG4gICAgICAgIGNsb3NlRWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0LXByb2otY2xvc2UnKTtcbiAgICAgICAgZWRpdElucHV0LmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvai1pbnB1dCcpO1xuICAgICAgICAvLyBBcHBlbmRcbiAgICAgICAgZGl2LmFwcGVuZChlZGl0SW5wdXQsIGNsb3NlRWRpdCwgZWRpdEJ0bik7XG4gICAgICAgIC8vIENsaWNrIGV2ZW50c1xuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGlmIChhbGxQcm9qZWN0cy5jaGVja1Byb2pMaXN0KGVkaXRJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gZWRpdElucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2pIZWFkZXIuaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2pCdG4uaW5uZXJUZXh0ID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbi5pbm5lclRleHQgPSB0aGlzLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gJ2VkaXQnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnByb2plY3QgPSB0aGlzLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnByb2plY3RFbGVtLmlubmVyVGV4dCA9IHRoaXMubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV3JpdGUgRnVuY3Rpb24gdG8gaGFuZGxlID0+IFByb2plY3QgQWxyZWFkeSBFeGlzdHMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gJ3VwZGF0ZSc7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgICBjbG9zZUVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cblxuICAgIC8vIFNob3cgcHJvamVjdCB0YXNrc1xuICAgIHRhc2tzRWxlbSgpIHtcbiAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIG1haW5EaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC13cmFwJyk7XG4gICAgICAgIHRoaXMucHJvakhlYWRlci5pbm5lclRleHQgPSB0aGlzLm5hbWU7XG5cbiAgICAgICAgbWFpbkRpdi5hcHBlbmQodGhpcy5wcm9qSGVhZGVyLCB0aGlzLmVkaXRUaXRsZSgpLCB1bCk7XG5cbiAgICAgICAgdWwuY2xhc3NMaXN0LmFkZCgndGFzay13cmFwJyk7XG4gICAgICAgIHRoaXMudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKHRhc2suYnVpbGRFbGVtKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWFpbkRpdjtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgVGFzaywgUHJvamVjdCB9OyIsIid1c2Ugc3RyaWN0Jztcbi8vIFN0eWxpbmdcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbi8vIEFsbCB2YXJpYWJsZXNcbmltcG9ydCB7XG4gICAgbWFpbkNvbnRlbnQsIHByb2pMaXN0LCBwcm9qQWRkQnRuLCBwcm9qQ2FuY2VsQnRuLCBwcm9qSW5wdXQsIGZvcm1UaXRsZSwgZm9ybURlc2MsXG4gICAgZm9ybURhdGUsIGZvcm1Qcmlvcml0eSwgZm9ybVByb2plY3QsIGZvcm1TdWJtaXQsIG1vZGFsLCBtb2RhbFByb2osIG1vZGFsVGFzaywgc3BhblxufSBmcm9tICcuL3ZhcmlhYmxlcy5qcyc7XG4vLyBDbGFzc2VzXG5pbXBvcnQgeyBUYXNrLCBQcm9qZWN0IH0gZnJvbSAnLi9jbGFzcy5qcyc7XG5cbi8vIE1haW4gY29udHJvbFxuY29uc3QgYWxsUHJvamVjdHMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxpc3QgPSBbXTtcblxuICAgIGNvbnN0IGNoZWNrUHJvakxpc3QgPSAocCkgPT4gbGlzdC5ldmVyeSgocHJvaikgPT4gcHJvai5uYW1lICE9PSBwKTsgLy8gQ2hlY2sgYXJyYXkgaWYgcHJvamVjdCBhbHJlYWR5IGV4aXN0cyBpbiBwcm9qZWN0c1xuICAgIGNvbnN0IGNoZWNrVGFza0xpc3QgPSAodGFza0xpc3QsIG5ld1Rhc2spID0+IHRhc2tMaXN0LmV2ZXJ5KCh0YXNrKSA9PiB0YXNrLnRpdGxlICE9PSBuZXdUYXNrLnRpdGxlKSAvLyBDaGVjayBhcnJheSBpZiBwcm9qZWN0IGFscmVhZHkgZXhpc3RzIGluIHRhc2tzXG5cbiAgICAvLyBVcGRhdGUgYXBwbGljYXRpb25cbiAgICBjb25zdCB1cGRhdGVBcHAgPSAoKSA9PiB7XG4gICAgICAgIHByb2pMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBsaXN0LmZvckVhY2gocHJvaiA9PiB7XG4gICAgICAgICAgICBwcm9qTGlzdC5hcHBlbmRDaGlsZChwcm9qLmxpRE9NKCkpOyAvLyBVcGRhdGUgc2lkZWJhclxuICAgICAgICAgICAgZm9ybVByb2plY3QuYXBwZW5kQ2hpbGQocHJvai5vcHRpb25ET00oKSk7IC8vIFVwZGF0ZSB0YXNrIGZvcm0gKHByb2plY3Qgc2VsZWN0aW9uKVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICAvLyBBZGQgbmV3IHByb2plY3RzXG4gICAgY29uc3QgYWRkTmV3UHJvaiA9IChwKSA9PiB7XG4gICAgICAgIGlmIChwICE9PSAnJykge1xuICAgICAgICAgICAgaWYgKGNoZWNrUHJvakxpc3QocCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocCk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdC5hbGxQcm9qID0gbGlzdDtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gobmV3UHJvamVjdCk7IC8vIEFkZCBuZXcgcHJvamVjdCB0byBhcnJheVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV3JpdGUgRnVuY3Rpb24gdG8gaGFuZGxlID0+IFByb2plY3QgQWxyZWFkeSBFeGlzdHMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXcml0ZSBGdW5jdGlvbiB0byBoYW5kbGUgPT4gRW1wdHkgUHJvamVjdCBJbnB1dCcpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUFwcCgpO1xuICAgIH1cblxuICAgIC8vIEFkZCBuZXcgcHJvamVjdHNcbiAgICBjb25zdCBhZGROZXdUYXNrID0gKG5ld1Rhc2spID0+IHtcbiAgICAgICAgaWYgKG5ld1Rhc2sudGl0bGUgIT09ICcnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdFtpXS5uYW1lID09PSBuZXdUYXNrLnByb2plY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrVGFza0xpc3QobGlzdFtpXS50YXNrcywgbmV3VGFzaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Rhc2sucGFyZW50UHJvaiA9IGxpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0W2ldLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0W2ldLnByb2plY3RTaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV3JpdGUgRnVuY3Rpb24gdG8gaGFuZGxlID0+IFRhc2sgQWxyZWFkeSBFeGlzdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1dyaXRlIEZ1bmN0aW9uIHRvIGhhbmRsZSA9PiBFbXB0eSBUYXNrIElucHV0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlQXBwKCk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBjb250ZW50IHNob3djYXNlXG4gICAgLy8gY29uc3Qgc2hvd01haW5Db250ZW50ID0gKGUpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2cobGlzdCk7XG4gICAgLy8gICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIC8vICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChlKTtcbiAgICAvLyB9XG5cbiAgICByZXR1cm4geyBhZGROZXdQcm9qLCB1cGRhdGVBcHAsIGFkZE5ld1Rhc2ssIGNoZWNrUHJvakxpc3QgfTtcbn0pKCk7XG5cbi8vIE1vZGFsIGNvbnRyb2xcbmNvbnN0IG1vZGFsQ29udHJvbCA9ICgoKSA9PiB7XG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgdGhlIGJ1dHRvbiwgb3BlbiB0aGUgbW9kYWwgXG4gICAgbW9kYWxQcm9qLm9uY2xpY2sgPSAoKSA9PiBvcGVuTW9kYWwoJ3Byb2plY3Qtc2hvdycpO1xuICAgIG1vZGFsVGFzay5vbmNsaWNrID0gKCkgPT4gb3Blbk1vZGFsKCd0YXNrLWFkZC1zaG93Jyk7XG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gPHNwYW4+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXG4gICAgc3Bhbi5vbmNsaWNrID0gKCkgPT4gY2xvc2VNb2RhbCgpO1xuICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxuICAgIHdpbmRvdy5vbmNsaWNrID0gKGUpID0+IHsgaWYgKGUudGFyZ2V0ID09IG1vZGFsKSB7IGNsb3NlTW9kYWwoKTsgfSB9O1xuICAgIC8vIE9wZW4gLyBDbG9zZSBtb2RhbFxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9IChlKSA9PiB7IG1vZGFsLmNsYXNzTGlzdC5hZGQoZSk7IH1cbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBpZiAobW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWVkaXQtc2hvdycpKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGUtYnRuJykucmVtb3ZlKCk7IH1cbiAgICAgICAgbW9kYWwuY2xhc3NOYW1lID0gJ21vZGFsJztcbiAgICB9XG4gICAgcmV0dXJuIHsgY2xvc2VNb2RhbCwgb3Blbk1vZGFsIH07XG59KSgpO1xuXG4vLyBDbGljayBldmVudCBoYW5kbGVycyBmb3IgUHJvamVjdC8gVGFzayBtb2RhbFxucHJvakFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhbGxQcm9qZWN0cy5hZGROZXdQcm9qKHByb2pJbnB1dC52YWx1ZSk7XG4gICAgbW9kYWxDb250cm9sLmNsb3NlTW9kYWwoKTtcbn0pO1xuXG5mb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFsbFByb2plY3RzLmFkZE5ld1Rhc2sobmV3IFRhc2soZm9ybVRpdGxlLnZhbHVlLCBmb3JtRGVzYy52YWx1ZSwgZm9ybURhdGUudmFsdWUsIGZvcm1Qcmlvcml0eS52YWx1ZSwgZm9ybVByb2plY3QudmFsdWUpKTtcbiAgICBtb2RhbENvbnRyb2wuY2xvc2VNb2RhbCgpO1xufSlcblxuYWxsUHJvamVjdHMuYWRkTmV3UHJvaignSW5ib3gnKTtcbmFsbFByb2plY3RzLmFkZE5ld1Byb2ooJ1Nob3BwaW5nJyk7XG5hbGxQcm9qZWN0cy5hZGROZXdUYXNrKG5ldyBUYXNrKCdDYWxsIE11bScsICdUaGlzIGlzIG15IGRlc2NyaXB0aW9uIHBlb3BsZScsICcyMDIyLTA3LTE1JywgJzMnLCAnSW5ib3gnKSk7XG5hbGxQcm9qZWN0cy5hZGROZXdUYXNrKG5ldyBUYXNrKCdQaXp6YScsICdUaGlzIGlzIG15IGRlc2NyaXB0aW9uIHBlb3BsZScsICcyMDIyLTA3LTE4JywgJzInLCAnU2hvcHBpbmcnKSk7XG5hbGxQcm9qZWN0cy5hZGROZXdUYXNrKG5ldyBUYXNrKCdXaW5lJywgJ1RoaXMgaXMgbXkgZGVzY3JpcHRpb24gcGVvcGxlJywgJzIwMjItMDctMTgnLCAnMScsICdTaG9wcGluZycpKTtcblxuZXhwb3J0IHsgYWxsUHJvamVjdHMsIG1vZGFsQ29udHJvbCB9IiwiLy8gUHJvamVjdCBGb3JtXG5jb25zdCBwcm9qQWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybSAuYWRkJyk7XG5jb25zdCBwcm9qQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybSAuY2FuY2VsJyk7XG5jb25zdCBwcm9qSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtIC5wcm9qZWN0Jyk7XG4vLyBGb3JtIEVsZW1lbnRzXG5jb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbmNvbnN0IGZvcm1EZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2MnKTtcbmNvbnN0IGZvcm1EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZWRhdGUnKTtcbmNvbnN0IGZvcm1Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuY29uc3QgZm9ybVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtU3VibWl0Jyk7XG4vLyBTaWRlYmFyIEVsZW1lbnRzXG5jb25zdCBwcm9qTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cyB1bCcpO1xuLy8gTWFpbiBFbGVtZW50c1xuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4vLyBNb2RhbCBFbGVtZW50c1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215TW9kYWxcIik7XG5jb25zdCBtb2RhbFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXByb2onKTtcbmNvbnN0IG1vZGFsVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdGFzaycpO1xuY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm1cIik7XG5cbmV4cG9ydCB7XG4gICAgbWFpbkNvbnRlbnQsXG4gICAgcHJvakxpc3QsXG4gICAgcHJvakFkZEJ0bixcbiAgICBwcm9qQ2FuY2VsQnRuLFxuICAgIHByb2pJbnB1dCxcbiAgICBmb3JtVGl0bGUsXG4gICAgZm9ybURlc2MsXG4gICAgZm9ybURhdGUsXG4gICAgZm9ybVByaW9yaXR5LFxuICAgIGZvcm1Qcm9qZWN0LFxuICAgIGZvcm1TdWJtaXQsXG4gICAgbW9kYWwsXG4gICAgbW9kYWxQcm9qLFxuICAgIG1vZGFsVGFzayxcbiAgICBzcGFuLFxuICAgIHRhc2tGb3JtXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=