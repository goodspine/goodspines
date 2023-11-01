exports.ids = [9];
exports.modules = {

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=0c046c96&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'sticky-nav': _vm.sticky},attrs:{"id":"nav"}},[_vm._ssrNode("<nav class=\"navigation flex items-center mx-auto\" data-v-0c046c96>","</nav>",[_vm._ssrNode("<div class=\"container relative\" data-v-0c046c96>","</div>",[_vm._ssrNode("<div class=\"shadow-effect relative overflow-hidden\" data-v-0c046c96>","</div>",[_vm._ssrNode("<ul class=\"flex items-center overflow-x-scroll\" data-v-0c046c96>","</ul>",[_vm._ssrNode("<li class=\"empty\" data-v-0c046c96></li> "),_vm._ssrNode("<li data-v-0c046c96>","</li>",[_c('a',{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"link",attrs:{"href":"#melhore-seu-sono"}},[_vm._ssrNode("Melhore seu sono")])]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-0c046c96>","</li>",[_c('a',{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"link",attrs:{"href":"#sobre-GS11"}},[_vm._ssrNode("O travesseiro")])]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-0c046c96>","</li>",[_c('a',{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"link",attrs:{"href":"#o-que-falam-sobre-a-gente"}},[_vm._ssrNode("O que falam sobre ele")])]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-0c046c96>","</li>",[_c('a',{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"link",attrs:{"href":"#opcoes-de-compra"}},[_vm._ssrNode("Opções de Compra")])]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-0c046c96>","</li>",[_c('a',{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"link",attrs:{"href":"#quem-somos"}},[_vm._ssrNode("Quem somos")])]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-0c046c96>","</li>",[_c('a',{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"link",attrs:{"href":"#faq"}},[_vm._ssrNode("FAQ")])]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"ml-auto\" data-v-0c046c96>","</li>",[_c('a',{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"inline-block bg-blue-600 inter-700 md:hover:bg-blue-700 text-white py-3 px-5 transition duration-100 rounded-md text-lg whitespace-nowrap",attrs:{"href":"#opcoes-de-compra","data-menu-highlight":"false","id":"ga-anchor-button-nagivation"}},[_vm._ssrNode("Eu Quero dormir melhor")])]),_vm._ssrNode(" <li class=\"empty\" data-v-0c046c96></li>")],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=0c046c96&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=script&lang=js&
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

// import highlight from '@/assets/highlightOnNavigation.js'

/* harmony default export */ var Navigationvue_type_script_lang_js_ = ({
  data: function () {
    return {
      sticky: false
    };
  },
  mounted() {
    const navBar = document.getElementById('nav');
    const navBarHeight = navBar.offsetHeight;
    window.document.onscroll = e => {
      if (window.scrollY > navBar.offsetTop + navBarHeight) {
        document.body.style.marginTop = `${navBarHeight}px`;
        this.sticky = true;
      } else if (window.scrollY + navBarHeight < navBar.offsetTop + navBarHeight) {
        document.body.style.marginTop = 0;
        this.sticky = false;
      }
    };

    // highlight(navBar)
  }
});
// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navigationvue_type_script_lang_js_ = (Navigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Navigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(89)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0c046c96",
  "53cf4add"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2c7acca6", content, true, context)
};

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_0c046c96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_0c046c96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_0c046c96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_0c046c96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_0c046c96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sticky-nav .navigation[data-v-0c046c96]{animation:slide-data-v-0c046c96 .8s forwards;box-shadow:0 5px 10px 0 rgba(0,0,0,.1);left:0;position:fixed;top:0;width:100vw;z-index:100}@keyframes slide-data-v-0c046c96{0%{transform:translateY(-100%)}to{transform:translateY(0)}}.navigation[data-v-0c046c96]{background:#fff;border-bottom:1px solid #d1d5db;border-top:1px solid #d1d5db;height:75px}.navigation ul[data-v-0c046c96]{-ms-overflow-style:none;scrollbar-width:none}.navigation ul[data-v-0c046c96]::-webkit-scrollbar{display:none}.link[data-v-0c046c96]{--tw-text-opacity:1;color:#374151;color:rgba(55,65,81,var(--tw-text-opacity));font-size:1.125rem;line-height:1.75rem;margin-right:1rem;white-space:nowrap}.link.is-active[data-v-0c046c96],.link[data-v-0c046c96]:hover{color:#0e7fc1}@media(max-width:1279px){.shadow-effect[data-v-0c046c96]:after,.shadow-effect[data-v-0c046c96]:before{content:\"\";height:104%;position:absolute;top:-2%;width:40px}.shadow-effect[data-v-0c046c96]:after{background-image:-webkit-gradient(90deg,hsla(0,0%,100%,0),#fff);background-image:linear-gradient(90deg,hsla(0,0%,100%,0),#fff);right:-2px}.shadow-effect[data-v-0c046c96]:before{background-image:-webkit-gradient(-90deg,hsla(0,0%,100%,0),#fff);background-image:linear-gradient(-90deg,hsla(0,0%,100%,0),#fff);left:-2px}.shadow-effect .empty[data-v-0c046c96]{flex-basis:40px;flex-shrink:0;height:1px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=navigation.js.map