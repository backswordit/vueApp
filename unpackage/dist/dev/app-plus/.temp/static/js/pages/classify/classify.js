global.webpackJsonp([6],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"container\"\n  }, [_c('view', {\n    staticClass: \"body-container\"\n  }, [_c('view', {}, [_vm._v(\"分类 \" + _vm._s(_vm.badgeCount))]), _vm._v(\" \"), _c('view', {\n    staticClass: \"icon-add_circle\"\n  })])])\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-2f82eb40\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-2f82eb40\",\"hasScoped\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!E:/Vue-P/vueApp/pages/classify/classify.vue\n// module id = 15\n// module chunks = 6\n\n");

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\nvar _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);\nvar _classify = __webpack_require__(6);var _classify2 = _interopRequireDefault(_classify);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;\nvar app = new _vue2.default(_classify2.default);\napp.$mount();exports.default =\n\n{\n\tconfig: { \"navigationBarTitleText\": \"分类\" } };\n\n//////////////////\n// WEBPACK FOOTER\n// E:/Vue-P/vueApp/pages/classify/classify.js\n// module id = 22\n// module chunks = 6\n\n//# sourceURL=uni-app:///pages/classify/classify.js?9a7f");

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vuex = __webpack_require__(3);var uni = __webpack_require__(0).default;var ntitlebar;exports.default =\n\n\n\n{\n\tcreated: function created() {\n\n\t},\n\tcomputed: _extends({},\n\t(0, _vuex.mapState)(['badgeCount']),\n\t(0, _vuex.mapState)(['badgeView']),\n\t(0, _vuex.mapState)(['gcolor'])),\n\n\tmethods: _extends({},\n\t(0, _vuex.mapMutations)(['setbadgeCount'])),\n\n\tonLoad: function onLoad() {\n\n\t\tconsole.log(this.badgeCount);\n\t\t// console.log(this.$store.state.badgeView);\n\n\t\tthis.setbadgeCount();\n\n\t\tthis.badgeView.draw('test');\n\t\tthis.badgeView.drawText(this.badgeCount, { top: '0px',\n\t\t\tleft: '50%',\n\t\t\twidth: '15px',\n\t\t\theight: '15px' }, { align: 'center',\n\t\t\tcolor: '#fff',\n\t\t\tsize: '12px' }, 'font');\n\n\t},\n\tonShow: function onShow(option) {\n\t\tconsole.log('onShow');\n\t\t// \t\t\tntitlebar = new plus.nativeObj.View('ntitlebar',\n\t\t// \t\t\t\t{top:'0px',left:'0px',height:'49px',width:'100%',backgroundColor:'#3A3A3A',statusbar:{background:'#333333'}},\n\t\t// \t\t\t\t[\n\t\t// \t\t\t\t\t{tag:'rect',id:'rect',color:'#FF0000',position:{top:'12px',left:'12px',width:'24px',height:'24px'}},\n\t\t// \t\t\t\t\t{tag:'font',id:'font',text:'原生控件',textStyles:{size:'18px'}}\n\t\t// \t\t\t\t]\n\t\t// \t\t\t);\n\t\t// \t\t\tntitlebar.show()\n\t},\n\tonHide: function onHide(option) {\n\t\tconsole.log('onHide');\n\t\t// ntitlebar.close();\n\t} };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//node_modules//babel-runtime\"}]]}!./lib/uni-loader.js!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!E:/Vue-P/vueApp/pages/classify/classify.vue\n// module id = 30\n// module chunks = 6\n\n//# sourceURL=uni-app:///pages/classify/classify.vue?2728");

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-2f82eb40\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"Z://软件安装包//HBuilderX.0.1.47.20180821-alpha.full//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!E:/Vue-P/vueApp/pages/classify/classify.vue\n// module id = 39\n// module chunks = 6\n\n");

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_runtime_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_uni_loader_js_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_classify_vue__ = __webpack_require__(30);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_runtime_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_uni_loader_js_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_classify_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_runtime_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_uni_loader_js_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_classify_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_2f82eb40_hasScoped_false_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_classify_vue__ = __webpack_require__(15);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(39)\n}\nvar normalizeComponent = __webpack_require__(2)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_node_modules_babel_runtime_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_uni_loader_js_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_classify_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_2f82eb40_hasScoped_false_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Z_HBuilderX_0_1_47_20180821_alpha_full_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_classify_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"E:\\\\Vue-P\\\\vueApp\\\\pages\\\\classify\\\\classify.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] classify.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-2f82eb40\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-2f82eb40\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// E:/Vue-P/vueApp/pages/classify/classify.vue\n// module id = 6\n// module chunks = 6\n\n");

/***/ })

},[22]);