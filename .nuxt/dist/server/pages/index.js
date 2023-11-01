exports.ids = [19,2,3,4,5,6,7,8,9,11,12,13,14,15,16,18];
exports.modules = Array(31).concat([
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/star-fill.d73b7c2.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMTAiIGZpbGw9IiMyMkM1NUUiLz4KPHBhdGggZD0iTTMuMzMzMzcgMTBMOC4zMzMzNyAxNUwxNi42NjY3IDUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/travesseiro.38a9594.png";

/***/ }),
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-star-white.95272c6.svg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("e3f42dfa", content, true, context)
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-approved.3246963.svg";

/***/ }),
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0b1e75f2", content, true, context)
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("13b19cd7", content, true, context)
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iMzAiIGZpbGw9IiNGRUNBQ0EiLz4KPHBhdGggZD0iTTMxLjY2NjYgMTVDMjUuMzMzMyAxNSAyMC4zMzMzIDE5LjgzMzMgMTkuOTk5OSAyNi4xNjY3TDE2LjgzMzMgMzAuMzMzM0MxNi40OTk5IDMwLjgzMzMgMTYuODMzMyAzMS42NjY3IDE3LjQ5OTkgMzEuNjY2N0gxOS45OTk5VjM2LjY2NjdDMTkuOTk5OSAzOC41IDIxLjQ5OTkgNDAgMjMuMzMzMyA0MEgyNC45OTk5VjQ1SDM2LjY2NjZWMzcuMTY2N0M0MC42NjY2IDM1LjMzMzMgNDMuMzMzMyAzMS4zMzMzIDQzLjMzMzMgMjYuNjY2N0M0My4zMzMzIDIwLjE2NjcgMzguMTY2NiAxNSAzMS42NjY2IDE1WiIgZmlsbD0iI0I5MUMxQyIvPgo8L3N2Zz4K"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzYiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCA3NiA1MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijc2IiBoZWlnaHQ9IjUxIiByeD0iMTIiIGZpbGw9IiMxMTE4MjciIGZpbGwtb3BhY2l0eT0iMC42Ii8+CjxwYXRoIGQ9Ik0zOCAxMi44NzVDMzAuNzUyIDEyLjg3NSAyNC44NzUgMTguNzUyIDI0Ljg3NSAyNkMyNC44NzUgMzMuMjQ4IDMwLjc1MiAzOS4xMjUgMzggMzkuMTI1QzQ1LjI0OCAzOS4xMjUgNTEuMTI1IDMzLjI0OCA1MS4xMjUgMjZDNTEuMTI1IDE4Ljc1MiA0NS4yNDggMTIuODc1IDM4IDEyLjg3NVpNNDIuMjIxNyAyNi4yMDIxTDM1LjgyMzIgMzAuODU3NEMzNS43ODgyIDMwLjg4MjYgMzUuNzQ2OCAzMC44OTc3IDM1LjcwMzcgMzAuOTAwOUMzNS42NjA3IDMwLjkwNDIgMzUuNjE3NSAzMC44OTU1IDM1LjU3OTEgMzAuODc1OEMzNS41NDA2IDMwLjg1NjEgMzUuNTA4MyAzMC44MjYyIDM1LjQ4NTggMzAuNzg5NEMzNS40NjMyIDMwLjc1MjUgMzUuNDUxMiAzMC43MTAyIDM1LjQ1MTIgMzAuNjY3VjIxLjM2MjNDMzUuNDUxIDIxLjMxOSAzNS40NjI5IDIxLjI3NjUgMzUuNDg1NCAyMS4yMzk2QzM1LjUwNzkgMjEuMjAyNiAzNS41NDAyIDIxLjE3MjYgMzUuNTc4OCAyMS4xNTI5QzM1LjYxNzMgMjEuMTMzMiAzNS42NjA1IDIxLjEyNDUgMzUuNzAzNyAyMS4xMjc5QzM1Ljc0NjggMjEuMTMxMiAzNS43ODgyIDIxLjE0NjQgMzUuODIzMiAyMS4xNzE5TDQyLjIyMTcgMjUuODI0MkM0Mi4yNTE5IDI1Ljg0NTYgNDIuMjc2NiAyNS44NzM5IDQyLjI5MzYgMjUuOTA2OEM0Mi4zMTA2IDI1LjkzOTcgNDIuMzE5NSAyNS45NzYyIDQyLjMxOTUgMjYuMDEzMkM0Mi4zMTk1IDI2LjA1MDIgNDIuMzEwNiAyNi4wODY3IDQyLjI5MzYgMjYuMTE5NkM0Mi4yNzY2IDI2LjE1MjUgNDIuMjUxOSAyNi4xODA4IDQyLjIyMTcgMjYuMjAyMVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=655f2f56&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"pt-16 pb-10",staticStyle:{"background":"#001C5B"}},[_vm._ssrNode("<div class=\"container\" data-v-655f2f56><div class=\"flex justify-between flex-col md:flex-row\" data-v-655f2f56><div class=\"flex flex-col sm:flex-row\" data-v-655f2f56><ul class=\"text-center sm:text-left sm:mr-20\" data-v-655f2f56><li class=\"inter-700 text-xl\" data-v-655f2f56>Fale conosco</li> <li data-v-655f2f56><a href=\"https://loja.goodspine.com.br/#contato\" target=\"_blank\" data-v-655f2f56>Falar com suporte</a></li> <li data-v-655f2f56><a href=\"https://api.whatsapp.com/send?phone=5511988520605\" target=\"_blank\" id=\"ga-whatsapp-button-footer\" data-v-655f2f56>Quero comprar por Whatsapp</a></li></ul> <ul class=\"text-center sm:text-left\" data-v-655f2f56><li class=\"inter-700 text-xl\" data-v-655f2f56>Good Spine</li> <li data-v-655f2f56><a href=\"https://loja.goodspine.com.br/\" target=\"_blank\" data-v-655f2f56>Ver outros produtos</a></li> <li data-v-655f2f56><a href=\"https://loja.goodspine.com.br/pagina/sobre-nos.html\" target=\"_blank\" data-v-655f2f56>Sobre nós</a></li> <li data-v-655f2f56><a href=\"https://loja.goodspine.com.br/pagina/politica-de-troca-e-devolucoes.html\" target=\"_blank\" data-v-655f2f56>Política de Troca e Devoluções</a></li> <li data-v-655f2f56><a href=\"https://blog.goodspine.com.br/politica-de-privacidade-2/\" target=\"_blank\" data-v-655f2f56>Política de Privacidade</a></li></ul></div> <div class=\"flex justify-center sm:justify-start\" data-v-655f2f56><a href=\"https://api.whatsapp.com/send?phone=5511988520605\" target=\"_blank\" id=\"ga-whatsapp-icon-footer\" class=\"link-social mr-4\" data-v-655f2f56><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt=\"Link para whatsapp\" data-v-655f2f56></a> <a href=\"https://www.instagram.com/goodspinebrasil/\" target=\"_blank\" class=\"link-social\" data-v-655f2f56><img"+(_vm._ssrAttr("src",__webpack_require__(46)))+" alt=\"Link para instagram\" data-v-655f2f56></a></div></div> <div class=\"flex flex-col md:flex-row items-center md:items-start md:justify-between pt-9 mt-9 md:mt-0\" style=\"border-top: 1px solid #4D608C;\" data-v-655f2f56><p class=\"inter-700 text-3xl\" data-v-655f2f56>Good Spine</p> <div class=\"flex justify-center md:items-center flex-col sm:flex-row\" data-v-655f2f56><div class=\"inline-flex items-center mx-2  mt-4 md:mt-0\" data-v-655f2f56><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt class=\"mr-2\" data-v-655f2f56> <div data-v-655f2f56><p class=\"text-gray-400 leading-none text-sm\" data-v-655f2f56>Frete SP</p> <p class=\"inter-700 text-white leading-none\" data-v-655f2f56>GRÁTIS</p></div></div> <div class=\"inline-flex items-center mx-2  mt-4 md:mt-0\" data-v-655f2f56><img"+(_vm._ssrAttr("src",__webpack_require__(48)))+" alt class=\"mr-2\" data-v-655f2f56> <div data-v-655f2f56><p class=\"text-gray-400 leading-none text-sm\" data-v-655f2f56>GARANTIA</p> <p class=\"inter-700 text-white leading-none\" data-v-655f2f56>1 ANO</p></div></div> <div class=\"inline-flex items-center mx-2  mt-4 md:mt-0\" data-v-655f2f56><img"+(_vm._ssrAttr("src",__webpack_require__(49)))+" alt class=\"mr-2\" data-v-655f2f56> <div data-v-655f2f56><p class=\"text-gray-400 leading-none text-sm\" data-v-655f2f56>COMPRA</p> <p class=\"inter-700 text-white leading-none\" data-v-655f2f56>SEGURA</p></div></div> <div class=\"inline-flex items-center mx-2  mt-4 md:mt-0\" data-v-655f2f56><img"+(_vm._ssrAttr("src",__webpack_require__(50)))+" alt class=\"mr-2\" style=\"width:40px;\" data-v-655f2f56> <div data-v-655f2f56><p class=\"text-gray-400 leading-none text-sm\" data-v-655f2f56>SELO</p> <p class=\"inter-700 text-white leading-none\" data-v-655f2f56>APROVADO</p></div></div></div></div></div> <script type=\"application/ld+json\" data-v-655f2f56>\n{\n  &quot;@context&quot;: &quot;https://schema.org&quot;,\n  &quot;@type&quot;: &quot;MedicalOrganization&quot;,\n  &quot;name&quot;: &quot;GoodSpine&quot;,\n  &quot;alternateName&quot;: &quot;Good Spine&quot;,\n  &quot;url&quot;: &quot;https://travesseiro.goodspine.com.br/&quot;,\n  &quot;logo&quot;: &quot;https://travesseiro.goodspine.com.br/_nuxt/img/b2b21ce.png&quot;,\n  &quot;contactPoint&quot;: {\n    &quot;@type&quot;: &quot;ContactPoint&quot;,\n    &quot;telephone&quot;: &quot;+55 11 98852-0605&quot;,\n    &quot;contactType&quot;: &quot;customer service&quot;,\n    &quot;areaServed&quot;: &quot;BR&quot;,\n    &quot;availableLanguage&quot;: &quot;Portuguese&quot;\n  },\n  &quot;sameAs&quot;: [\n    &quot;https://www.instagram.com/goodspinebrasil/&quot;,\n    &quot;https://loja.goodspine.com.br/&quot;\n  ]\n}\n</script> <script type=\"application/ld+json\" data-v-655f2f56>\n{\n  &quot;@context&quot;: &quot;https://schema.org/&quot;, \n  &quot;@type&quot;: &quot;Product&quot;, \n  &quot;name&quot;: &quot;Travesseiro Anatômico GS11&quot;,\n  &quot;image&quot;: &quot;https://travesseiro.goodspine.com.br/_nuxt/img/e4e127d.jpg&quot;,\n  &quot;description&quot;: &quot;Através de sua tecnologia inovadora, o travesseiro GS11 ajuda a resolver estes problemas naturalmente! Com sistema exclusivo criado e patenteado por nossos desenvolvedores para encontrar a altura perfeita do seu travesseiro. Com o seu topo anatômico o GS11 foi desenvolvido para proporcionar o encaixe anatômico perfeito, mantém o alinhamento da coluna e relaxa a musculatura. A matéria prima do GS11 foi pensada para dar o suporte ideal para a cabeça e o pescoço, mantendo a altura necessária sem perder o conforto.&quot;,\n  &quot;brand&quot;: {\n    &quot;@type&quot;: &quot;Brand&quot;,\n    &quot;name&quot;: &quot;GoodSpine&quot;\n  },\n  &quot;offers&quot;: {\n    &quot;@type&quot;: &quot;Offer&quot;,\n    &quot;url&quot;: &quot;https://travesseiro.goodspine.com.br/&quot;,\n    &quot;priceCurrency&quot;: &quot;BRL&quot;,\n    &quot;price&quot;: &quot;739&quot;,\n    &quot;availability&quot;: &quot;https://schema.org/InStock&quot;,\n    &quot;itemCondition&quot;: &quot;https://schema.org/NewCondition&quot;\n  },\n  &quot;aggregateRating&quot;: {\n    &quot;@type&quot;: &quot;AggregateRating&quot;,\n    &quot;ratingValue&quot;: &quot;5&quot;,\n    &quot;bestRating&quot;: &quot;5&quot;,\n    &quot;worstRating&quot;: &quot;1&quot;,\n    &quot;ratingCount&quot;: &quot;1&quot;,\n    &quot;reviewCount&quot;: &quot;1&quot;\n  },\n  &quot;review&quot;: {\n    &quot;@type&quot;: &quot;Review&quot;,\n    &quot;name&quot;: &quot;99.98% de satisfação&quot;,\n    &quot;reviewBody&quot;: &quot;O único travesseiro anatômico que me adaptei. A minha coluna vertebral que se encaixa perfeitamente e minhas noites de sono melhoraram 90%.&quot;,\n    &quot;reviewRating&quot;: {\n      &quot;@type&quot;: &quot;Rating&quot;,\n      &quot;ratingValue&quot;: &quot;5&quot;,\n      &quot;bestRating&quot;: &quot;5&quot;,\n      &quot;worstRating&quot;: &quot;1&quot;\n    },\n    &quot;datePublished&quot;: &quot;2023-10-21&quot;,\n    &quot;author&quot;: {&quot;@type&quot;: &quot;Person&quot;, &quot;name&quot;: &quot;Lidiane J.&quot;}\n  }\n}\n</script>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=655f2f56&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(74)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "655f2f56",
  "27069b64"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(43).default})


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-selo-associacao-brasileira.df9b3e1.jpg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-whatsapp.4ca23b4.svg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-instagram.2208bb8.svg";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-footer-frete-gratis.69ecd6b.svg";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-footer-garantia-2-anos.363a44d.svg";

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC42NjY2MjYiIHk9IjAuNSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iMjAiIGZpbGw9IiM5OUE0QkQiLz4KPHBhdGggZD0iTTIwLjY2NjYgOC41ODMwMUwxMC45MTY2IDEyLjkxNjNWMTkuNDE2M0MxMC45MTY2IDI1LjQyODggMTUuMDc2NiAzMS4wNTEzIDIwLjY2NjYgMzIuNDE2M0MyNi4yNTY2IDMxLjA1MTMgMzAuNDE2NiAyNS40Mjg4IDMwLjQxNjYgMTkuNDE2M1YxMi45MTYzTDIwLjY2NjYgOC41ODMwMVpNMTguNSAyNS45MTYzTDE0LjE2NjYgMjEuNTgzTDE1LjY5NDEgMjAuMDU1NUwxOC41IDIyLjg1MDVMMjUuNjM5MSAxNS43MTEzTDI3LjE2NjYgMTcuMjQ5N0wxOC41IDI1LjkxNjNaIiBmaWxsPSIjMDAxMTM3Ii8+Cjwvc3ZnPgo="

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-footer-selo-associacao-brasileira.0b87f03.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("9dce88f2", content, true, context)
};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MiA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxIDAuMzc1QzkuODg2MzMgMC4zNzUgMC44NzUgOS4zODYzMyAwLjg3NSAyMC41QzAuODc1IDMxLjYxMzcgOS44ODYzMyA0MC42MjUgMjEgNDAuNjI1QzMyLjExMzcgNDAuNjI1IDQxLjEyNSAzMS42MTM3IDQxLjEyNSAyMC41QzQxLjEyNSA5LjM4NjMzIDMyLjExMzcgMC4zNzUgMjEgMC4zNzVaTTI3LjQ3MzIgMjAuODFMMTcuNjYyMyAyNy45NDhDMTcuNjA4NSAyNy45ODY3IDE3LjU0NTEgMjguMDA5OCAxNy40NzkxIDI4LjAxNDdDMTcuNDEzIDI4LjAxOTcgMTcuMzQ2OSAyOC4wMDY0IDE3LjI4NzkgMjcuOTc2MkMxNy4yMjkgMjcuOTQ2IDE3LjE3OTUgMjcuOTAwMiAxNy4xNDQ5IDI3Ljg0MzdDMTcuMTEwMyAyNy43ODcyIDE3LjA5MTkgMjcuNzIyMyAxNy4wOTE4IDI3LjY1NjFWMTMuMzg4OUMxNy4wOTE2IDEzLjMyMjUgMTcuMTA5NyAxMy4yNTc0IDE3LjE0NDMgMTMuMjAwN0MxNy4xNzg4IDEzLjE0NCAxNy4yMjg0IDEzLjA5OCAxNy4yODc0IDEzLjA2NzhDMTcuMzQ2NSAxMy4wMzc1IDE3LjQxMjggMTMuMDI0MyAxNy40NzkgMTMuMDI5NEMxNy41NDUxIDEzLjAzNDUgMTcuNjA4NiAxMy4wNTc5IDE3LjY2MjMgMTMuMDk2OUwyNy40NzMyIDIwLjIzMDVDMjcuNTE5NiAyMC4yNjMyIDI3LjU1NzQgMjAuMzA2NyAyNy41ODM1IDIwLjM1NzFDMjcuNjA5NiAyMC40MDc1IDI3LjYyMzIgMjAuNDYzNCAyNy42MjMyIDIwLjUyMDJDMjcuNjIzMiAyMC41NzcgMjcuNjA5NiAyMC42MzI5IDI3LjU4MzUgMjAuNjgzM0MyNy41NTc0IDIwLjczMzggMjcuNTE5NiAyMC43NzcyIDI3LjQ3MzIgMjAuODFaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowVideo_vue_vue_type_style_index_0_id_3a3ffa54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowVideo_vue_vue_type_style_index_0_id_3a3ffa54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowVideo_vue_vue_type_style_index_0_id_3a3ffa54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowVideo_vue_vue_type_style_index_0_id_3a3ffa54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowVideo_vue_vue_type_style_index_0_id_3a3ffa54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".play[data-v-3a3ffa54]{background-color:#111827;bottom:50px;right:200px}@media(max-width:1200px){.play[data-v-3a3ffa54]{right:100px}}@media(max-width:1023px){.logo-play[data-v-3a3ffa54]{max-width:32px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 55 */
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
/* 56 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iMzAiIGZpbGw9IiNGRUNBQ0EiLz4KPHBhdGggZD0iTTMwIDExLjY2NjdDMjkuMTE1OSAxMS42NjY3IDI4LjI2ODEgMTIuMDE3OSAyNy42NDI5IDEyLjY0MzFDMjcuMDE3OCAxMy4yNjgyIDI2LjY2NjYgMTQuMTE2IDI2LjY2NjYgMTUuMDAwMUMyNi42NjY2IDE2Ljg1MDEgMjguMTUgMTguMzMzNCAzMCAxOC4zMzM0QzMxLjg1IDE4LjMzMzQgMzMuMzMzMyAxNi44NTAxIDMzLjMzMzMgMTUuMDAwMUMzMy4zMzMzIDE0LjExNiAzMi45ODIxIDEzLjI2ODIgMzIuMzU3IDEyLjY0MzFDMzEuNzMxOSAxMi4wMTc5IDMwLjg4NCAxMS42NjY3IDMwIDExLjY2NjdaTTI2LjY2NjYgMjAuMDAwMUMyNi4yMTY2IDIwLjAwMDEgMjUuODMzMyAyMC4xODM0IDI1LjUxNjYgMjAuNDY2N0gyNS41TDE2LjY2NjYgMjkuMzE2N0wxOS4wMzMzIDMxLjY2NjdMMjUgMjUuNjgzNFY0Ni42NjY3SDI4LjMzMzNWMzUuMDAwMUgzMS42NjY2VjQ2LjY2NjdIMzVWMjUuNjgzNEw0MC45NjY2IDMxLjY2NjdMNDMuMzMzMyAyOS4zMTY3TDM0LjUgMjAuNDY2N0MzNC4xNjY2IDIwLjE4MzQgMzMuNzgzMyAyMC4wMDAxIDMzLjMzMzMgMjAuMDAwMSIgZmlsbD0iI0I5MUMxQyIvPgo8L3N2Zz4K"

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-stress.7659401.svg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("572c15ae", content, true, context)
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2862e338", content, true, context)
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("dc490ed2", content, true, context)
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(126);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("17e378ea", content, true, context)
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("d3dbda46", content, true, context)
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(139);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("30b63d7a", content, true, context)
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExIDIxQzE2LjUyMjggMjEgMjEgMTYuNTIyOCAyMSAxMUMyMSA1LjQ3NzE1IDE2LjUyMjggMSAxMSAxQzUuNDc3MTUgMSAxIDUuNDc3MTUgMSAxMUMxIDE2LjUyMjggNS40NzcxNSAyMSAxMSAyMVoiIHN0cm9rZT0iI0Q4QjRGRSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0xMC41IDZIMTEiIHN0cm9rZT0iI0Q4QjRGRSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTkgMTBIMTFWMTUiIHN0cm9rZT0iI0Q4QjRGRSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkgMTVIMTMiIHN0cm9rZT0iI0Q4QjRGRSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNights_vue_vue_type_style_index_0_id_6bb66385_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNights_vue_vue_type_style_index_0_id_6bb66385_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNights_vue_vue_type_style_index_0_id_6bb66385_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNights_vue_vue_type_style_index_0_id_6bb66385_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNights_vue_vue_type_style_index_0_id_6bb66385_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 66 */
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-moon.c329120.svg";

