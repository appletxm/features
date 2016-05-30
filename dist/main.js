/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************!*\
  !*** ./src/app/main.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _excel = __webpack_require__(/*! ./excel/excel */ 1);
	
	var _pdf = __webpack_require__(/*! ./pdf/pdf */ 10);
	
	window.myApp = {
		excel: _excel.excelOperation,
		pdf: _pdf.pdfOperation
	};

/***/ },
/* 1 */
/*!********************************!*\
  !*** ./src/app/excel/excel.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.excelOperation = undefined;
	
	var _excelData = __webpack_require__(/*! ./excel-data */ 2);
	
	var _excelTemplate = __webpack_require__(/*! ./excel-template */ 3);
	
	var _excelUtil = __webpack_require__(/*! ./excel-util */ 4);
	
	var excelOperation = {
		util: new _excelUtil.ExcelUtil(_excelTemplate.excelTemplate, _excelData.data, _excelData.sheetName),
		outPut: function outPut() {
			this.util.outPutExcel();
		}
	};
	
	exports.excelOperation = excelOperation;

/***/ },
/* 2 */
/*!*************************************!*\
  !*** ./src/app/excel/excel-data.js ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var sheetName = 'my excel test';
	var data = [{
		name: 'txm',
		age: '60',
		location: 'GZ'
	}, {
		name: 'FFT',
		age: '70',
		location: 'GZ'
	}, {
		name: 'bb',
		age: '69',
		location: 'SZ'
	}];
	
	exports.sheetName = sheetName;
	exports.data = data;

/***/ },
/* 3 */
/*!*****************************************!*\
  !*** ./src/app/excel/excel-template.js ***!
  \*****************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var excelTemplate = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">\
			<head><!--[if gte mso 9]>\
				<xml>\
				<x:ExcelWorkbook>\
					<x:ExcelWorksheets>\
						<x:ExcelWorksheet>\
							<x:Name>{{worksheet}}</x:Name>\
							<x:WorksheetOptions>\
								<x:DisplayGridlines/>\
							</x:WorksheetOptions>\
						</x:ExcelWorksheet>\
					</x:ExcelWorksheets>\
				</x:ExcelWorkbook>\
				</xml><![endif]-->\
			</head>\
			<body>\
			{{table}}\
			</body>\
	</html>';
	
	exports.excelTemplate = excelTemplate;

/***/ },
/* 4 */
/*!*************************************!*\
  !*** ./src/app/excel/excel-util.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ExcelUtil = undefined;
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 6);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ExcelUtil = function () {
		function ExcelUtil(template, data, sheetName) {
			(0, _classCallCheck3.default)(this, ExcelUtil);
	
			this.data = data;
			this.template = template;
			this.sheetName = sheetName;
		}
	
		(0, _createClass3.default)(ExcelUtil, [{
			key: 'generatorHtml',
			value: function generatorHtml() {
				var girdHtml = [];
	
				girdHtml.push('<table>');
				girdHtml.push('<caption>this is my excel output test just for webkit </caption>');
				girdHtml.push('<thead>');
				for (var key in this.data[0]) {
					girdHtml.push('<th>' + key + '</th>');
				}
				girdHtml.push('</thead>');
	
				girdHtml.push('<tbody>');
				this.data.forEach(function (item) {
					girdHtml.push('<tr>');
					girdHtml.push('<td>' + item['name'] + '</td>');
					girdHtml.push('<td>' + item['age'] + '</td>');
					girdHtml.push('<td>' + item['location'] + '</td>');
					girdHtml.push('</tr>');
				});
				girdHtml.push('</tbody>');
				girdHtml.push('</table>');
	
				return girdHtml.join('');
			}
		}, {
			key: 'getOutPutHtml',
			value: function getOutPutHtml(template) {
				var uri = 'data:application/vnd.ms-excel;base64,';
	
				template = window.btoa(unescape(encodeURIComponent(template)));
				window.location.href = uri + template;
			}
		}, {
			key: 'generateExcelFile',
			value: function generateExcelFile(gridHtml) {
				var template = this.template;
				template = template.replace('{{worksheet}}', this.sheetName);
				template = template.replace('{{table}}', gridHtml);
	
				return template;
			}
		}, {
			key: 'outPutExcel',
			value: function outPutExcel() {
				var gridHtml = this.generatorHtml();
				var template = this.generateExcelFile(gridHtml);
				this.getOutPutHtml(template);
			}
		}]);
		return ExcelUtil;
	}();
	
	;
	
	exports.ExcelUtil = ExcelUtil;

/***/ },
/* 5 */
/*!***************************************************!*\
  !*** ./~/babel-runtime/helpers/classCallCheck.js ***!
  \***************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 6 */
