/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_error"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fs1f10230014%2FINIADts-jobsite-fork%2Fclient%2Fsrc%2Fpages%2F_error.page.tsx&page=%2F_error!":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fs1f10230014%2FINIADts-jobsite-fork%2Fclient%2Fsrc%2Fpages%2F_error.page.tsx&page=%2F_error! ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/_error\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/_error.page.tsx */ \"./src/pages/_error.page.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/_error\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZob21lJTJGczFmMTAyMzAwMTQlMkZJTklBRHRzLWpvYnNpdGUtZm9yayUyRmNsaWVudCUyRnNyYyUyRnBhZ2VzJTJGX2Vycm9yLnBhZ2UudHN4JnBhZ2U9JTJGX2Vycm9yISIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLGdFQUE2QjtBQUNwRDtBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/NjJjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19lcnJvclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vc3JjL3BhZ2VzL19lcnJvci5wYWdlLnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvX2Vycm9yXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fs1f10230014%2FINIADts-jobsite-fork%2Fclient%2Fsrc%2Fpages%2F_error.page.tsx&page=%2F_error!\n"));

/***/ }),

/***/ "./src/pages/_error.page.tsx":
/*!***********************************!*\
  !*** ./src/pages/_error.page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst errorCodes = [\n    400,\n    404,\n    405,\n    500\n];\nconst errorMessages = {\n    400: \"Bad Request\",\n    404: \"Not Found\",\n    405: \"Method Not Allowed\",\n    500: \"Internal Server Error\",\n    other: \"Error\"\n};\nconst isError = (statusCode)=>errorCodes.includes(statusCode);\nconst Error = (param)=>{\n    let { statusCode } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            width: \"100%\",\n            height: \"100%\",\n            color: \"var(--color-fg-main)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        statusCode,\n                        \" | \",\n                        errorMessages[isError(statusCode) ? statusCode : \"other\"]\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/s1f10230014/INIADts-jobsite-fork/client/src/pages/_error.page.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/s1f10230014/INIADts-jobsite-fork/client/src/pages/_error.page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    textDecorationLine: \"underline\",\n                    textDecorationColor: \"var(--color-error)\",\n                    textDecorationStyle: \"wavy\",\n                    textDecorationThickness: 2\n                },\n                children: [\n                    statusCode,\n                    \" \",\n                    errorMessages[isError(statusCode) ? statusCode : \"other\"],\n                    \";\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/s1f10230014/INIADts-jobsite-fork/client/src/pages/_error.page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/s1f10230014/INIADts-jobsite-fork/client/src/pages/_error.page.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Error;\nError.getInitialProps = async (param)=>{\n    let { res, err } = param;\n    var _err_statusCode;\n    const statusCode = res ? res.statusCode : err ? (_err_statusCode = err.statusCode) !== null && _err_statusCode !== void 0 ? _err_statusCode : 500 : 404;\n    return {\n        statusCode\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Error);\nvar _c;\n$RefreshReg$(_c, \"Error\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2Vycm9yLnBhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUM2QjtBQVE3QixNQUFNQyxhQUFhO0lBQUM7SUFBSztJQUFLO0lBQUs7Q0FBSTtBQUV2QyxNQUFNQyxnQkFBZ0I7SUFDcEIsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMQyxPQUFPO0FBQ1Q7QUFFQSxNQUFNQyxVQUFVLENBQUNDLGFBQWlESixXQUFXSyxRQUFRLENBQUNEO0FBQ3RGLE1BQU1FLFFBQXlCO1FBQUMsRUFBRUYsVUFBVSxFQUFFO0lBQzVDLHFCQUNFLDhEQUFDRztRQUNDQyxPQUFPO1lBQ0xDLFNBQVM7WUFDVEMsZ0JBQWdCO1lBQ2hCQyxZQUFZO1lBQ1pDLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxPQUFPO1FBQ1Q7OzBCQUVBLDhEQUFDZixrREFBSUE7MEJBQ0gsNEVBQUNnQjs7d0JBQ0VYO3dCQUFXO3dCQUFJSCxhQUFhLENBQUNFLFFBQVFDLGNBQWNBLGFBQWEsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUc3RSw4REFBQ1k7Z0JBQ0NSLE9BQU87b0JBQ0xTLG9CQUFvQjtvQkFDcEJDLHFCQUFxQjtvQkFDckJDLHFCQUFxQjtvQkFDckJDLHlCQUF5QjtnQkFDM0I7O29CQUVDaEI7b0JBQVc7b0JBQUVILGFBQWEsQ0FBQ0UsUUFBUUMsY0FBY0EsYUFBYSxRQUFRO29CQUFDOzs7Ozs7Ozs7Ozs7O0FBSWhGO0tBN0JNRTtBQStCTkEsTUFBTWUsZUFBZSxHQUFHO1FBQU8sRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQW1CO1FBQ1ZBO0lBQWhELE1BQU1uQixhQUFha0IsTUFBTUEsSUFBSWxCLFVBQVUsR0FBR21CLE1BQU1BLENBQUFBLGtCQUFBQSxJQUFJbkIsVUFBVSxjQUFkbUIsNkJBQUFBLGtCQUFrQixNQUFNO0lBQ3hFLE9BQU87UUFBRW5CO0lBQVc7QUFDdEI7QUFFQSwrREFBZUUsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2Vycm9yLnBhZ2UudHN4PzE1ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzdGF0dXNDb2RlOiBudW1iZXI7XG59XG5cbnR5cGUgRXJyb3JDb2RlcyA9IDQwMCB8IDQwNCB8IDQwNSB8IDUwMDtcblxuY29uc3QgZXJyb3JDb2RlcyA9IFs0MDAsIDQwNCwgNDA1LCA1MDBdO1xuXG5jb25zdCBlcnJvck1lc3NhZ2VzID0ge1xuICA0MDA6ICdCYWQgUmVxdWVzdCcsXG4gIDQwNDogJ05vdCBGb3VuZCcsXG4gIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXG4gIDUwMDogJ0ludGVybmFsIFNlcnZlciBFcnJvcicsXG4gIG90aGVyOiAnRXJyb3InLFxufTtcblxuY29uc3QgaXNFcnJvciA9IChzdGF0dXNDb2RlOiBudW1iZXIpOiBzdGF0dXNDb2RlIGlzIEVycm9yQ29kZXMgPT4gZXJyb3JDb2Rlcy5pbmNsdWRlcyhzdGF0dXNDb2RlKTtcbmNvbnN0IEVycm9yOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyBzdGF0dXNDb2RlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBjb2xvcjogJ3ZhcigtLWNvbG9yLWZnLW1haW4pJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5cbiAgICAgICAgICB7c3RhdHVzQ29kZX0gfCB7ZXJyb3JNZXNzYWdlc1tpc0Vycm9yKHN0YXR1c0NvZGUpID8gc3RhdHVzQ29kZSA6ICdvdGhlciddfVxuICAgICAgICA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHBcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6ICd1bmRlcmxpbmUnLFxuICAgICAgICAgIHRleHREZWNvcmF0aW9uQ29sb3I6ICd2YXIoLS1jb2xvci1lcnJvciknLFxuICAgICAgICAgIHRleHREZWNvcmF0aW9uU3R5bGU6ICd3YXZ5JyxcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvblRoaWNrbmVzczogMixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3N0YXR1c0NvZGV9IHtlcnJvck1lc3NhZ2VzW2lzRXJyb3Ioc3RhdHVzQ29kZSkgPyBzdGF0dXNDb2RlIDogJ290aGVyJ119O1xuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRXJyb3IuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVzLCBlcnIgfTogTmV4dFBhZ2VDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlID8/IDUwMCA6IDQwNDtcbiAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3I7XG4iXSwibmFtZXMiOlsiSGVhZCIsImVycm9yQ29kZXMiLCJlcnJvck1lc3NhZ2VzIiwib3RoZXIiLCJpc0Vycm9yIiwic3RhdHVzQ29kZSIsImluY2x1ZGVzIiwiRXJyb3IiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwidGl0bGUiLCJwIiwidGV4dERlY29yYXRpb25MaW5lIiwidGV4dERlY29yYXRpb25Db2xvciIsInRleHREZWNvcmF0aW9uU3R5bGUiLCJ0ZXh0RGVjb3JhdGlvblRoaWNrbmVzcyIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_error.page.tsx\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fs1f10230014%2FINIADts-jobsite-fork%2Fclient%2Fsrc%2Fpages%2F_error.page.tsx&page=%2F_error!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);