/***/ }),
/* 68 */
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("e2e0334c", content, true, context)
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDggMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik03LjM4OTI2IDYuNzc4NTFMMS43MTU4OCAxMS43NDE5QzEuMDQ4MzYgMTIuMzI3NyAzLjc0MDU4ZS0wNyAxMS44NTE2IDMuMzUxOTllLTA3IDEwLjk2MjdMLTkuODcxOGUtMDggMS4wMzU4Qy0wLjAwMDE3MDY4OSAwLjgzNjg0MyAwLjA1NzAxMDUgMC42NDIwNTUgMC4xNjQ2OTYgMC40NzQ3NjFDMC4yNzIzODIgMC4zMDc0NjcgMC40MjYwMDcgMC4xNzQ3NiAwLjYwNzE3NCAwLjA5MjUzMDJDMC43ODgzNDIgMC4wMTAzMDA2IDAuOTg5MzcyIC0wLjAxNzk2NjMgMS4xODYxOSAwLjAxMTExNjlDMS4zODMwMSAwLjA0MDIwMDIgMS41NjcyNyAwLjEyNTM5OSAxLjcxNjkyIDAuMjU2NTExTDcuMzg4MjIgNS4yMTk5NEM3LjQ5OTM4IDUuMzE3MDggNy41ODg0NyA1LjQzNjg3IDcuNjQ5NTIgNS41NzEyOEM3LjcxMDU2IDUuNzA1NjkgNy43NDIxNCA1Ljg1MTYxIDcuNzQyMTQgNS45OTkyM0M3Ljc0MjE0IDYuMTQ2ODUgNy43MTA1NiA2LjI5Mjc2IDcuNjQ5NTIgNi40MjcxN0M3LjU4ODQ3IDYuNTYxNTggNy40OTkzOCA2LjY4MTM4IDcuMzg4MjIgNi43Nzg1MUw3LjM4OTI2IDYuNzc4NTFaIiBmaWxsPSIjNkI3MjgwIi8+Cjwvc3ZnPgo="

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_id_5426fd66_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_id_5426fd66_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_id_5426fd66_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_id_5426fd66_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_id_5426fd66_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".icon[data-v-5426fd66]{margin-right:.75rem}.icon.rotate[data-v-5426fd66]{transform:rotate(90deg);transition:.2s}.fade-enter-active[data-v-5426fd66]{transition:opacity .25s}.fade-leave-active[data-v-5426fd66]{transition:opacity .15s}.fade-enter[data-v-5426fd66],.fade-leave-to[data-v-5426fd66]{opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("9abe8888", content, true, context)
};

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_655f2f56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_655f2f56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_655f2f56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_655f2f56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_655f2f56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "footer[data-v-655f2f56]{color:#fff}li[data-v-655f2f56]{margin-bottom:1rem}li[data-v-655f2f56]:last-child{margin-bottom:2.75rem}@media (min-width:640px){li a[data-v-655f2f56]{font-size:1.125rem;line-height:1.75rem}}li a[data-v-655f2f56]:hover{text-decoration-line:underline}.link-social[data-v-655f2f56]{align-items:center;border-radius:9999px;display:flex;justify-content:center;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:768px){.link-social[data-v-655f2f56]:hover{--tw-scale-x:1.05;--tw-scale-y:1.05;--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.05) scaleY(1.05);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}}.link-social[data-v-655f2f56]{border:4px solid #4d608c;height:80px;width:80px}.link-social img[data-v-655f2f56]{width:40px}@media(max-width:768px){.link-social[data-v-655f2f56]{height:60px;width:60px}.link-social img[data-v-655f2f56]{width:30px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 76 */
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

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShowVideo.vue?vue&type=template&id=3a3ffa54&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<button id=\"ga-video-button-hero\" class=\"xl:absolute my-2 inline-flex items-center play cursor-pointer opacity-80 hover:opacity-100 rounded-full px-4 py-2 lg:px-5 lg:py-3 transition duration-200\" data-v-3a3ffa54><img"+(_vm._ssrAttr("src",__webpack_require__(52)))+" alt=\"Ícone ilustrativo\" class=\"mr-2 logo-play\" data-v-3a3ffa54> <div class=\"text-left\" data-v-3a3ffa54><p class=\"inter-700 text-xs lg:text-lg leading-tight text-white\" data-v-3a3ffa54>Veja o vídeo</p> <p class=\"inter-700 text-xs leading-tight text-gray-400 lg:uppercase\" data-v-3a3ffa54>1 min</p></div></button> "),_c('modal',{attrs:{"name":"video","width":_vm.video.width,"height":_vm.video.height}},[_c('iframe',{attrs:{"width":_vm.video.width,"height":_vm.video.height,"src":"https://www.youtube.com/embed/peXxD2zLK-g","title":"YouTube video player","frameborder":"0","allow":"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen":""}})])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ShowVideo.vue?vue&type=template&id=3a3ffa54&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShowVideo.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ShowVideovue_type_script_lang_js_ = ({
  data: () => {
    return {
      video: {
        width: 560,
        height: 315
      }
    };
  },
  methods: {
    show() {
      this.$modal.show('video');
    }
  },
  beforeMount() {
    const screenWidth = screen.width;
    if (screenWidth < 700) {
      this.video.width = 420;
      this.video.height = 236;
    }
    if (screenWidth < 475) {
      this.video.width = 320;
      this.video.height = 180;
    }
  }
});
// CONCATENATED MODULE: ./components/ShowVideo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShowVideovue_type_script_lang_js_ = (ShowVideovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/ShowVideo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShowVideovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3a3ffa54",
  "1c8b3e76"
  
)

