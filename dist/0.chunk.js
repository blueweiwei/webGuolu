webpackJsonp([0],{

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(76)

var Component = __webpack_require__(28)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(80),
  /* scopeId */
  "data-v-94f9878a",
  /* cssModules */
  null
)
Component.options.__file = "E:\\项目实训-学校\\集中实训\\jizhang_job\\src\\views\\result.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] result.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-94f9878a", Component.options)
  } else {
    hotAPI.reload("data-v-94f9878a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 73:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            value3: false,
            spinShow: true,
            styles: {
                height: 'calc(100% - 55px)',
                overflow: 'auto',
                paddingBottom: '53px',
                position: 'static'

            },
            getData: {
                0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}, 11: {}, 12: {}
            }
        };
    },
    created: function created() {
        this.getParams();
    },

    methods: {
        up: function up() {
            this.$Message.info('This is a info tip');
        },
        getParams: function getParams() {
            var _this = this;

            var routerParam = this.$route.query.data;
            console.log(routerParam);
            this.$axios({
                method: "post",
                url: '/api',
                params: {
                    data: routerParam
                }
            }).then(function (res) {
                _this.getData = res.data;
                _this.spinShow = false;
            });
        }
    }
});

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c42a3c6e8411a29d0f69ed6157a8663f.png";

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout"
  }, [_c('Layout', [_c('Header', [_c('Menu', {
    attrs: {
      "mode": "horizontal",
      "theme": "dark",
      "active-name": "1"
    }
  }, [_c('div', {
    staticClass: "layout-logo"
  }, [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(77),
      "alt": ""
    }
  })])], 1)])], 1), _vm._v(" "), _c('Content', {
    style: ({
      padding: '0 50px'
    })
  }, [_c('Breadcrumb', {
    style: ({
      margin: '20px 0'
    })
  }), _vm._v(" "), _c('Card', [_c('div', {
    staticStyle: {
      "max-width": "1200px"
    }
  }, [_c('Row', {
    attrs: {
      "gutter": 16
    }
  }, [_c('h4', [_vm._v("基本参数-表1")]), _vm._v(" "), _c('Col', {
    staticStyle: {
      "border": "2px dotted #A9A9A9",
      "border-radius": "10px",
      "margin": "0 10px"
    },
    attrs: {
      "span": "23"
    }
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v("（一）基础参数")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("干煤气含水量 gm")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].C3))]), _vm._v(" "), _c('td', [_vm._v("g/m3")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("湿煤气水分含量 H2Os")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].C4))]), _vm._v(" "), _c('td', [_vm._v("%")])])]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', {
    attrs: {
      "colspan": "8"
    }
  }, [_vm._v("煤气成分")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("煤气中各成分 ")]), _vm._v(" "), _c('td', [_vm._v("CO")]), _vm._v(" "), _c('td', [_vm._v("CO2")]), _vm._v(" "), _c('td', [_vm._v("H2")]), _vm._v(" "), _c('td', [_vm._v("CH4")]), _vm._v(" "), _c('td', [_vm._v("O2")]), _vm._v(" "), _c('td', [_vm._v("N2")]), _vm._v(" "), _c('td', [_vm._v("单位")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("干煤气成分 Zg ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].C7))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].D7))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].E7))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].F7))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].G7))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].H7))]), _vm._v(" "), _c('td', [_vm._v("%")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("湿煤气成分 Zs ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].C8))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].D8))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].E8))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].F8))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].G8))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].H8))]), _vm._v(" "), _c('td', [_vm._v("%")])])]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('td', [_vm._v("燃料的低发热量 QDW")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].C9))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("干空气含水量 gk")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].C10))]), _vm._v(" "), _c('td', [_vm._v("g/m3")])])]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', {
    attrs: {
      "colspan": "8"
    }
  }, [_vm._v("烟气成分")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("烟气中各成分 ")]), _vm._v(" "), _c('td', [_vm._v("O2")]), _vm._v(" "), _c('td', [_vm._v("CO2")]), _vm._v(" "), _c('td', [_vm._v("CO")]), _vm._v(" "), _c('td', [_vm._v("H2")]), _vm._v(" "), _c('td', [_vm._v("N2")]), _vm._v(" "), _c('td', [_vm._v("CH4")]), _vm._v(" "), _c('td', [_vm._v("单位")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("干烟气成分 Zg' ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].C13))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].D13))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].E13))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].F13))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].G13))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].H13))]), _vm._v(" "), _c('td', [_vm._v("%")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("湿烟气成分 Zs ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].C14))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].D14))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].E14))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].F14))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].G14))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].H14))]), _vm._v(" "), _c('td', [_vm._v("%")])])]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('td', [_vm._v("空气系数 α")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].C15))]), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("理论干空气量 L0g")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].C16))]), _vm._v(" "), _c('td', [_vm._v("m3/m3")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("理论烟气生成量 V0")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].C17))]), _vm._v(" "), _c('td', [_vm._v("m3/m3")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("实际烟气生成量 Vns")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].C18))]), _vm._v(" "), _c('td', [_vm._v("m3/m3")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("烟气不完全燃烧时烟气的修正系数 b")]), _vm._v(" "), _c('td', [_vm._v("α<1时")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].D19))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("湿烟气中水分含量 H2Osˊ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['0'].C20))]), _vm._v(" "), _c('td', [_vm._v("%")])])])])])], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "gutter": 16
    }
  }, [_c('h4', [_vm._v("各理想气体不同温度下的平均定压比热容-表2")]), _vm._v(" "), _c('Col', {
    staticStyle: {
      "border": "2px dotted #A9A9A9",
      "border-radius": "10px",
      "margin": "0 10px"
    },
    attrs: {
      "span": "23"
    }
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', {
    attrs: {
      "colspan": "8"
    }
  }, [_vm._v("各理想气体不同温度下的平均定压比热容")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("气体平均定压比热(KJ/m3·℃)")]), _vm._v(" "), _c('td', [_vm._v("温度（℃）")]), _vm._v(" "), _c('td', [_vm._v("CO")]), _vm._v(" "), _c('td', [_vm._v("CO2")]), _vm._v(" "), _c('td', [_vm._v("H2")]), _vm._v(" "), _c('td', [_vm._v("H2")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("tm")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['1'].C5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['1'].D5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['1'].E5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['1'].F5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['1'].G5))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("ty2")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['1'].C6))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['1'].D6))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['1'].E6))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['1'].F6))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['1'].G6))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("常温 te")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['1'].C7))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['1'].D7))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['1'].E7))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['1'].F7))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['1'].G7))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("煤气在0～tm的平均定压比热 Cm")]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "6"
    }
  }, [_vm._v(_vm._s(_vm.getData['1'].C8))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3·℃")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("煤气在0～te的平均定压比热 Cme")]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "6"
    }
  }, [_vm._v(_vm._s(_vm.getData['1'].C9))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3·℃")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("烟气在0～ty2的平均定压比热 Cy2")]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "6"
    }
  }, [_vm._v(_vm._s(_vm.getData['1'].C10))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3·℃")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("烟气在0～te的平均定压比热 Cy2e")]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "6"
    }
  }, [_vm._v(_vm._s(_vm.getData['1'].C11))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3·℃")])])])])])], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "gutter": 16
    }
  }, [_c('h4', [_vm._v("空气在不同温度下的平均定压比热-表3")]), _vm._v(" "), _c('Col', {
    staticStyle: {
      "border": "2px dotted #A9A9A9",
      "border-radius": "10px",
      "margin": "0 10px"
    },
    attrs: {
      "span": "23"
    }
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', {
    attrs: {
      "colspan": "4"
    }
  }, [_vm._v("空气在不同温度下的平均定压比热")])]), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _c('td', [_vm._v("温度(℃)")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("比热容(KJ/m3·℃)")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("环境温度 te")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['2'].C5))]), _vm._v(" "), _c('td', [_vm._v("环境温度 Ce")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['2'].E5))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("助燃空气 tk")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['2'].C6))]), _vm._v(" "), _c('td', [_vm._v("助燃空气 Ck")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['2'].E6))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("冷风 tf1")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['2'].C7))]), _vm._v(" "), _c('td', [_vm._v("冷风 Cf1")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['2'].E7))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("热风 tf2")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['2'].C8))]), _vm._v(" "), _c('td', [_vm._v("热风 Cf2")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['2'].E8))])])])])])], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "gutter": 16
    }
  }, [_c('h4', [_vm._v("热风炉燃烧期参数-表4")]), _vm._v(" "), _c('Col', {
    staticStyle: {
      "border": "2px dotted #A9A9A9",
      "border-radius": "10px",
      "margin": "0 10px"
    },
    attrs: {
      "span": "23"
    }
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', {
    attrs: {
      "colspan": "8"
    }
  }, [_vm._v("热风炉燃烧期参数")])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "colspan": "5"
    }
  }, [_vm._v("煤气")]), _vm._v(" "), _c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v("助燃空气")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("压力 kPa")]), _vm._v(" "), _c('td', [_vm._v("流量 Vm(m3/h)")]), _vm._v(" "), _c('td', [_vm._v("温度 tm(℃)")]), _vm._v(" "), _c('td', [_vm._v("Cm(KJ/m3·℃)")]), _vm._v(" "), _c('td', [_vm._v("Ce(KJ/m3·℃)")]), _vm._v(" "), _c('td', [_vm._v("压力 kPa")]), _vm._v(" "), _c('td', [_vm._v("流量 Vk(m3/h)")]), _vm._v(" "), _c('td', [_vm._v("温度 tk(℃)")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.getData['3'].B5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['3'].C5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['3'].D5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['3'].E5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['3'].F5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['3'].G5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['3'].H5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['3'].I5))])])])])])], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "gutter": 16
    }
  }, [_c('h4', [_vm._v("热风炉送风期参数-表5")]), _vm._v(" "), _c('Col', {
    staticStyle: {
      "border": "2px dotted #A9A9A9",
      "border-radius": "10px",
      "margin": "0 10px"
    },
    attrs: {
      "span": "23"
    }
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', {
    attrs: {
      "colspan": "6"
    }
  }, [_vm._v("热风炉送风期参数")])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v("冷风")]), _vm._v(" "), _c('th', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v("热风")]), _vm._v(" "), _c('th', {
    attrs: {
      "colspan": "1"
    }
  }, [_vm._v("烟气")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("压力 kPa")]), _vm._v(" "), _c('td', [_vm._v("流量 Vf1(m3/h)")]), _vm._v(" "), _c('td', [_vm._v("温度 tf1(℃)")]), _vm._v(" "), _c('td', [_vm._v("压力 kPa")]), _vm._v(" "), _c('td', [_vm._v("温度 tf2(℃)")]), _vm._v(" "), _c('td', [_vm._v("温度 ty2(℃)")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.getData['4'].B5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['4'].C5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['4'].D5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['4'].E5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['4'].F5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['4'].G5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['4'].H5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['4'].I5))])])])])])], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "gutter": 16
    }
  }, [_c('h4', [_vm._v("热风炉炉体温度数据-表6")]), _vm._v(" "), _c('Col', {
    staticStyle: {
      "border": "2px dotted #A9A9A9",
      "border-radius": "10px",
      "margin": "0 10px"
    },
    attrs: {
      "span": "23"
    }
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', {
    attrs: {
      "colspan": "9"
    }
  }, [_vm._v("热风炉炉体温度数据")])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("部位")]), _vm._v(" "), _c('th', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v("散热表面积A(m2)")]), _vm._v(" "), _c('th', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v("平均温度ti(℃)")]), _vm._v(" "), _c('th', [_vm._v("环境温度 tm(℃)")]), _vm._v(" "), _c('th', [_vm._v("传热系数 K(KJ/m2·s·℃)")]), _vm._v(" "), _c('th', {
    attrs: {
      "colspan": "2"
    }
  }, [_vm._v("热流密度 qi(KJ/m2·s)")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("拱顶 4g")]), _vm._v(" "), _c('td', [_vm._v("A4g")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].D4))]), _vm._v(" "), _c('td', [_vm._v("t4g")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].F4))]), _vm._v(" "), _c('td', {
    attrs: {
      "rowspan": "9"
    }
  }, [_vm._v("34")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].H4))]), _vm._v(" "), _c('td', [_vm._v("q4g")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].G4))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("炉腰 4ly")]), _vm._v(" "), _c('td', [_vm._v("A4ly")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].D5))]), _vm._v(" "), _c('td', [_vm._v("t4ly")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].F5))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].H5))]), _vm._v(" "), _c('td', [_vm._v("q4ly")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].G5))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("炉底 4ld")]), _vm._v(" "), _c('td', [_vm._v("A4ld")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].D6))]), _vm._v(" "), _c('td', [_vm._v("t4ld")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].F6))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].H6))]), _vm._v(" "), _c('td', [_vm._v("q4ld")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].G6))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("冷风管道 5")]), _vm._v(" "), _c('td', [_vm._v("A5")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].D7))]), _vm._v(" "), _c('td', [_vm._v("t5")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].F7))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].H7))]), _vm._v(" "), _c('td', [_vm._v("q5")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].G7))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("热风管道 6")]), _vm._v(" "), _c('td', [_vm._v("A6")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].D8))]), _vm._v(" "), _c('td', [_vm._v("t6")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].F8))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].H8))]), _vm._v(" "), _c('td', [_vm._v("q6")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].G8))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("烟道 7")]), _vm._v(" "), _c('td', [_vm._v("A7")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].D9))]), _vm._v(" "), _c('td', [_vm._v("t7")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].F9))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].H9))]), _vm._v(" "), _c('td', [_vm._v("q7")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].G9))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("预热装置 8")]), _vm._v(" "), _c('td', [_vm._v("A8")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].D10))]), _vm._v(" "), _c('td', [_vm._v("t8")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].F10))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].H10))]), _vm._v(" "), _c('td', [_vm._v("q8")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].G10))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("预热煤气管道 9")]), _vm._v(" "), _c('td', [_vm._v("A9")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].D11))]), _vm._v(" "), _c('td', [_vm._v("t9")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].F11))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].H11))]), _vm._v(" "), _c('td', [_vm._v("q9")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].G11))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("预热助燃空气管道 10")]), _vm._v(" "), _c('td', [_vm._v("A10")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].D12))]), _vm._v(" "), _c('td', [_vm._v("t10")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].F12))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].H12))]), _vm._v(" "), _c('td', [_vm._v("q10")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['5'].G12))])])])])])], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "gutter": 16
    }
  }, [_c('h4', [_vm._v("热风炉外形尺寸-表7")]), _vm._v(" "), _c('Col', {
    staticStyle: {
      "border": "2px dotted #A9A9A9",
      "border-radius": "10px",
      "margin": "0 10px"
    },
    attrs: {
      "span": "23"
    }
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v("热风炉外形尺寸")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("形状")]), _vm._v(" "), _c('td', [_vm._v("直径 D(m)")]), _vm._v(" "), _c('td', [_vm._v("高度 H(m)")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("圆柱")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['6'].C4))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['6'].D4))])])])])])], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "gutter": 16
    }
  }, [_c('h4', [_vm._v("热风炉工况-表8")]), _vm._v(" "), _c('Col', {
    staticStyle: {
      "border": "2px dotted #A9A9A9",
      "border-radius": "10px",
      "margin": "0 10px"
    },
    attrs: {
      "span": "23"
    }
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', {
    attrs: {
      "colspan": "5"
    }
  }, [_vm._v("热风炉工况")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("送风制度")]), _vm._v(" "), _c('td', [_vm._v("燃烧时间 τr")]), _vm._v(" "), _c('td', [_vm._v("送风时间 τf")]), _vm._v(" "), _c('td', [_vm._v("周期 τ")]), _vm._v(" "), _c('td', [_vm._v("单位")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("两烧一送")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['7'].C4))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['7'].D4))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['7'].E4))]), _vm._v(" "), _c('td', [_vm._v("h")])])])])])], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "gutter": 16
    }
  }, [_c('h4', [_vm._v("热收入项目-表9")]), _vm._v(" "), _c('Col', {
    staticStyle: {
      "border": "2px dotted #A9A9A9",
      "border-radius": "10px",
      "margin": "0 10px"
    },
    attrs: {
      "span": "23"
    }
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', {
    attrs: {
      "colspan": "5"
    }
  }, [_vm._v("（二）热收入项目")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Q1(KJ/m3)")]), _vm._v(" "), _c('td', [_vm._v("燃烧化学热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['8'].D6))]), _vm._v(" "), _c('td', [_vm._v("热风炉风量综合校正系数 Bf")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['8'].F6))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Q2(KJ/m3)")]), _vm._v(" "), _c('td', [_vm._v("燃料的物理热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['8'].D7))]), _vm._v(" "), _c('td', [_vm._v("漏风系数 lf")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['8'].F7))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Q3(KJ/m3)")]), _vm._v(" "), _c('td', [_vm._v("助燃空气的物理热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['8'].D8))]), _vm._v(" "), _c('td', [_vm._v("实际热风流量 Vf(m3/h)")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['8'].F8))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Q4(KJ/m3)")]), _vm._v(" "), _c('td', [_vm._v("冷风带入的热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['8'].D9))]), _vm._v(" "), _c('td', [_vm._v(" 煤气单耗 B")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['8'].F9))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("∑Q(KJ/m3)")]), _vm._v(" "), _c('td', [_vm._v("收入热量总和")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['8'].D10))]), _vm._v(" "), _c('td', [_vm._v("理论湿空气量 L0s(m3/m3)")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['8'].F10))])])])])])], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "gutter": 16
    }
  }, [_c('h4', [_vm._v("热支出项目-表10")]), _vm._v(" "), _c('Col', {
    staticStyle: {
      "border": "2px dotted #A9A9A9",
      "border-radius": "10px",
      "margin": "0 10px"
    },
    attrs: {
      "span": "23"
    }
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', {
    attrs: {
      "colspan": "6"
    }
  }, [_vm._v("（三）热支出项目")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Q1ˊ")]), _vm._v(" "), _c('td', [_vm._v("热风带出的热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['9'].D4))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3")]), _vm._v(" "), _c('td', [_vm._v("炉容积 VL(m3)")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['9'].G4))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Q2ˊ")]), _vm._v(" "), _c('td', [_vm._v("烟气带出的物理热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['9'].D5))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Q3ˊ")]), _vm._v(" "), _c('td', [_vm._v("化学不完全燃烧损失的热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['9'].D6))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3")])]), _c('tr', [_c('td', [_vm._v("Q4ˊ")]), _vm._v(" "), _c('td', [_vm._v("炉体表面散热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['9'].D7))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3")])]), _c('tr', [_c('td', [_vm._v("Q5ˊ")]), _vm._v(" "), _c('td', [_vm._v("冷风管道表面散热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['9'].D8))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3")])]), _c('tr', [_c('td', [_vm._v("Q6ˊ")]), _vm._v(" "), _c('td', [_vm._v("热风管道表面散热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['9'].D9))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3")])]), _c('tr', [_c('td', [_vm._v("Q7ˊ")]), _vm._v(" "), _c('td', [_vm._v("烟道表面散热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['9'].D10))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3")])]), _c('tr', [_c('td', [_vm._v("Q8ˊ")]), _vm._v(" "), _c('td', [_vm._v("冷却水吸收的热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['9'].D11))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3")])]), _c('tr', [_c('td', [_vm._v("Q9ˊ")]), _vm._v(" "), _c('td', [_vm._v("煤气机械水吸热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['9'].D12))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3")])]), _c('tr', [_c('td', [_vm._v("Q10ˊ")]), _vm._v(" "), _c('td', [_vm._v("预热装置的表面散热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['9'].D13))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3")])]), _c('tr', [_c('td', [_vm._v("Q11ˊ")]), _vm._v(" "), _c('td', [_vm._v("预热煤气管道的表面散热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['9'].D14))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3")])]), _c('tr', [_c('td', [_vm._v("Q12ˊ")]), _vm._v(" "), _c('td', [_vm._v("预热助燃空气管道的表面散热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['9'].D15))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3")])]), _c('tr', [_c('td', [_vm._v("Q13ˊ")]), _vm._v(" "), _c('td', [_vm._v("热风炉泄压带出的热量")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['9'].D16))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3")])]), _c('tr', [_c('td', [_vm._v("△Q")]), _vm._v(" "), _c('td', [_vm._v("热平衡差值 △Q")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['9'].D17))]), _vm._v(" "), _c('td', [_vm._v("KJ/m3")])])])])])], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "gutter": 16
    }
  }, [_c('h4', [_vm._v("热风炉主要技术经济指标-表12")]), _vm._v(" "), _c('Col', {
    staticStyle: {
      "border": "2px dotted #A9A9A9",
      "border-radius": "10px",
      "margin": "0 10px"
    },
    attrs: {
      "span": "23"
    }
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', {
    attrs: {
      "colspan": "5"
    }
  }, [_vm._v("热风炉主要技术经济指标")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("序号")]), _vm._v(" "), _c('td', [_vm._v("指标")]), _vm._v(" "), _c('td', [_vm._v("符号")]), _vm._v(" "), _c('td', [_vm._v("单位")]), _vm._v(" "), _c('td', [_vm._v("数值")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("1")]), _vm._v(" "), _c('td', [_vm._v("热风温度")]), _vm._v(" "), _c('td', [_vm._v("tf2")]), _vm._v(" "), _c('td', [_vm._v("℃")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['11'].F4))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("2")]), _vm._v(" "), _c('td', [_vm._v("最高拱顶温度")]), _vm._v(" "), _c('td', [_vm._v("tg max")]), _vm._v(" "), _c('td', [_vm._v("℃")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['11'].F5))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("3")]), _vm._v(" "), _c('td', [_vm._v("平均排烟温度")]), _vm._v(" "), _c('td', [_vm._v("ty2")]), _vm._v(" "), _c('td', [_vm._v("℃")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['11'].F6))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("4")]), _vm._v(" "), _c('td', [_vm._v("平均煤气流量")]), _vm._v(" "), _c('td', [_vm._v("Vm")]), _vm._v(" "), _c('td', [_vm._v("m3•h-1")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['11'].F7))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("5")]), _vm._v(" "), _c('td', [_vm._v("风流量")]), _vm._v(" "), _c('td', [_vm._v("Vf")]), _vm._v(" "), _c('td', [_vm._v("m3•h-1")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['11'].F8))])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("煤气燃烧的化学热量")]), _vm._v(" "), _c('td', [_vm._v("Q1")]), _vm._v(" "), _c('td', [_vm._v("KJ•m-3")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['11'].F9))])])])])])], 1), _vm._v(" "), _c('Row', {
    attrs: {
      "gutter": 16
    }
  }, [_c('h4', [_vm._v("热诊断及热风炉效率-表13")]), _vm._v(" "), _c('Col', {
    staticStyle: {
      "border": "2px dotted #A9A9A9",
      "border-radius": "10px",
      "margin": "0 10px"
    },
    attrs: {
      "span": "23"
    }
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v("（四）热诊断")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("相对误差 δ(±5%)")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['12'].C3))])]), _vm._v(" "), _c('tr', [_c('th', {
    attrs: {
      "colspan": "3"
    }
  }, [_vm._v("（五）热风炉效率")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("本体热效率 η1")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['12'].C5))]), _vm._v(" "), _c('td', [_vm._v("%")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("系统热效率 η2")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getData['12'].C6))]), _vm._v(" "), _c('td', [_vm._v("%")])])])])])], 1), _vm._v(" "), (_vm.spinShow) ? _c('Spin', {
    staticStyle: {
      "height": "600px"
    },
    attrs: {
      "size": "large",
      "fix": ""
    }
  }) : _vm._e()], 1)])], 1), _vm._v(" "), _c('Footer', {
    staticClass: "layout-footer-center"
  }, [_vm._v("2021 © blueweiwei")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-94f9878a", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=0.chunk.js.map