/*!************************************************!*\
  !*** ./~/babel-runtime/helpers/createClass.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ 7);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 7 */
/*!***********************************************************!*\
  !*** ./~/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 8), __esModule: true };

/***/ },
/* 8 */
/*!************************************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/fn/object/define-property.js ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! ../../modules/$ */ 9);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 9 */
/*!********************************************************!*\
  !*** ./~/babel-runtime/~/core-js/library/modules/$.js ***!
  \********************************************************/
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 10 */
/*!****************************!*\
  !*** ./src/app/pdf/pdf.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.pdfOperation = undefined;
	
	var _pdfData = __webpack_require__(/*! ./pdf-data */ 11);
	
	var _pdfUtil = __webpack_require__(/*! ./pdf-util */ 12);
	
	var pdfOperation = {
		util: new _pdfUtil.PdfUtil(_pdfData.data),
		outPut: function outPut() {
			this.util.outPutPdf();
		}
	};
	
	exports.pdfOperation = pdfOperation;

/***/ },
/* 11 */
/*!*********************************!*\
  !*** ./src/app/pdf/pdf-data.js ***!
  \*********************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var sheetName = 'my excel test';
	var data = [{
		name: 'txm',
		age: '60',
		location: 'GZ'
	}, {
		name: 'FFT',
		age: '70',
		location: 'GZ'
	}, {
		name: 'bb',
		age: '69',
		location: 'SZ'
	}];
	
	exports.sheetName = sheetName;
	exports.data = data;

/***/ },
/* 12 */
/*!*********************************!*\
  !*** ./src/app/pdf/pdf-util.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.PdfUtil = undefined;
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 6);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PdfUtil = function () {
		function PdfUtil(data) {
			(0, _classCallCheck3.default)(this, PdfUtil);
	
			this.data = data;
		}
	
		(0, _createClass3.default)(PdfUtil, [{
			key: 'generatorHtml',
			value: function generatorHtml() {
				var girdHtml = [];
	
				girdHtml.push('<table>');
				girdHtml.push('<caption>this is my pdf output test just for webkit </caption>');
				girdHtml.push('<thead>');
				for (var key in this.data[0]) {
					girdHtml.push('<th>' + key + '</th>');
				}
				girdHtml.push('</thead>');
	
				girdHtml.push('<tbody>');
				this.data.forEach(function (item) {
					girdHtml.push('<tr>');
					girdHtml.push('<td>' + item['name'] + '</td>');
					girdHtml.push('<td>' + item['age'] + '</td>');
					girdHtml.push('<td>' + item['location'] + '</td>');
					girdHtml.push('</tr>');
				});
				girdHtml.push('</tbody>');
				girdHtml.push('</table>');
	
				return girdHtml.join('');
			}
		}, {
			key: 'getOutPutHtml',
			value: function getOutPutHtml(template) {
				/*var uri = 'data:application/pdf;base64,';
	   		template = window.btoa(unescape(encodeURIComponent(template)));
	   window.location.href = uri + template;*/
	
				/*var template = window.btoa(unescape(encodeURIComponent('hellow world ! just test the pdf out put fature.')));
	   var uri = 'data:application/pdf;base64,';
	   		//window.location.href = uri + template;
	   window.open(uri + template);*/
	
				var div = document.createElement('div');
				var body = document.querySelector('body');
	
				div.innerHTML = template;
				body.appendChild(div);
	
				document.execCommand('print');
			}
		}, {
			key: 'outPutPdf',
			value: function outPutPdf() {
				var gridHtml = this.generatorHtml();
				this.getOutPutHtml(gridHtml);
			}
		}]);
		return PdfUtil;
	}();
	
	;
	
	exports.PdfUtil = PdfUtil;

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map