/* harmony default export */ var ShowVideo = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DropDown.vue?vue&type=template&id=5426fd66&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mb-4"},[_vm._ssrNode("<button class=\"bg-gray-100 px-4 py-3 flex items-center rounded-lg w-full text-left\" data-v-5426fd66>","</button>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(70)))+" alt=\"Ícone ilustrativo\""+(_vm._ssrClass("icon",{'rotate': _vm.show}))+" data-v-5426fd66> "),_vm._t("question")],2),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.show)?_c('p',{staticClass:"px-4 py-3 text-md text-gray-800"},[_vm._t("answer")],2):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DropDown.vue?vue&type=template&id=5426fd66&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DropDown.vue?vue&type=script&lang=js&
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

/* harmony default export */ var DropDownvue_type_script_lang_js_ = ({
  data: function () {
    return {
      show: false
    };
  }
});
// CONCATENATED MODULE: ./components/DropDown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DropDownvue_type_script_lang_js_ = (DropDownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/DropDown.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(71)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DropDownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5426fd66",
  "574dfaba"
  
)

/* harmony default export */ var DropDown = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.47df42a.png";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/star-no-fill.9f5d1f2.svg";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-frete.30b8e60.svg";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-garantia.3e7c1b7.svg";

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MCA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iMC41IiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIyMCIgZmlsbD0iI0U1RTdFQiIvPgo8cGF0aCBkPSJNMjAgOC41ODMyNUwxMC4yNSAxMi45MTY2VjE5LjQxNjZDMTAuMjUgMjUuNDI5MSAxNC40MSAzMS4wNTE2IDIwIDMyLjQxNjZDMjUuNTkgMzEuMDUxNiAyOS43NSAyNS40MjkxIDI5Ljc1IDE5LjQxNjZWMTIuOTE2NkwyMCA4LjU4MzI1Wk0xNy44MzMzIDI1LjkxNjZMMTMuNSAyMS41ODMzTDE1LjAyNzUgMjAuMDU1OEwxNy44MzMzIDIyLjg1MDhMMjQuOTcyNSAxNS43MTE2TDI2LjUgMTcuMjQ5OUwxNy44MzMzIDI1LjkxNjZaIiBmaWxsPSIjNkI3MjgwIi8+Cjwvc3ZnPgo="

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-selo.f0fbf46.png";

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_16e28856_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_16e28856_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_16e28856_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_16e28856_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_16e28856_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(87);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(88);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hero[data-v-16e28856]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");max-width:1920px}@media(min-width:767px){.hero[data-v-16e28856]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}}@media(max-width:600px){.selos[data-v-16e28856]{flex-basis:140px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hero.3c139af.png";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hero.c19f4ce.jpg";

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_0c046c96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_0c046c96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_0c046c96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_0c046c96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_0c046c96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sticky-nav .navigation[data-v-0c046c96]{animation:slide-data-v-0c046c96 .8s forwards;box-shadow:0 5px 10px 0 rgba(0,0,0,.1);left:0;position:fixed;top:0;width:100vw;z-index:100}@keyframes slide-data-v-0c046c96{0%{transform:translateY(-100%)}to{transform:translateY(0)}}.navigation[data-v-0c046c96]{background:#fff;border-bottom:1px solid #d1d5db;border-top:1px solid #d1d5db;height:75px}.navigation ul[data-v-0c046c96]{-ms-overflow-style:none;scrollbar-width:none}.navigation ul[data-v-0c046c96]::-webkit-scrollbar{display:none}.link[data-v-0c046c96]{--tw-text-opacity:1;color:#374151;color:rgba(55,65,81,var(--tw-text-opacity));font-size:1.125rem;line-height:1.75rem;margin-right:1rem;white-space:nowrap}.link.is-active[data-v-0c046c96],.link[data-v-0c046c96]:hover{color:#0e7fc1}@media(max-width:1279px){.shadow-effect[data-v-0c046c96]:after,.shadow-effect[data-v-0c046c96]:before{content:\"\";height:104%;position:absolute;top:-2%;width:40px}.shadow-effect[data-v-0c046c96]:after{background-image:-webkit-gradient(90deg,hsla(0,0%,100%,0),#fff);background-image:linear-gradient(90deg,hsla(0,0%,100%,0),#fff);right:-2px}.shadow-effect[data-v-0c046c96]:before{background-image:-webkit-gradient(-90deg,hsla(0,0%,100%,0),#fff);background-image:linear-gradient(-90deg,hsla(0,0%,100%,0),#fff);left:-2px}.shadow-effect .empty[data-v-0c046c96]{flex-basis:40px;flex-shrink:0;height:1px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-generico.26b919a.jpg";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-brain.3b3c308.svg";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-product.bf34656.jpg";

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iMzAiIGZpbGw9IiM4NkVGQUMiLz4KPHBhdGggZD0iTTMxLjY2NjYgMTVDMjUuMzMzMyAxNSAyMC4zMzMzIDE5LjgzMzMgMTkuOTk5OSAyNi4xNjY3TDE2LjgzMzMgMzAuMzMzM0MxNi40OTk5IDMwLjgzMzMgMTYuODMzMyAzMS42NjY3IDE3LjQ5OTkgMzEuNjY2N0gxOS45OTk5VjM2LjY2NjdDMTkuOTk5OSAzOC41IDIxLjQ5OTkgNDAgMjMuMzMzMyA0MEgyNC45OTk5VjQ1SDM2LjY2NjZWMzcuMTY2N0M0MC42NjY2IDM1LjMzMzMgNDMuMzMzMyAzMS4zMzMzIDQzLjMzMzMgMjYuNjY2N0M0My4zMzMzIDIwLjE2NjcgMzguMTY2NiAxNSAzMS42NjY2IDE1WiIgZmlsbD0iIzE1ODAzRCIvPgo8L3N2Zz4K"

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iMzAiIGZpbGw9IiM4NkVGQUMiLz4KPHBhdGggZD0iTTMwIDQ2LjY2NjhDMzkuMjA0OCA0Ni42NjY4IDQ2LjY2NjcgMzkuMjA0OSA0Ni42NjY3IDMwLjAwMDJDNDYuNjY2NyAyMC43OTU0IDM5LjIwNDggMTMuMzMzNSAzMCAxMy4zMzM1QzIwLjc5NTMgMTMuMzMzNSAxMy4zMzM0IDIwLjc5NTQgMTMuMzMzNCAzMC4wMDAyQzEzLjMzMzQgMzkuMjA0OSAyMC43OTUzIDQ2LjY2NjggMzAgNDYuNjY2OFoiIHN0cm9rZT0iIzE2NjUzNCIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTIzLjMzMzQgMjUuMDgzMlYyNC45MTY1IiBzdHJva2U9IiMxNjY1MzQiIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0zNi42NjY2IDI1LjA4MzJWMjQuOTE2NSIgc3Ryb2tlPSIjMTY2NTM0IiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzYuNjY2NyAzMy4zMzM1QzM1LjgzMzQgMzUuODMzNSAzMy42ODM0IDM4LjMzMzUgMzAgMzguMzMzNUMyNi4zMTY3IDM4LjMzMzUgMjQuMTY2NyAzNS44MzM1IDIzLjMzMzQgMzMuMzMzNSIgc3Ryb2tlPSIjMTY2NTM0IiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-height.0a7d406.svg";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-zzz.0edbea9.svg";

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iMzAiIGZpbGw9IiM4NkVGQUMiLz4KPHBhdGggZD0iTTMwIDExLjY2NjdDMjkuMTE1OSAxMS42NjY3IDI4LjI2ODEgMTIuMDE3OSAyNy42NDI5IDEyLjY0MzFDMjcuMDE3OCAxMy4yNjgyIDI2LjY2NjYgMTQuMTE2IDI2LjY2NjYgMTUuMDAwMUMyNi42NjY2IDE2Ljg1MDEgMjguMTUgMTguMzMzNCAzMCAxOC4zMzM0QzMxLjg1IDE4LjMzMzQgMzMuMzMzMyAxNi44NTAxIDMzLjMzMzMgMTUuMDAwMUMzMy4zMzMzIDE0LjExNiAzMi45ODIxIDEzLjI2ODIgMzIuMzU3IDEyLjY0MzFDMzEuNzMxOSAxMi4wMTc5IDMwLjg4NCAxMS42NjY3IDMwIDExLjY2NjdaTTI2LjY2NjYgMjAuMDAwMUMyNi4yMTY2IDIwLjAwMDEgMjUuODMzMyAyMC4xODM0IDI1LjUxNjYgMjAuNDY2N0gyNS41TDE2LjY2NjYgMjkuMzE2N0wxOS4wMzMzIDMxLjY2NjdMMjUgMjUuNjgzNFY0Ni42NjY3SDI4LjMzMzNWMzUuMDAwMUgzMS42NjY2VjQ2LjY2NjdIMzVWMjUuNjgzNEw0MC45NjY2IDMxLjY2NjdMNDMuMzMzMyAyOS4zMTY3TDM0LjUgMjAuNDY2N0MzNC4xNjY2IDIwLjE4MzQgMzMuNzgzMyAyMC4wMDAxIDMzLjMzMzMgMjAuMDAwMSIgZmlsbD0iIzE1ODAzRCIvPgo8L3N2Zz4K"

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iMzAiIGZpbGw9IiM4NkVGQUMiLz4KPHBhdGggZD0iTTI4LjMzMzMgNDEuNjY2N0MzNS42OTcxIDQxLjY2NjcgNDEuNjY2NyAzNS42OTcxIDQxLjY2NjcgMjguMzMzM0M0MS42NjY3IDIwLjk2OTUgMzUuNjk3MSAxNSAyOC4zMzMzIDE1QzIwLjk2OTUgMTUgMTUgMjAuOTY5NSAxNSAyOC4zMzMzQzE1IDM1LjY5NzEgMjAuOTY5NSA0MS42NjY3IDI4LjMzMzMgNDEuNjY2N1oiIHN0cm9rZT0iIzE1ODAzRCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQ1IDQ1TDM3Ljc1IDM3Ljc1IiBzdHJva2U9IiMxNTgwM0QiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/GS11.3d81a54.jpg";

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MelhoreSeuSono_vue_vue_type_style_index_0_id_e54cf85e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MelhoreSeuSono_vue_vue_type_style_index_0_id_e54cf85e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MelhoreSeuSono_vue_vue_type_style_index_0_id_e54cf85e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MelhoreSeuSono_vue_vue_type_style_index_0_id_e54cf85e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MelhoreSeuSono_vue_vue_type_style_index_0_id_e54cf85e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".title[data-v-e54cf85e]{max-width:1200px}.card[data-v-e54cf85e]{background:linear-gradient(120.38deg,#fef2f2 3.62%,#fecaca 97.3%);border-radius:.5rem;margin-bottom:1.25rem;padding:.75rem;width:100%}@media (min-width:1024px){.card[data-v-e54cf85e]{margin-left:.5rem;margin-right:.5rem}}@media(min-width:425px){.card[data-v-e54cf85e]{max-width:48%}}@media(min-width:1024px){.card[data-v-e54cf85e]{max-width:212px}}.card.green[data-v-e54cf85e]{background:linear-gradient(120.38deg,#dcfce7 3.62%,#86efac 97.3%)}.picture[data-v-e54cf85e]{border-radius:.75rem;width:100%}@media (min-width:640px){.picture[data-v-e54cf85e]{max-height:320px;width:auto}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iLTAuMDAwNDg4MjgxIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIxMCIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8cGF0aCBkPSJNMjAgMjguOTk5NVYxMC45OTk1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTYgMTMuOTk5NUwyMCA5Ljk5OTUxTDI0IDEzLjk5OTUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNiAyNS45OTk1TDIwIDI5Ljk5OTVMMjQgMjUuOTk5NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjAiIHkxPSItMC4wMDA0ODgyODEiIHgyPSI0MCIgeTI9IjM5Ljk5OTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzU2QTVENCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwRTdGQzEiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-conforto.67eefee.png";

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iLTAuMDAwNDg4MjgxIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSIxMCIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8cGF0aCBkPSJNMTcuNjQ2NCAyNS4zNTMxTDE4IDI1LjcwNjZMMTguMzUzNiAyNS4zNTMxTDI2LjM1MzYgMTcuMzUzMUwyNi43MDU5IDE3LjAwMDhMMjYuMzU0OCAxNi42NDcyTDI0Ljk0NDggMTUuMjI3MkwyNC41OTEzIDE0Ljg3MTJMMjQuMjM2NCAxNS4yMjZMMTcuOTk5MyAyMS40NjMxTDE1Ljc2MjkgMTkuMjM1M0wxNS40MDkzIDE4Ljg4MzFMMTUuMDU2NCAxOS4yMzZMMTMuNjQ2NCAyMC42NDZMMTMuMjkyOSAyMC45OTk1TDEzLjY0NjQgMjEuMzUzMUwxNy42NDY0IDI1LjM1MzFaTTExLjUgMTMuMzI0NEwyMCA5LjU0NjY3TDI4LjUgMTMuMzI0NFYxOC45OTk1QzI4LjUgMjQuMjk2OCAyNC44NTc0IDI5LjIzMyAyMCAzMC40ODRDMTUuMTQyNiAyOS4yMzMgMTEuNSAyNC4yOTY4IDExLjUgMTguOTk5NVYxMy4zMjQ0WiIgZmlsbD0id2hpdGUiIHN0cm9rZT0id2hpdGUiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjAiIHkxPSItMC4wMDA0ODgyODEiIHgyPSI0MCIgeTI9IjM5Ljk5OTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzU2QTVENCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwRTdGQzEiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./travesseiro-01.jpg": 107,
	"./travesseiro-02.jpg": 108,
	"./travesseiro-03.jpg": 109
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 106;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/travesseiro-01.de6899e.jpg";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/travesseiro-02.76dd214.jpg";

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/travesseiro-03.75efb5c.jpg";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-garantia-anos.30535ec.svg";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-alturas.9559b3f.svg";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-cruz.ae0f9d3.svg";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-ipms.d3cffca.svg";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-qualidade-garantida.e0215d6.svg";

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-brasil.2503c7a.jpg";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-anti-acaro.7660c44.svg";

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OTravesseiro_vue_vue_type_style_index_0_id_4877b961_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OTravesseiro_vue_vue_type_style_index_0_id_4877b961_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OTravesseiro_vue_vue_type_style_index_0_id_4877b961_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OTravesseiro_vue_vue_type_style_index_0_id_4877b961_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OTravesseiro_vue_vue_type_style_index_0_id_4877b961_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".feature-card[data-v-4877b961]{align-items:center;display:flex;flex-basis:25%;margin-bottom:1rem;margin-top:1rem;padding-left:.5rem;padding-right:.5rem;width:280px}.feature-card p[data-v-4877b961]{max-width:180px}@media(max-width:1300px){.feature-card[data-v-4877b961]{flex-basis:33.3333333333%}}@media(max-width:1023px){.feature-card[data-v-4877b961]{flex-basis:50%}}.button-hover[data-v-4877b961]{align-items:flex-start;border-radius:.75rem;display:flex;margin-bottom:.75rem;max-width:42rem;padding:1rem .75rem;text-align:left}@media (min-width:768px){.button-hover[data-v-4877b961]{margin-bottom:1.5rem;padding:1.5rem}}.button-hover.is-active[data-v-4877b961]{background-color:#e7f2f9}.image-rotate[data-v-4877b961]{background:#e5e7eb;border-radius:1.5rem;bottom:0;height:100%;position:absolute;right:0;transform:rotate(5deg);width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FalamSobreAGente_vue_vue_type_style_index_0_id_9866e690_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FalamSobreAGente_vue_vue_type_style_index_0_id_9866e690_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FalamSobreAGente_vue_vue_type_style_index_0_id_9866e690_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FalamSobreAGente_vue_vue_type_style_index_0_id_9866e690_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FalamSobreAGente_vue_vue_type_style_index_0_id_9866e690_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card[data-v-9866e690]{--tw-bg-opacity:1;--tw-text-opacity:1;--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:.75rem;box-shadow:0 0 transparent,0 0 transparent,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);color:#000;color:rgba(0,0,0,var(--tw-text-opacity));margin-bottom:1.5rem;padding:1rem 1rem 3rem;position:relative}@media (min-width:1024px){.card[data-v-9866e690]{margin-bottom:0}}@media (min-width:1280px){.card[data-v-9866e690]{padding:1.5rem 1.5rem 4rem}}.card[data-v-9866e690]{flex-basis:33%}.card-description[data-v-9866e690]{font-size:.875rem;line-height:1.25rem;margin-bottom:.5rem;margin-top:.5rem}@media (min-width:768px){.card-description[data-v-9866e690]{font-size:1rem;line-height:1.5rem}}.card-data[data-v-9866e690]{--tw-text-opacity:1;color:#9ca3af;color:rgba(156,163,175,var(--tw-text-opacity));font-size:.75rem;line-height:1rem;position:absolute}@media (min-width:768px){.card-data[data-v-9866e690]{font-size:1rem;line-height:1.5rem}}.card-data[data-v-9866e690]{bottom:25px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQzIiBoZWlnaHQ9IjYzIiB2aWV3Qm94PSIwIDAgMjQzIDYzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTI5LjE4MyAzNC41MDYxQzIyOC4yMDQgNjguNDQ0OSAyNDMgMCAyNDMgMEMyNDMgMCAyMTAuNTYyIDQ3LjIyNzYgMTMwLjMyMSAxNS44Mzk4QzQ2LjY2NTEgLTIxLjQ5MjkgMCAzOS41OTUyIDAgMzkuNTk1MkMwIDM5LjU5NTIgMzAuMTYxNiAwLjU2NzMwMyAxMjkuMTgzIDM0LjUwNjFaIiBmaWxsPSIjMDAxQzVCIi8+CjxwYXRoIGQ9Ik04Ni41MDExIDUzLjczODJDMTM3LjE1IDczLjUzNTggMTY1LjAzNSA1NS40MzUxIDE2NS4wMzUgNTUuNDM1MUMxNjUuMDM1IDU1LjQzNTEgMTQ1LjExNyA2MC4yNjMxIDEwMS4yOTcgNDAuMTYyMkM1Ny40Nzc5IDIwLjA2MTQgMTQuMjI3NyA0NS44MTgzIDE0LjIyNzcgNDUuODE4M0MxNC4yMjc3IDQ1LjgxODMgMzUuODUyNCAzMy45NDA2IDg2LjUwMTEgNTMuNzM4MloiIGZpbGw9IiMwRTdGQzEiLz4KPC9zdmc+Cg=="

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-frete-gratis.27b0057.svg";

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-garantia-2-anos.95264b4.svg";

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcng9IjIwIiBmaWxsPSIjQzNERkYwIi8+CjxwYXRoIGQ9Ik0yMC41IDguNTgzNUwxMC43NSAxMi45MTY4VjE5LjQxNjhDMTAuNzUgMjUuNDI5MyAxNC45MSAzMS4wNTE4IDIwLjUgMzIuNDE2OEMyNi4wOSAzMS4wNTE4IDMwLjI1IDI1LjQyOTMgMzAuMjUgMTkuNDE2OFYxMi45MTY4TDIwLjUgOC41ODM1Wk0xOC4zMzMzIDI1LjkxNjhMMTQgMjEuNTgzNUwxNS41Mjc1IDIwLjA1NkwxOC4zMzMzIDIyLjg1MUwyNS40NzI1IDE1LjcxMThMMjcgMTcuMjUwMkwxOC4zMzMzIDI1LjkxNjhaIiBmaWxsPSIjM0I4MkY2Ii8+Cjwvc3ZnPgo="

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OpcoesCompra_vue_vue_type_style_index_0_id_8db51bca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OpcoesCompra_vue_vue_type_style_index_0_id_8db51bca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OpcoesCompra_vue_vue_type_style_index_0_id_8db51bca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OpcoesCompra_vue_vue_type_style_index_0_id_8db51bca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OpcoesCompra_vue_vue_type_style_index_0_id_8db51bca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(37);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card[data-v-8db51bca]{--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:1rem;margin-bottom:6rem;margin-left:auto;margin-right:auto;max-width:100%;padding-top:5rem;position:relative;text-align:center}@media (min-width:1024px){.card[data-v-8db51bca]{margin-bottom:0;margin-left:0;margin-right:0}}.card[data-v-8db51bca]{box-shadow:0 25px 50px -12px rgba(0,0,0,.25);width:365px}@media(max-width:380px){.card[data-v-8db51bca]{width:300px}.card .price[data-v-8db51bca]{font-size:70px!important}}.card-image>img[data-v-8db51bca]{left:calc(50% - 106.5px);position:absolute;top:-130px}@media(max-width:1279px){.card-image>img[data-v-8db51bca]{left:calc(50% - 60px);max-width:120px;top:-40px}}.card-image.second[data-v-8db51bca],.card-image.third[data-v-8db51bca]{position:absolute;top:0;width:100%}.card-image.second[data-v-8db51bca]{left:-38px}.card-image.second>img[data-v-8db51bca]:first-child{left:calc(50% - 125.26px)}.card-image.second>img[data-v-8db51bca]:nth-child(2){left:calc(50% + 4.74px)}@media(max-width:1279px){.card-image.second[data-v-8db51bca]{left:0}.card-image.second>img[data-v-8db51bca]:first-child{left:calc(50% - 100px)}.card-image.second>img[data-v-8db51bca]:nth-child(2){left:calc(50% - 30px)}}.card-image.third[data-v-8db51bca]{left:-60px}.card-image.third>img[data-v-8db51bca]:first-child{left:calc(50% - 145.26px)}.card-image.third>img[data-v-8db51bca]:nth-child(2){left:calc(50% - 43.19px)}.card-image.third>img[data-v-8db51bca]:nth-child(3){left:calc(50% + 58.87px)}@media(max-width:1279px){.card-image.third[data-v-8db51bca]{left:-15px}.card-image.third>img[data-v-8db51bca]:first-child{left:calc(50% - 100px)}.card-image.third>img[data-v-8db51bca]:nth-child(2){left:calc(50% - 40px)}.card-image.third>img[data-v-8db51bca]:nth-child(3){left:calc(50% + 22px)}}.card.approved[data-v-8db51bca]:after{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 50%;background-size:cover;content:\"\";height:75px;margin-right:-37.5px;position:absolute;right:100%;top:0;width:75px}@media(max-width:480px){.card.approved[data-v-8db51bca]:after{background-size:50px;height:50px;top:20px;width:50px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-logo-effect.e0a67e6.svg";

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/perfil-roberto.9ff0740.png";

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/perfil-gisele.fdaee72.png";

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuemSomos_vue_vue_type_style_index_0_id_018c1ca8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuemSomos_vue_vue_type_style_index_0_id_018c1ca8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuemSomos_vue_vue_type_style_index_0_id_018c1ca8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuemSomos_vue_vue_type_style_index_0_id_018c1ca8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuemSomos_vue_vue_type_style_index_0_id_018c1ca8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".box-grid[data-v-018c1ca8]{flex-basis:50%}.logo-effect[data-v-018c1ca8]{bottom:58px;right:-215px}@media(max-width:600px){.logo-effect[data-v-018c1ca8]{max-width:140px;right:-80px}}@media(max-width:400px){.logo-effect[data-v-018c1ca8]{bottom:28px;max-width:120px;right:-80px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/news-r7.0f72b12.jpg";

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-r7.055015d.jpg";

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/news-globo.0fd3fab.jpg";

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-globo.bd743ce.jpg";

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/news-g1.73725a1.jpg";

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-g1.5c8b7a6.jpg";

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Midia_vue_vue_type_style_index_0_id_a2c9b226_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Midia_vue_vue_type_style_index_0_id_a2c9b226_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Midia_vue_vue_type_style_index_0_id_a2c9b226_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Midia_vue_vue_type_style_index_0_id_a2c9b226_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Midia_vue_vue_type_style_index_0_id_a2c9b226_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".video-card[data-v-a2c9b226]{margin:20px 0;width:100%}@media(min-width:426px){.video-card[data-v-a2c9b226]{margin-left:14px;margin-right:14px;max-width:334px}}.video-card .thumbnail[data-v-a2c9b226]{background-position:50%;background-repeat:no-repeat;background-size:cover;border-radius:.5rem;display:block;height:180px;margin-bottom:1rem;position:relative;width:100%}@media(min-width:426px){.video-card .thumbnail[data-v-a2c9b226]{height:211px}}.video-card .icon-play[data-v-a2c9b226]{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:76px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNightsModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNightsModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNightsModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNightsModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestNightsModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 141 */
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
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_0_id_a4c1048e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_0_id_a4c1048e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_0_id_a4c1048e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_0_id_a4c1048e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FAQ_vue_vue_type_style_index_0_id_a4c1048e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".box-grid>div[data-v-a4c1048e]{flex-basis:49%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-whatsapp.7572241.png";

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsApp_vue_vue_type_style_index_0_id_4284681c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsApp_vue_vue_type_style_index_0_id_4284681c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsApp_vue_vue_type_style_index_0_id_4284681c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsApp_vue_vue_type_style_index_0_id_4284681c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WhatsApp_vue_vue_type_style_index_0_id_4284681c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a[data-v-4284681c]{bottom:30px;display:inline-block;max-width:60px;position:fixed;right:30px;transition:all .2s;z-index:99}@media(max-width:768px){a[data-v-4284681c]{bottom:20px;max-width:40px;right:20px}}@media(min-width:768px){a[data-v-4284681c]{opacity:.9}a[data-v-4284681c]:hover{opacity:1;transform:scale(1.08)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 147 */,
/* 148 */,
/* 149 */
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
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OTravesseiro.vue?vue&type=template&id=4877b961&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container py-5 pb-16 md:pb-28"},[_vm._ssrNode("<div class=\"mx-auto md:mx-0 md:max-w-full\" data-v-4877b961><h2 class=\"text-3xl md:text-6xl text-gray-800 mb-4\" data-v-4877b961>O travesseiro certo pode mudar sua vida</h2> <p class=\"text-gray-500 text-xl mb-12\" data-v-4877b961>Através de sua tecnologia inovadora o travesseiro GS11 ajuda a resolver estes problemas naturalmente</p></div> "),_vm._ssrNode("<div class=\"flex justify-between flex-col-reverse lg:flex-row\" data-v-4877b961>","</div>",[_vm._ssrNode("<div class=\"lg:mr-24\" data-v-4877b961>","</div>",[_c('a',{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"button-hover",class:{'is-active': _vm.index==1},attrs:{"href":"#tecnologia"},on:{"mouseover":function($event){return _vm.changeImage(1)}}},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(103)))+" alt=\"Ícone ilustrativo\" class=\"mr-3 md:mr-6\" data-v-4877b961> <div data-v-4877b961><h3 class=\"inter-500 mb-2 text-xl sm:leading-none md:text-2xl\" data-v-4877b961>Sistema de medição do travesseiro ideal</h3> <p class=\"text-gray-500 text-sm md:text-md\" data-v-4877b961>Sistema exclusivo criado e patenteado por nossos desenvolvedores para encontrar a altura perfeita do seu travesseiro</p></div>")]),_vm._ssrNode(" "),_c('a',{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"button-hover",class:{'is-active': _vm.index==2},attrs:{"href":"#tecnologia"},on:{"mouseover":function($event){return _vm.changeImage(2)}}},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(104)))+" alt=\"Ícone ilustrativo\" class=\"mr-3 md:mr-6\" data-v-4877b961> <div data-v-4877b961><h3 class=\"inter-500 mb-2 text-xl sm:leading-none md:text-2xl\" data-v-4877b961>Conforto e ergonomia juntos</h3> <p class=\"text-gray-500 text-sm md:text-md\" data-v-4877b961>Com o seu topo anatômico o GS11 foi desenvolvido para proporcionar o encaixe anatômico perfeito, mantém o alinhamento da coluna e relaxa a musculatura</p></div>")]),_vm._ssrNode(" "),_c('a',{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"button-hover",class:{'is-active': _vm.index==3},attrs:{"href":"#tecnologia"},on:{"mouseover":function($event){return _vm.changeImage(3)}}},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(105)))+" alt=\"Ícone ilustrativo\" class=\"mr-3 md:mr-6\" data-v-4877b961> <div data-v-4877b961><h3 class=\"inter-500 mb-2 text-xl sm:leading-none md:text-2xl\" data-v-4877b961>Matéria prima da mais alta qualidade</h3> <p class=\"text-gray-500 text-sm md:text-md\" data-v-4877b961>A matéria prima do GS11 foi pensada para dar o suporte ideal para a cabeça e o pescoço, mantendo a altura necessária sem perder o conforto</p></div>")])],2),_vm._ssrNode(" <div id=\"tecnologia\" class=\"mb-14 pt-4\" data-v-4877b961><div class=\"relative\" style=\"max-width: 580px;\" data-v-4877b961><div data-v-4877b961>"+((_vm.index)?("<img"+(_vm._ssrAttr("src",__webpack_require__(106)("./travesseiro-0" + _vm.index + ".jpg")))+" alt=\"O travesseiro\" class=\"max-w-full max-w-2xl rounded-3xl relative z-10\" data-v-4877b961>"):"<!---->")+"</div> <div class=\"image-rotate\" data-v-4877b961></div></div></div>")],2),_vm._ssrNode(" <div class=\"flex flex-col sm:flex-row flex-wrap mt-8 justify-center md:justify-start items-center\" data-v-4877b961><div class=\"feature-card\" data-v-4877b961><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt=\"Ícone ilustrativo\" class=\"mr-4\" data-v-4877b961> <p data-v-4877b961>Selo da Associação Brasileira de Quiropraxia</p></div> <div class=\"feature-card\" data-v-4877b961><img"+(_vm._ssrAttr("src",__webpack_require__(110)))+" alt=\"Ícone ilustrativo\" class=\"mr-4\" data-v-4877b961> <p data-v-4877b961>Garantia de 1 ano</p></div> <div class=\"feature-card\" data-v-4877b961><img"+(_vm._ssrAttr("src",__webpack_require__(111)))+" alt=\"Ícone ilustrativo\" class=\"mr-4\" data-v-4877b961> <p data-v-4877b961>Único no mundo com possibilidade de 11 alturas</p></div> <div class=\"feature-card\" data-v-4877b961><img"+(_vm._ssrAttr("src",__webpack_require__(112)))+" alt=\"Ícone ilustrativo\" class=\"mr-4\" data-v-4877b961> <p data-v-4877b961>Desenvolvido por especialistas da coluna vertebral</p></div> <div class=\"feature-card\" data-v-4877b961><img"+(_vm._ssrAttr("src",__webpack_require__(113)))+" alt=\"Ícone ilustrativo\" class=\"mr-4\" data-v-4877b961> <p data-v-4877b961>Sistema de medição da altura ideal IPMS</p></div> <div class=\"feature-card\" data-v-4877b961><img"+(_vm._ssrAttr("src",__webpack_require__(114)))+" alt=\"Ícone ilustrativo\" class=\"mr-4\" data-v-4877b961> <p data-v-4877b961>Matéria-Prima de alta qualidade</p></div> <div class=\"feature-card\" data-v-4877b961><img"+(_vm._ssrAttr("src",__webpack_require__(115)))+" alt=\"Ícone ilustrativo\" class=\"mr-4\" data-v-4877b961> <p data-v-4877b961>100% Feito no Brasil</p></div> <div class=\"feature-card\" data-v-4877b961><img"+(_vm._ssrAttr("src",__webpack_require__(116)))+" alt=\"Ícone ilustrativo\" class=\"mr-4\" data-v-4877b961> <p data-v-4877b961>Anti ácaro</p></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OTravesseiro.vue?vue&type=template&id=4877b961&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OTravesseiro.vue?vue&type=script&lang=js&
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
//
//
//
//

/* harmony default export */ var OTravesseirovue_type_script_lang_js_ = ({
  data: function () {
    return {
      index: 1
    };
  },
  methods: {
    changeImage: function (index) {
      this.index = index;
    }
  }
});
// CONCATENATED MODULE: ./components/OTravesseiro.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OTravesseirovue_type_script_lang_js_ = (OTravesseirovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/OTravesseiro.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(117)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OTravesseirovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4877b961",
  "26beea26"
  
)

