exports.ids = [16,15];
exports.modules = {

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNightsModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNightsModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNightsModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNightsModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNightsModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".test-nights .vm--modal{background-color:#581c87;overflow-y:scroll}@media(min-width:475px){.test-nights .vm--modal::-webkit-scrollbar{background-color:rgba(107,33,168,.8);width:8px}.test-nights .vm--modal::-webkit-scrollbar-track{box-shadow:none}.test-nights .vm--modal::-webkit-scrollbar-thumb{background-color:rgba(107,33,168,.6);border-radius:0;outline:none}}@media(min-width:767px){.test-nights .vm--modal::-webkit-scrollbar{display:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestNightsModal.vue?vue&type=template&id=da3cadac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('modal',{staticClass:"test-nights",attrs:{"name":"test-nights","resizable":true,"adaptive":true,"maxWidth":1100,"maxHeight":700,"scrollable":true,"width":'95%',"height":'auto'}},[_c('TestNights',{attrs:{"closeButton":true},on:{"close":_vm.close}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TestNightsModal.vue?vue&type=template&id=da3cadac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestNightsModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TestNightsModalvue_type_script_lang_js_ = ({
  methods: {
    show() {
      this.$modal.show('test-nights');
    },
    close() {
      this.$modal.hide('test-nights');
    }
  },
  mounted() {
    const _self = this;
    let show = true;
    if (this.$isMobile()) {
      setTimeout(() => {
        this.show();
      }, 16000);
    } else {
      document.body.addEventListener('mouseout', function (e) {
        if (!e.relatedTarget && !e.toElement && show) {
          show = false;
          _self.show();
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./components/TestNightsModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TestNightsModalvue_type_script_lang_js_ = (TestNightsModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/TestNightsModal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(140)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TestNightsModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f8143db2"
  
)

/* harmony default export */ var TestNightsModal = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TestNights: __webpack_require__(76).default})


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3351c6f4", content, true, context)
};

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExIDIxQzE2LjUyMjggMjEgMjEgMTYuNTIyOCAyMSAxMUMyMSA1LjQ3NzE1IDE2LjUyMjggMSAxMSAxQzUuNDc3MTUgMSAxIDUuNDc3MTUgMSAxMUMxIDE2LjUyMjggNS40NzcxNSAyMSAxMSAyMVoiIHN0cm9rZT0iI0Q4QjRGRSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0xMC41IDZIMTEiIHN0cm9rZT0iI0Q4QjRGRSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTkgMTBIMTFWMTUiIHN0cm9rZT0iI0Q4QjRGRSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkgMTVIMTMiIHN0cm9rZT0iI0Q4QjRGRSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNights_vue_vue_type_style_index_0_id_6bb66385_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNights_vue_vue_type_style_index_0_id_6bb66385_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNights_vue_vue_type_style_index_0_id_6bb66385_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNights_vue_vue_type_style_index_0_id_6bb66385_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNights_vue_vue_type_style_index_0_id_6bb66385_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(67);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".test-nights[data-v-6bb66385]{--tw-text-opacity:1;background:linear-gradient(180deg,#6b21a8,#581c87);color:#fff;color:rgba(255,255,255,var(--tw-text-opacity));padding-bottom:3.5rem;padding-top:3.5rem;position:relative}@media (min-width:768px){.test-nights[data-v-6bb66385]{padding-bottom:5rem;padding-top:5rem}}.test-nights .wrapper[data-v-6bb66385]{margin-left:auto;margin-right:auto;padding-top:6rem;position:relative}@media (min-width:768px){.test-nights .wrapper[data-v-6bb66385]{padding-top:5rem}}.test-nights .wrapper[data-v-6bb66385]{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat top;background-size:70px;max-width:1260px}@media(min-width:768px){.test-nights .wrapper[data-v-6bb66385]{background-position:left 30px top}}@media(min-width:1024px){.test-nights .wrapper[data-v-6bb66385]{background-size:114px}}@media(min-width:1280px){.test-nights .wrapper[data-v-6bb66385]{background-position:left 100px top}}.test-nights .link[data-v-6bb66385]{--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.375rem;display:inline-block;font-size:1.125rem;line-height:1.75rem;padding:1rem 1.25rem}@media (min-width:640px){.test-nights .link[data-v-6bb66385]{font-size:1.25rem;line-height:1.75rem;padding-left:1.5rem;padding-right:1.5rem}}.test-nights .link[data-v-6bb66385]{color:#6b21a8}.test-nights .closeButton[data-v-6bb66385]{--tw-border-opacity:1;border:4px solid #fff;border-color:rgba(255,255,255,var(--tw-border-opacity));border-radius:9999px;cursor:pointer;display:inline-block;height:35px;position:absolute;right:20px;text-align:center;top:20px;width:35px}.test-nights .closeButton span[data-v-6bb66385]{font-size:22px;line-height:0}@media(min-width:768px){.test-nights .closeButton[data-v-6bb66385]{height:45px;right:30px;top:30px;width:45px}.test-nights .closeButton span[data-v-6bb66385]{font-size:26px}}@media(max-width:767px){.test-nights .obs-text[data-v-6bb66385]{margin-left:auto;margin-right:auto;max-width:200px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-moon.c329120.svg";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("065e2757", content, true, context)
};

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestNights.vue?vue&type=template&id=6bb66385&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"test-nights"},[_vm._ssrNode(((_vm.closeButton)?("<button class=\"closeButton inter-700\" data-v-6bb66385><span data-v-6bb66385>x</span></button>"):"<!---->")+" "),_vm._ssrNode("<div class=\"container\" data-v-6bb66385>","</div>",[_vm._ssrNode("<div class=\"wrapper\" data-v-6bb66385>","</div>",[_vm._ssrNode("<h2 class=\"inter-700 mb-7 text-3xl md:text-5xl text-center\" data-v-6bb66385>21 noites de Teste</h2> <p class=\"inter-400 mb-10 md:mb-16 text-purple-200 text-xl md:text-2xl mx-auto text-center\" style=\"max-width: 750px;\" data-v-6bb66385>A GoodSpine garante à qualidade do seu sono! Se você não se adaptar, pode nos devolver o travesseiro que devolvemos o valor integral menos 10% de taxa administrativa.</p> "),_vm._ssrNode("<div class=\"text-center\" data-v-6bb66385>","</div>",[_vm._ssrNode("<span data-v-6bb66385>","</span>",[_c('a',{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:({ duration: 1000 }),expression:"{ duration: 1000 }"}],staticClass:"link inter-700",attrs:{"href":"#opcoes-de-compra","id":"ga-anchor-button-section"}},[_vm._ssrNode("Eu Quero dormir melhor")])])]),_vm._ssrNode(" <div class=\"obs-text\" data-v-6bb66385><p class=\"flex items-center justify-center inter-400 mt-4 md:mt-7 text-purple-300 md:text-lg\" data-v-6bb66385><img"+(_vm._ssrAttr("src",__webpack_require__(64)))+" alt=\"Ícone ilustrativo\" class=\"mr-3.5\" data-v-6bb66385>\n          Frete de devolução por conta do cliente\n        </p></div>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TestNights.vue?vue&type=template&id=6bb66385&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestNights.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TestNightsvue_type_script_lang_js_ = ({
  props: {
    closeButton: Boolean
  },
  methods: {
    closeEvent() {
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./components/TestNights.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TestNightsvue_type_script_lang_js_ = (TestNightsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/TestNights.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TestNightsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6bb66385",
  "07851254"
  
)

/* harmony default export */ var TestNights = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=test-nights-modal.js.map