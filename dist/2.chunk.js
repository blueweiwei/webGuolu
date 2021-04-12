webpackJsonp([2],{

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(28)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(78),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\项目实训-学校\\集中实训\\jizhang_job\\src\\views\\test.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] test.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e5e80a0", Component.options)
  } else {
    hotAPI.reload("data-v-1e5e80a0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            value18: ''
        };
    },
    created: function created() {
        this.getParams();
    },

    methods: {
        weiweis: function weiweis() {
            alert('123');
        },
        getParams: function getParams() {
            var routerParam = this.$route.query.data;
            console.log(routerParam);
        }
    }
});

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Input', {
    staticStyle: {
      "width": "200px"
    },
    attrs: {
      "type": "text",
      "password": "",
      "placeholder": "Enter something..."
    },
    model: {
      value: (_vm.value18),
      callback: function($$v) {
        _vm.value18 = $$v
      },
      expression: "value18"
    }
  }), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.weiweis()
      }
    }
  }, [_vm._v("Submit")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1e5e80a0", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=2.chunk.js.map