/* harmony default export */ var OTravesseiro = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 151 */
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
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hero.vue?vue&type=template&id=16e28856&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hero pt-9 pb-12 relative text-center sm:text-left bg-cover lg:bg-auto bg-no-repeat bg-right-top mx-auto"},[_vm._ssrNode("<div class=\"container\" data-v-16e28856>","</div>",[_vm._ssrNode("<div data-v-16e28856><img"+(_vm._ssrAttr("src",__webpack_require__(79)))+" alt=\"GoodSpine Anatomic Support Logo\" class=\"mx-auto sm:mx-0\" data-v-16e28856></div> <div class=\"mt-5 sm:mt-8 mb-7 flex items-center justify-center sm:justify-start flex-wrap\" data-v-16e28856><p class=\"inter-700 text-gray-500 text-xl\" data-v-16e28856>GS11</p> <div class=\"mx-2 sm:mx-5 flex items-center\" data-v-16e28856><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mx-1\" data-v-16e28856> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mx-1\" data-v-16e28856> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mx-1\" data-v-16e28856> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mx-1\" data-v-16e28856> <img"+(_vm._ssrAttr("src",__webpack_require__(80)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mx-1\" data-v-16e28856></div> <p class=\"text-sm sm:text-md text-gray-500 inter-400 \" data-v-16e28856>99.98% de satisfação</p></div> <h1 class=\"max-w-lg mx-auto sm:mx-0 text-3xl sm:text-5xl inter-700 sm:leading-tight text-gray-800 px-4 sm:px-0\" data-v-16e28856>O Único Travesseiro Anatômico do Mundo com 11 alturas</h1> "),_vm._ssrNode("<div class=\"mt-12 mb-6 xl:mb-12 flex items-center sm:items-start lg:items-center flex-col lg:flex-row\" data-v-16e28856>","</div>",[_vm._ssrNode("<div class=\"flex flex-col sm:flex-row items-center\" data-v-16e28856>","</div>",[_c('a',{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"bg-blue-600 inter-700 md:hover:bg-blue-700 text-white py-4 px-5 transition duration-100 rounded-md text-xl",attrs:{"href":"#opcoes-de-compra","id":"ga-anchor-button-hero"}},[_vm._ssrNode("Eu Quero dormir melhor")]),_vm._ssrNode(" "),_c('a',{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll"}],staticClass:"inter-700 mt-4 mb-2 sm:my-4 mx-6 text-xl text-gray-800 md:hover:underline",attrs:{"href":"#melhore-seu-sono"}},[_vm._ssrNode("Como isso funciona?")])],2),_vm._ssrNode(" "),_c('ShowVideo')],2),_vm._ssrNode(" <div class=\"flex items-center justify-center sm:justify-start flex-wrap\" data-v-16e28856><div class=\"flex text-left sm:mx-0 sm:items-center my-2 sm:my-0 mx-2 sm:mr-6 selos\" data-v-16e28856><img"+(_vm._ssrAttr("src",__webpack_require__(81)))+" alt=\"Ícone ilustrativo\" class=\"mr-2\" data-v-16e28856> <div data-v-16e28856><p class=\"inter-400 text-md leading-tight\" data-v-16e28856>Frete SP</p> <p class=\"inter-700 text-md leading-tight\" data-v-16e28856>GRÁTIS</p></div></div> <div class=\"flex text-left sm:mx-0 sm:items-center my-2 sm:my-0 mx-2 sm:mr-6 selos\" data-v-16e28856><img"+(_vm._ssrAttr("src",__webpack_require__(82)))+" alt=\"Ícone ilustrativo\" class=\"mr-2\" data-v-16e28856> <div data-v-16e28856><p class=\"inter-400 text-md leading-tight\" data-v-16e28856>GARANTIA</p> <p class=\"inter-700 text-md leading-tight\" data-v-16e28856>1 ANO</p></div></div> <div class=\"flex text-left sm:mx-0 sm:items-center my-2 sm:my-0 mx-2 sm:mr-6 selos\" data-v-16e28856><img"+(_vm._ssrAttr("src",__webpack_require__(83)))+" alt=\"Ícone ilustrativo\" class=\"mr-2\" data-v-16e28856> <div data-v-16e28856><p class=\"inter-400 text-md leading-tight\" data-v-16e28856>COMPRA</p> <p class=\"inter-700 text-md leading-tight\" data-v-16e28856>SEGURA</p></div></div> <div class=\"flex text-left sm:mx-0 sm:items-center my-2 sm:my-0 mx-2 sm:mr-6 selos\" data-v-16e28856><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt=\"Ícone ilustrativo\" class=\"mr-2\" data-v-16e28856> <div data-v-16e28856><p class=\"inter-400 text-md leading-tight\" data-v-16e28856>SELO</p> <p class=\"inter-700 text-md leading-tight\" data-v-16e28856>APROVADO</p></div></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Hero.vue?vue&type=template&id=16e28856&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Hero.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "16e28856",
  "06aee683"
  
)

/* harmony default export */ var Hero = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShowVideo: __webpack_require__(77).default})


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MelhoreSeuSono.vue?vue&type=template&id=e54cf85e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container pt-20 pb-10 md:pb-28"},[_vm._ssrNode("<h2 class=\"title text-gray-800 text-2xl sm:text-3xl md:text-5xl leading-tight md:leading-snug text-center mb-20 md:mb-28\" data-v-e54cf85e>Você já parou para pensar que o seu travesseiro pode ser o causador desses problemas?</h2> <div class=\"mb-16 md:mb-24\" data-v-e54cf85e><div class=\"flex items-center mb-6 flex-wrap mx-auto md:mx-0 md:max-w-full\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(91)))+" alt=\"Ícone ilustrativo\" data-v-e54cf85e> <h3 class=\"mx-4 text-3xl md:text-5xl text-gray-700\" data-v-e54cf85e>Genérico</h3> <p class=\"text-gray-500 text-xl md:text-2xl mt-2 lg:mx-2\" data-v-e54cf85e>Um travesseiro comum não leva em consideração os diferentes biotipos</p></div> <div class=\"flex flex-wrap justify-between lg:justify-center\" style=\"max-width: 920px;\" data-v-e54cf85e><div class=\"card\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(41)))+" alt=\"Ícone ilustrativo\" data-v-e54cf85e> <p class=\"text-red-800 text-xl mt-6\" data-v-e54cf85e>Dor de cabeça</p></div> <div class=\"card\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(41)))+" alt=\"Ícone ilustrativo\" data-v-e54cf85e> <p class=\"text-red-800 text-xl mt-6\" data-v-e54cf85e>Dor no pescoço</p></div> <div class=\"card\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt=\"Ícone ilustrativo\" data-v-e54cf85e> <p class=\"text-red-800 text-xl mt-6\" data-v-e54cf85e>Dores nas costas</p></div> <div class=\"card\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(41)))+" alt=\"Ícone ilustrativo\" data-v-e54cf85e> <p class=\"text-red-800 text-xl mt-6\" data-v-e54cf85e>Torcicolo</p></div> <div class=\"card\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(57)))+" alt=\"Ícone ilustrativo\" data-v-e54cf85e> <p class=\"text-red-800 text-xl mt-6\" data-v-e54cf85e>Estresse</p></div> <div class=\"card\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(92)))+" alt=\"Ícone ilustrativo\" data-v-e54cf85e> <p class=\"text-red-800 text-xl mt-6\" data-v-e54cf85e>Falta de foco</p></div> <div class=\"card\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(56)))+" alt=\"Ícone ilustrativo\" data-v-e54cf85e> <p class=\"text-red-800 text-xl mt-6\" data-v-e54cf85e>Cansaço excessivo</p></div> <div class=\"card\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(57)))+" alt=\"Ícone ilustrativo\" data-v-e54cf85e> <p class=\"text-red-800 text-xl mt-6\" data-v-e54cf85e>Irritabilidade</p></div></div></div> <div data-v-e54cf85e><div class=\"flex items-center mb-6 flex-wrap mx-auto md:mx-0 md:max-w-full\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(93)))+" alt=\"Ícone ilustrativo\" data-v-e54cf85e> <h3 class=\"mx-4 text-3xl md:text-5xl text-gray-700\" data-v-e54cf85e>\n        GS11\n        <img"+(_vm._ssrAttr("src",__webpack_require__(37)))+" alt=\"Ícone ilustrativo\" class=\"inline ml-1 -mt-2 sm:hidden\" style=\"max-width: 28px;\" data-v-e54cf85e></h3> <div class=\"flex items-center\" data-v-e54cf85e><p class=\"text-gray-500 text-xl lg:text-2xl mt-2 lg:mx-2\" style=\"max-width: 689px;\" data-v-e54cf85e>\n          Um travesseiro desenvolvido por especialistas da coluna vertebral que se encaixa perfeitamente em qualquer biotipo\n        </p> <img"+(_vm._ssrAttr("src",__webpack_require__(37)))+" alt=\"Ícone ilustrativo\" class=\"hidden sm:inline ml-4\" data-v-e54cf85e></div></div> <div class=\"flex sm:items-start flex-col-reverse lg:flex-row\" data-v-e54cf85e><div class=\"flex flex-wrap justify-between lg:justify-center md:justify-top\" style=\"max-width: 684px;\" data-v-e54cf85e><div class=\"card green\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(94)))+" alt=\"Ícone ilustrativo\" data-v-e54cf85e> <p class=\"text-green-800 text-xl mt-6\" data-v-e54cf85e>Sem dores</p></div> <div class=\"card green\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(95)))+" alt=\"Ícone ilustrativo\" data-v-e54cf85e> <p class=\"text-green-800 text-xl mt-6\" data-v-e54cf85e>Qualidade de vida</p></div> <div class=\"card green\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(96)))+" alt=\"Ícone ilustrativo\" data-v-e54cf85e> <p class=\"text-green-800 text-xl mt-6\" data-v-e54cf85e>Regulagem de 11 alturas</p></div> <div class=\"card green\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(97)))+" alt=\"Ícone ilustrativo\" data-v-e54cf85e> <p class=\"text-green-800 text-xl mt-6\" data-v-e54cf85e>Melhora do sono</p></div> <div class=\"card green\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(98)))+" alt=\"Ícone ilustrativo\" data-v-e54cf85e> <p class=\"text-green-800 text-xl mt-6\" data-v-e54cf85e>Maior disposição</p></div> <div class=\"card green\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(99)))+" alt=\"Ícone ilustrativo\" data-v-e54cf85e> <p class=\"text-green-800 text-xl mt-6\" data-v-e54cf85e>Mais concentração</p></div></div> <div class=\"lg:ml-2 mb-10 lg:md:0\" data-v-e54cf85e><img"+(_vm._ssrAttr("src",__webpack_require__(100)))+" alt=\"Quiropraxista realizando uma massagem\" class=\"picture\" data-v-e54cf85e></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MelhoreSeuSono.vue?vue&type=template&id=e54cf85e&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/MelhoreSeuSono.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(101)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e54cf85e",
  "11601f8a"
  
)

/* harmony default export */ var MelhoreSeuSono = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FalamSobreAGente.vue?vue&type=template&id=9866e690&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-white",staticStyle:{"background":"linear-gradient(97.82deg, #60A5FA 0.97%, #2563EB 98.87%)"}},[_vm._ssrNode("<div class=\"container pt-20\" data-v-9866e690><div class=\"flex items-center justify-center\" data-v-9866e690><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"Ícone de estrela preenchida\" class=\"mx-1\" data-v-9866e690> <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"Ícone de estrela preenchida\" class=\"mx-1\" data-v-9866e690> <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"Ícone de estrela preenchida\" class=\"mx-1\" data-v-9866e690> <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"Ícone de estrela preenchida\" class=\"mx-1\" data-v-9866e690> <img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt=\"Ícone de estrela preenchida\" class=\"mx-1\" data-v-9866e690></div> <h2 class=\"mt-8 mb-4 text-3xl md:text-6xl text-center lg:px-16\" data-v-9866e690>Veja o que estão falando sobre a gente</h2> <p class=\"text-blue-100 mx-auto text-xl md:text-2xl text-center\" style=\"max-width: 730px;\" data-v-9866e690>O travesseiro anatômico da GoodSpine é o mais indicado por especialistas da coluna vertebral por inúmeras razões.</p></div> "),_c('Carousel',{staticClass:"mt-20 mb-14"}),_vm._ssrNode(" <div class=\"container pb-12\" data-v-9866e690><div class=\"flex items-center justify-center\" data-v-9866e690><p class=\"text-2xl mt-4 text-center\" data-v-9866e690>Mais de 1000 clientes satisfeitos +</p></div> <div class=\"flex mt-10 justify-center flex-col lg:flex-row lg:transform lg:translate-y-40 lg:-mt-32\" data-v-9866e690><div class=\"card\" data-v-9866e690><div class=\"flex mb-2\" data-v-9866e690><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mr-1\" style=\"max-width: 16px;\" data-v-9866e690> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mr-1\" style=\"max-width: 16px;\" data-v-9866e690> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mr-1\" style=\"max-width: 16px;\" data-v-9866e690> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mr-1\" style=\"max-width: 16px;\" data-v-9866e690> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mr-1\" style=\"max-width: 16px;\" data-v-9866e690></div> <p class=\"text-xl mb-3\" data-v-9866e690>Paciente com dor cervical</p> <p class=\"card-description\" data-v-9866e690>Há 1 ano, com diagnóstico de protusão discal, contratura muscular e dor irradiada para as escápulas. Começou o tratamento com a Quiropraxia, teve uma melhora de 80% em apenas 5 sessões, porém os 20% de incômodo persistiam. Perguntei sobre o travesseiro e descobri que a paciente não apenas dormia de bruços como usava um travesseiro muito alto para o biotipo dela. Ela pegou um GS11, montou na altura adequada, e logo no terceiro dia relatou remissão total da dor.</p></div> <div class=\"card lg:mx-4\" data-v-9866e690><div class=\"flex mb-2\" data-v-9866e690><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mr-1\" style=\"max-width: 16px;\" data-v-9866e690> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mr-1\" style=\"max-width: 16px;\" data-v-9866e690> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mr-1\" style=\"max-width: 16px;\" data-v-9866e690> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mr-1\" style=\"max-width: 16px;\" data-v-9866e690> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mr-1\" style=\"max-width: 16px;\" data-v-9866e690></div> <p class=\"text-xl mb-3\" data-v-9866e690>Paciente de 45 anos</p> <p class=\"card-description\" data-v-9866e690>1,95, 130 Kilos com dores no pescoço e costas principalmente a noite. Começou tratamento, com melhora pífia. Investigando melhor descobri que ele, não gostava muito de usar travesseiro e usava apenas um bem pequeno. Mostrei pra ele que o ombro dele era muito grande pra usar um travesseiro baixo demais, e que aquilo sem sombra de dúvidas podia ser uma das razões da dor cervical dele. A esposa comprou o travesseiro GS11, montou na altura certa e em poucas semanas paciente relatou melhora de 80% das dores. Não acordava mais a noite devido às mesmas.</p></div> <div class=\"card\" data-v-9866e690><div class=\"flex mb-2\" data-v-9866e690><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mr-1\" style=\"max-width: 16px;\" data-v-9866e690> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mr-1\" style=\"max-width: 16px;\" data-v-9866e690> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mr-1\" style=\"max-width: 16px;\" data-v-9866e690> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mr-1\" style=\"max-width: 16px;\" data-v-9866e690> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Estrela preenchida (Avaliação)\" class=\"mr-1\" style=\"max-width: 16px;\" data-v-9866e690></div> <p class=\"text-xl mb-3\" data-v-9866e690>Paciente mulher</p> <p class=\"card-description\" data-v-9866e690>Com dores nas costas, dor de cabeça e dor no pescoço começamos o tratamento, porém estava faltando mais estímulos adequados foi quando ela decidiu trocar o colchão, o travesseiro, e ainda comprou um rolinho cervical. Após algumas sessões, e a somatória de fatores positivos pra coluna dela, ela começou a se ver livre de uma dor de cabeça que a acompanhava por anos. hoje está quase zerada, me fala que está 90% melhor.</p></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FalamSobreAGente.vue?vue&type=template&id=9866e690&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/FalamSobreAGente.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(119)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9866e690",
  "226cd245"
  
)

/* harmony default export */ var FalamSobreAGente = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OpcoesCompra.vue?vue&type=template&id=8db51bca&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container pt-8 mt-20 lg:pt-20 lg:mt-40"},[_vm._ssrNode("<div class=\"text-center mb-7\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(121)))+" alt=\"Ícone ilustrativo\" class=\"mb-14 mx-auto\" data-v-8db51bca> <h2 class=\"text-gray-800 mb-4 text-3xl md:text-4xl lg:text-5xl\" data-v-8db51bca>Escolha a Melhor Opção pra Você</h2> <p class=\"text-gray-500 text-xl lg:text-2xl\" data-v-8db51bca>Restam Apenas 17 Unidades com Frete Grátis! Garanta já o Seu!</p></div> <div data-v-8db51bca><div class=\"flex justify-center items-center flex-wrap\" data-v-8db51bca><div class=\"flex items-center mx-1 mb-4\" style=\"flex-basis:150px;\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(122)))+" alt class=\"mr-2\" data-v-8db51bca> <div data-v-8db51bca><p class=\"leading-none mb-1\" data-v-8db51bca>Frete SP</p> <p class=\"text-gray-800 inter-700 leading-none\" data-v-8db51bca>GRÁTIS</p></div></div> <div class=\"flex items-center mx-1 mb-4\" style=\"flex-basis:150px;\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(123)))+" alt class=\"mr-2\" data-v-8db51bca> <div data-v-8db51bca><p class=\"leading-none mb-1\" data-v-8db51bca>GARANTIA</p> <p class=\"text-gray-800 inter-700 leading-none\" data-v-8db51bca>1 ANO</p></div></div> <div class=\"flex items-center mx-1 mb-4\" style=\"flex-basis:150px;\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(124)))+" alt class=\"mr-2\" data-v-8db51bca> <div data-v-8db51bca><p class=\"leading-none mb-1\" data-v-8db51bca>COMPRA</p> <p class=\"text-gray-800 inter-700 leading-none\" data-v-8db51bca>SEGURA</p></div></div> <div class=\"flex items-center mx-1 mb-4\" style=\"flex-basis:150px;\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt class=\"mr-2\" style=\"width:40px;\" data-v-8db51bca> <div data-v-8db51bca><p class=\"leading-none mb-1\" data-v-8db51bca>SELO</p> <p class=\"text-gray-800 inter-700 leading-none\" data-v-8db51bca>APROVADO</p></div></div></div></div> <div class=\"flex mt-20 justify-center item-center flex-col lg:flex-row lg:items-end lg:transform lg:translate-y-40 lg:mt-0\" data-v-8db51bca><div class=\"card\" data-v-8db51bca><div class=\"card-image\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt=\"Imagem do travesseiro\" data-v-8db51bca></div> <p class=\"mb-3 text-lg text-gray-900\" data-v-8db51bca>1 TRAVESSEIRO GS11</p> <span class=\"rounded-full text-sm bg-gray-800 text-white mb-6 inline-block py-1 px-3\" data-v-8db51bca>DESCONTO 10% A\n        VISTA</span> <p class=\"text-gray-800\" data-v-8db51bca>POR 10x DE</p> <div class=\"flex items-start justify-center pr-7 pl-2 mb-1\" data-v-8db51bca><p class=\"text-gray-400 text-2xl leading-none mt-2 mr-1 inter-500\" data-v-8db51bca>R$</p> <p class=\"inter-700 text-gray-800 mb-1 leading-none price\" style=\"font-size: 80px;\" data-v-8db51bca>73,90</p></div> <p class=\"text-xl text-gray-400 uppercase inter-700\" data-v-8db51bca>ou 665,10 à vista</p> <p class=\"text-sm text-gray-400 uppercase mb-6 inter-700\" data-v-8db51bca>(no boleto)</p> <div class=\"bg-gray-100 px-7 py-5 lg:rounded-bl-2xl\" data-v-8db51bca><ul class=\"mb-5\" data-v-8db51bca><li class=\"flex items-center mb-3\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt=\"Imagem do travesseiro\" class=\"mr-3\" data-v-8db51bca> <p class=\"inter-500 text-gray-500 text-base\" data-v-8db51bca>1 GS11</p></li> <li class=\"flex items-center mb-3\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt=\"Imagem do travesseiro\" class=\"mr-3\" data-v-8db51bca> <p class=\"inter-500 text-gray-500 text-base\" data-v-8db51bca>1 ano de garantia</p></li> <li class=\"flex items-center\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt=\"Imagem do travesseiro\" class=\"mr-3\" data-v-8db51bca> <p class=\"inter-500 text-gray-500 text-base\" data-v-8db51bca>Melhor sono garantido</p></li></ul> <a href=\"https://loja.goodspine.com.br/travesseiro-anatomico-universal-good-spine-gs11\" target=\"_blank\" id=\"ga-cta-button-1x\" class=\"rounded-lg block uppercase bg-gray-800 hover:bg-gray-900 transition duration-200 leading-none text-white text-2xl p-4\" data-v-8db51bca>Comprar</a></div></div> <div class=\"card approved\" data-v-8db51bca><div class=\"card-image second\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt=\"Imagem do travesseiro\" data-v-8db51bca> <img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt=\"Imagem do travesseiro\" data-v-8db51bca></div> <p class=\"mb-3 text-lg text-gray-900\" data-v-8db51bca>2 X TRAVESSEIROS GS11</p> <span class=\"rounded-full text-sm bg-green-500 text-white mb-6 inline-block py-1 px-3\" data-v-8db51bca>10% DE DESCONTO</span> <p class=\"text-gray-800\" data-v-8db51bca>POR 10x DE</p> <div class=\"flex items-start justify-center pr-7 pl-2 mb-1\" data-v-8db51bca><p class=\"text-gray-400 text-2xl leading-none mt-2 mr-1 inter-500\" data-v-8db51bca>R$</p> <p class=\"inter-700 text-gray-800 mb-1 leading-none price\" style=\"font-size: 80px;\" data-v-8db51bca>133,00</p></div> <p class=\"text-xl text-gray-400 uppercase inter-700\" data-v-8db51bca>ou 1.197,00 à vista</p> <p class=\"text-sm text-gray-400 uppercase mb-6 inter-700\" data-v-8db51bca>(no boleto) <br data-v-8db51bca>com 20% de desconto</p> <div class=\"bg-gray-100 px-7 py-5\" data-v-8db51bca><ul class=\"mb-5\" data-v-8db51bca><li class=\"flex items-center mb-3\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt=\"Imagem do travesseiro\" class=\"mr-3\" data-v-8db51bca> <p class=\"inter-500 text-gray-500 text-base\" data-v-8db51bca>2 GS11</p></li> <li class=\"flex items-center mb-3\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt=\"Imagem do travesseiro\" class=\"mr-3\" data-v-8db51bca> <p class=\"inter-500 text-gray-500 text-base\" data-v-8db51bca>1 ano de garantia</p></li> <li class=\"flex items-center mb-3\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt=\"Imagem do travesseiro\" class=\"mr-3\" data-v-8db51bca> <p class=\"inter-500 text-gray-500 text-base\" data-v-8db51bca>Desconto de 20% à vista</p></li> <li class=\"flex items-center\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt=\"Imagem do travesseiro\" class=\"mr-3\" data-v-8db51bca> <p class=\"inter-500 text-gray-500 text-base\" data-v-8db51bca>Melhor sono garantido</p></li></ul> <a href=\"https://loja.goodspine.com.br/travesseiro-anatomico-universal-good-spine-gs11\" target=\"_blank\" id=\"ga-cta-button-2x\" class=\"rounded-lg block uppercase bg-green-500 hover:bg-green-600 transition duration-200 leading-none text-white text-2xl p-4\" data-v-8db51bca>Comprar</a></div></div> <div class=\"card\" data-v-8db51bca><div class=\"card-image third\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt=\"Imagem do travesseiro\" data-v-8db51bca> <img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt=\"Imagem do travesseiro\" data-v-8db51bca> <img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt=\"Imagem do travesseiro\" data-v-8db51bca></div> <p class=\"mb-3 text-lg text-gray-900\" data-v-8db51bca>3 X TRAVESSEIROS GS11</p> <span class=\"rounded-full text-sm bg-purple-500 text-white mb-6 inline-block py-1 px-3\" data-v-8db51bca>15% DE DESCONTO</span> <p class=\"text-gray-800\" data-v-8db51bca>POR 10x DE</p> <div class=\"flex items-start justify-center pr-7 pl-2 mb-1\" data-v-8db51bca><p class=\"text-gray-400 text-2xl leading-none mt-2 mr-1 inter-500\" data-v-8db51bca>R$</p> <p class=\"inter-700 text-gray-800 mb-1 leading-none price\" style=\"font-size: 80px;\" data-v-8db51bca>188,44</p></div> <p class=\"text-xl text-gray-400 uppercase inter-700\" data-v-8db51bca>ou 1.696,00 à vista</p> <p class=\"text-sm text-gray-400 uppercase mb-6 inter-700\" data-v-8db51bca>(no boleto) <br data-v-8db51bca>com 25% de desconto</p> <div class=\"bg-gray-100 px-7 py-5 lg:rounded-br-2xl\" data-v-8db51bca><ul class=\"mb-5\" data-v-8db51bca><li class=\"flex items-center mb-3\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt=\"Imagem do travesseiro\" class=\"mr-3\" data-v-8db51bca> <p class=\"inter-500 text-gray-500 text-base\" data-v-8db51bca>3 GS11</p></li> <li class=\"flex items-center mb-3\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt=\"Imagem do travesseiro\" class=\"mr-3\" data-v-8db51bca> <p class=\"inter-500 text-gray-500 text-base\" data-v-8db51bca>1 ano de garantia</p></li> <li class=\"flex items-center mb-3\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt=\"Imagem do travesseiro\" class=\"mr-3\" data-v-8db51bca> <p class=\"inter-500 text-gray-500 text-base\" data-v-8db51bca>Desconto de 25% à vista</p></li> <li class=\"flex items-center\" data-v-8db51bca><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt=\"Imagem do travesseiro\" class=\"mr-3\" data-v-8db51bca> <p class=\"inter-500 text-gray-500 text-base\" data-v-8db51bca>Melhor sono garantido</p></li></ul> <a href=\"https://loja.goodspine.com.br/travesseiro-anatomico-universal-good-spine-gs11\" target=\"_blank\" id=\"ga-cta-button-3x\" class=\"rounded-lg block uppercase bg-gray-800 hover:bg-gray-900 transition duration-200 leading-none text-white text-2xl p-4\" data-v-8db51bca>Comprar</a></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OpcoesCompra.vue?vue&type=template&id=8db51bca&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/OpcoesCompra.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(125)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8db51bca",
  "798b6a3c"
  
)

/* harmony default export */ var OpcoesCompra = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/QuemSomos.vue?vue&type=template&id=018c1ca8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pt-10 lg:pt-48 pb-14",staticStyle:{"background":"linear-gradient(109.53deg, #0D72AE 5.14%, #56A5D4 94.13%)"}},[_vm._ssrNode("<div id=\"quem-somos\" class=\"container text-white pt-10\" data-v-018c1ca8><div class=\"flex flex-col lg:flex-row\" data-v-018c1ca8><div class=\"lg:pr-20 box-grid mb-6 lg:mb-0 lg:mr-4 lg:mt-32\" data-v-018c1ca8><h2 class=\"text-3xl lg:text-5xl mb-3 lg:mb-6\" data-v-018c1ca8>Quem Somos?</h2> <p class=\"text-lg md:text-xl\" data-v-018c1ca8>Quiropraxistas são a peça essencial no desenvolvimento de todos os produtos GoodSpine. Através desses profissionais conseguimos colocar o foco dos nossos produtos na saúde da coluna vertebral. Devido ao sucesso dessa parceria e da real eficácia dos produtos GoodSpine, somos a única empresa no Brasil com o Selo da Associação Brasileira de Quiropraxia em nossos produtos desde nossa fundação.</p></div> <div class=\"flex justify-center lg:justify-start box-grid\" data-v-018c1ca8><div class=\"mt-28 mr-4 relative\" data-v-018c1ca8><div class=\"relative\" data-v-018c1ca8><img"+(_vm._ssrAttr("src",__webpack_require__(127)))+" alt=\"Ícone ilustrativo\" class=\"absolute logo-effect\" data-v-018c1ca8> <img"+(_vm._ssrAttr("src",__webpack_require__(128)))+" alt=\"Foto de perfil do dr. Roberto S. Bleier Filho\" style=\"width: 265px;\" data-v-018c1ca8></div> <p class=\"z-10 relative ml-3 md:ml-5 inter-500 text-xl md:text-2xl -mt-2 md:-mt-6\" data-v-018c1ca8>Dr. Roberto S. Bleier Filho</p> <p class=\"ml-3 md:ml-6 text-sm sm:text-base\" style=\"max-width: 224px; color: #073E5F;\" data-v-018c1ca8>Quiropraxista ABQ 0108 CEO Fundador da GoodSpine</p></div> <div data-v-018c1ca8><img"+(_vm._ssrAttr("src",__webpack_require__(129)))+" alt=\"Foto de perfil da Gisele Gaia\" style=\"width: 190px;\" data-v-018c1ca8> <p class=\"z-10 relative ml-3 md:ml-6 inter-500 text-xl md:text-2xl -mt-2 md:-mt-6\" data-v-018c1ca8>Gisele Gaia</p> <p class=\"ml-3 md:ml-6 text-sm sm:text-base\" style=\"max-width: 224px; color: #073E5F;\" data-v-018c1ca8>Cofundadora e CCO GoodSpine</p></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/QuemSomos.vue?vue&type=template&id=018c1ca8&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/QuemSomos.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(130)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "018c1ca8",
  "867206e0"
  
)

/* harmony default export */ var QuemSomos = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Midia.vue?vue&type=template&id=a2c9b226&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container pt-14 pb-16 md:pt-28 md:pb-36"},[_vm._ssrNode("<div class=\"md:text-center\" data-v-a2c9b226><h2 class=\"text-gray-800 text-3xl md:text-5xl mb-8\" data-v-a2c9b226>Veja o que falamos na mídia</h2> <p class=\"text-xl mb-14 mx-auto\" style=\"max-width: 842px;\" data-v-a2c9b226>Veja entrevistas com Dr. Roberto Bleier filho, Quiropraxista, criador do Travesseiro Anatômico Universal GS11, em diferentes programas da Televisão brasileira, falando de Temas relacionados à saúde da coluna vertebral.</p></div> <div class=\"flex flex-col sm:flex-row items-center sm:items-start justify-center flex-wrap\" data-v-a2c9b226><div class=\"video-card\" data-v-a2c9b226><a href=\"https://noticias.r7.com/record-news/jornal-da-record-news/videos/especialista-fala-sobre-a-regulamentacao-da-quiropraxia-no-brasil-29072017\" target=\"_blank\" class=\"thumbnail\""+(_vm._ssrStyle(null,{'background-image': 'url(' + __webpack_require__(132) + ')'}, null))+" data-v-a2c9b226><img"+(_vm._ssrAttr("src",__webpack_require__(42)))+" alt=\"Ícone ilustrativo\" class=\"icon-play\" data-v-a2c9b226></a> <div class=\"flex items-start\" data-v-a2c9b226><img"+(_vm._ssrAttr("src",__webpack_require__(133)))+" alt=\"Logo R7\" class=\"mr-2.5 mt-1\" data-v-a2c9b226> <p class=\"text-lg text-gray-700\" data-v-a2c9b226>Especialista fala sobre a regulamentação da quiropraxia no Brasil</p></div></div> <div class=\"video-card\" data-v-a2c9b226><a href=\"https://g1.globo.com/google/amp/bemestar/noticia/2019/08/23/mania-de-estalar-o-pescoco-pode-causar-avc.ghtml\" target=\"_blank\" class=\"thumbnail\""+(_vm._ssrStyle(null,{'background-image': 'url(' + __webpack_require__(134) + ')'}, null))+" data-v-a2c9b226><img"+(_vm._ssrAttr("src",__webpack_require__(42)))+" alt=\"Ícone ilustrativo\" class=\"icon-play\" data-v-a2c9b226></a> <div class=\"flex items-start\" data-v-a2c9b226><img"+(_vm._ssrAttr("src",__webpack_require__(135)))+" alt=\"Logo R7\" class=\"mr-2.5 mt-1\" data-v-a2c9b226> <p class=\"text-lg text-gray-700\" data-v-a2c9b226>Especialistas explicam que 25% dos AVCs em pessoas menores de 40 anos acontecem por causa do estalo no pescoço</p></div></div> <div class=\"video-card\" data-v-a2c9b226><a href=\"https://globoplay.globo.com/v/5660729/\" target=\"_blank\" class=\"thumbnail\""+(_vm._ssrStyle(null,{'background-image': 'url(' + __webpack_require__(136) + ')'}, null))+" data-v-a2c9b226><img"+(_vm._ssrAttr("src",__webpack_require__(42)))+" alt=\"Ícone ilustrativo\" class=\"icon-play\" data-v-a2c9b226></a> <div class=\"flex items-start\" data-v-a2c9b226><img"+(_vm._ssrAttr("src",__webpack_require__(137)))+" alt=\"Logo R7\" class=\"mr-2.5 mt-1\" data-v-a2c9b226> <p class=\"text-lg text-gray-700\" data-v-a2c9b226>Quiropraxia ajuda a realinhar a coluna e evita dores</p></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Midia.vue?vue&type=template&id=a2c9b226&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Midia.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(138)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a2c9b226",
  "67e27127"
  
)

/* harmony default export */ var Midia = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FAQ.vue?vue&type=template&id=a4c1048e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pt-16 pb-16 md:pb-28"},[_vm._ssrNode("<div class=\"container\" data-v-a4c1048e>","</div>",[_vm._ssrNode("<h2 class=\"text-3xl md:text-5xl mb-6 md:mb-12 text-gray-800\" data-v-a4c1048e>Perguntas Frequentes</h2> "),_vm._ssrNode("<div class=\"flex box-grid justify-between flex-col lg:flex-row\" data-v-a4c1048e>","</div>",[_vm._ssrNode("<div data-v-a4c1048e>","</div>",[_c('DropDown',{scopedSlots:_vm._u([{key:"question",fn:function(){return [_c('h3',[_vm._v("O Travesseiro pode ser usado por todas as idades?")])]},proxy:true},{key:"answer",fn:function(){return [_vm._v("Sim, esse é um dos nossos diferenciais, ao contrário dos travesseiros comuns o GS11 foi pensado e desenvolvido para suprir as necessidades específicas de cada biotipo independente da idade.")]},proxy:true}])}),_vm._ssrNode(" "),_c('DropDown',{scopedSlots:_vm._u([{key:"question",fn:function(){return [_c('h3',[_vm._v("O produto possui garantia?")])]},proxy:true},{key:"answer",fn:function(){return [_vm._v("Acreditamos tanto na qualidade do nosso travesseiro que somos a única empresa do Brasil à oferecer um ano de garantia para qualquer problema relacionado à estrutura do travesseiro e a matéria prima que usamos.")]},proxy:true}])}),_vm._ssrNode(" "),_c('DropDown',{scopedSlots:_vm._u([{key:"question",fn:function(){return [_c('h3',[_vm._v("Qual o tempo de entrega?")])]},proxy:true},{key:"answer",fn:function(){return [_vm._v("Levamos seu GS11 ao correio em no máximo 24 horas.")]},proxy:true}])}),_vm._ssrNode(" "),_c('DropDown',{scopedSlots:_vm._u([{key:"question",fn:function(){return [_c('h3',[_vm._v("Grávidas podem usar?")])]},proxy:true},{key:"answer",fn:function(){return [_vm._v("Sim, as grávidas principalmente devem usar um travesseiro anatômico com a altura ideal para dar ainda mais o suporte para a cervical e manter o alinhamento da coluna vertebral.")]},proxy:true}])}),_vm._ssrNode(" "),_c('DropDown',{scopedSlots:_vm._u([{key:"question",fn:function(){return [_c('h3',[_vm._v("Posso lavar o travesseiro anatômico universal GoodSpine?")])]},proxy:true},{key:"answer",fn:function(){return [_vm._v("Junto com seu travesseiro GS11 você receberá uma capa, e somente ela pode ser lavada.")]},proxy:true}])})],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-a4c1048e>","</div>",[_c('DropDown',{scopedSlots:_vm._u([{key:"question",fn:function(){return [_c('h3',[_vm._v("Como funciona a devolução em 21 dias?")])]},proxy:true},{key:"answer",fn:function(){return [_vm._v("\n            Comprando o travesseiro universal Gs11, você terá 21 noites para testar, caso você  não se adapte, você pode nos enviar o travesseiro de volta. "),_c('br'),_c('br'),_vm._v("\n            Uma vez que recebermos o travesseiro de volta, lhe devolveremos o dinheiro deduzindo uma taxa administrativa de 10% do valor da sua compra. "),_c('br'),_c('br'),_vm._v("\n            Lembre-se, o frete de devolução é por conta do cliente.\n          ")]},proxy:true}])}),_vm._ssrNode(" "),_c('DropDown',{scopedSlots:_vm._u([{key:"question",fn:function(){return [_c('h3',[_vm._v("Qual a forma de pagamento?")])]},proxy:true},{key:"answer",fn:function(){return [_vm._v("O pagamento pode ser feito no cartão de credito em até 12 vezes, a vista o cliente pode conseguir descontos que variam de 10 a 25%.")]},proxy:true}])}),_vm._ssrNode(" "),_c('DropDown',{scopedSlots:_vm._u([{key:"question",fn:function(){return [_c('h3',[_vm._v("Vai funcionar pra mim?")])]},proxy:true},{key:"answer",fn:function(){return [_vm._v("O travesseiro não é um tratamento para a coluna, porém ele pode ajudar ou atrapalhar a nossa saúde. O diferencial do GS11 é justamente oferecer a possibilidade de suprir especificamente a necessidade de cada biotipo. Um travesseiro comum tem o mesmo tamanho, independente das diferenças obvias de corpo pra corpo.")]},proxy:true}])}),_vm._ssrNode(" "),_c('DropDown',{scopedSlots:_vm._u([{key:"question",fn:function(){return [_c('h3',[_vm._v("O site é seguro?")])]},proxy:true},{key:"answer",fn:function(){return [_vm._v("Este site é 100% protegido contra recursos de má intenção. Suas informações pessoais são totalmente sigilosas segundo a nossa Política de Privacidade e a entrega é garantida.")]},proxy:true}])})],2)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FAQ.vue?vue&type=template&id=a4c1048e&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/FAQ.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(142)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a4c1048e",
  "2dc46b9d"
  
)

/* harmony default export */ var FAQ = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DropDown: __webpack_require__(78).default})


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WhatsApp.vue?vue&type=template&id=4284681c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"https://api.whatsapp.com/send?phone=5511988520605","target":"_blank"}},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(144)))+" alt=\"Logo\" id=\"ga-whatsapp-fixed-page\" data-v-4284681c>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/WhatsApp.vue?vue&type=template&id=4284681c&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/WhatsApp.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(145)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4284681c",
  "da82a90a"
  
)

