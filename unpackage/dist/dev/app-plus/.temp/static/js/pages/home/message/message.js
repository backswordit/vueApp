global.webpackJsonp([4],{

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"container\"\n  }, [_c('view', {\n    staticClass: \"body-container\"\n  }, _vm._l((_vm.msgList), function(list, index) {\n    return _c('view', {\n      key: index,\n      staticClass: \"lists\"\n    }, [_c('view', {\n      staticClass: \"name\"\n    }, [_vm._v(_vm._s(list.name))]), _vm._v(\" \"), _c('view', {\n      staticClass: \"date\"\n    }, [_vm._v(_vm._s(list.date))])])\n  }))])\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-a9ceb0a4\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-a9ceb0a4\",\"hasScoped\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!E:/Vue-P/vueApp/pages/home/message/message.vue\n// module id = 18\n// module chunks = 4\n\n");

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\nvar _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);\nvar _message = __webpack_require__(8);var _message2 = _interopRequireDefault(_message);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;\nvar app = new _vue2.default(_message2.default);\napp.$mount();exports.default =\n\n{\n\tconfig: { \"navigationBarTitleText\": \"通知消息\" } };\n\n//////////////////\n// WEBPACK FOOTER\n// E:/Vue-P/vueApp/pages/home/message/message.js\n// module id = 24\n// module chunks = 4\n\n//# sourceURL=uni-app:///pages/home/message/message.js?f005");

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vuex = __webpack_require__(3);var uni = __webpack_require__(0).default;exports.default =\n\n\n\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\tview_head: null,\n\t\t\tmsgList: [{\n\t\t\t\tname: '您的商品已发货.',\n\t\t\t\tdate: '2018-08-12' },\n\t\t\t{\n\t\t\t\tname: '您的商品已发货.',\n\t\t\t\tdate: '2018-08-12' }] };\n\n\n\t},\n\tcomputed: _extends({},\n\t(0, _vuex.mapState)(['badgeView']),\n\t(0, _vuex.mapState)(['gcolor'])),\n\n\tmethods: {\n\t\tback: function back() {\n\t\t\tuni.navigateBack({\n\t\t\t\tdelta: 1 });\n\n\t\t} },\n\n\tonLoad: function onLoad() {\n\n\t\tthis.badgeView.hide();\n\n\t},\n\tonUnload: function onUnload() {\n\n\t\tthis.badgeView.show();\n\n\n\t} };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//node_modules//babel-runtime\"}]]}!./lib/uni-loader.js!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!E:/Vue-P/vueApp/pages/home/message/message.vue\n// module id = 32\n// module chunks = 4\n\n//# sourceURL=uni-app:///pages/home/message/message.vue?0669");

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-a9ceb0a4\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!E:/Vue-P/vueApp/pages/home/message/message.vue\n// module id = 42\n// module chunks = 4\n\n");

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_runtime_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_uni_loader_js_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_message_vue__ = __webpack_require__(32);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_runtime_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_uni_loader_js_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_message_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_runtime_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_uni_loader_js_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_message_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_a9ceb0a4_hasScoped_false_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_message_vue__ = __webpack_require__(18);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(42)\n}\nvar normalizeComponent = __webpack_require__(2)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_runtime_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_uni_loader_js_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_message_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_a9ceb0a4_hasScoped_false_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_message_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"E:\\\\Vue-P\\\\vueApp\\\\pages\\\\home\\\\message\\\\message.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] message.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-a9ceb0a4\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-a9ceb0a4\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// E:/Vue-P/vueApp/pages/home/message/message.vue\n// module id = 8\n// module chunks = 4\n\n");

/***/ })

},[24]);