/* harmony default export */ var WhatsApp = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=b8334d7e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Hero'),_vm._ssrNode(" "),_c('Navigation'),_vm._ssrNode(" "),_c('MelhoreSeuSono',{attrs:{"id":"melhore-seu-sono"}}),_vm._ssrNode(" "),_c('OTravesseiro',{attrs:{"id":"sobre-GS11"}}),_vm._ssrNode(" "),_c('FalamSobreAGente',{attrs:{"id":"o-que-falam-sobre-a-gente"}}),_vm._ssrNode(" "),_c('OpcoesCompra',{attrs:{"id":"opcoes-de-compra"}}),_vm._ssrNode(" "),_c('QuemSomos'),_vm._ssrNode(" "),_c('Midia'),_vm._ssrNode(" "),_c('TestNights'),_vm._ssrNode(" "),_c('TestNightsModal'),_vm._ssrNode(" "),_c('FAQ',{attrs:{"id":"faq"}}),_vm._ssrNode(" "),_c('WhatsApp'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=b8334d7e&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1ac17852"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Hero: __webpack_require__(152).default,Navigation: __webpack_require__(149).default,MelhoreSeuSono: __webpack_require__(153).default,OTravesseiro: __webpack_require__(150).default,FalamSobreAGente: __webpack_require__(154).default,OpcoesCompra: __webpack_require__(155).default,QuemSomos: __webpack_require__(156).default,Midia: __webpack_require__(157).default,TestNights: __webpack_require__(76).default,TestNightsModal: __webpack_require__(151).default,FAQ: __webpack_require__(158).default,WhatsApp: __webpack_require__(159).default,Footer: __webpack_require__(43).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map