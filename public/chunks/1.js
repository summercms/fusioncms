(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OptionBuilder.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OptionBuilder.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      limit: 1,
      editing: {
        index: null,
        checked: null,
        label: null,
        value: null
      },
      option: {
        checked: false,
        label: '',
        value: ''
      },
      options: []
    };
  },
  props: ['value'],
  computed: {
    defaults: function defaults() {
      return _.filter(this.options, ['checked', true]);
    }
  },
  watch: {
    options: function options(value) {
      this.$emit('input', value);
    },
    value: function value(_value) {
      this.options = _value;
    }
  },
  methods: {
    add: function add() {
      this.options.push({
        checked: false,
        label: this.option.label,
        value: this.option.value || this.option.label
      });
      this.resetOption();
    },
    edit: function edit(index) {
      this.editing.index = index;
      this.editing.checked = this.options[index].checked;
      this.editing.label = this.options[index].label;
      this.editing.value = this.options[index].value;
    },
    update: function update() {
      this.options.splice(this.editing.index, 1, {
        label: this.editing.label,
        value: this.editing.value,
        checked: this.editing.checked
      });
      this.resetEditing();
    },
    destroy: function destroy(index) {
      var value = this.options[index].value;

      var defaultIndex = _.indexOf(this.defaults, value);

      if (defaultIndex !== -1) {
        this.defaults.splice(defaultIndex, 1);
      }

      this.options.splice(index, 1);
    },
    isEditing: function isEditing(index) {
      return this.editing.index == index;
    },
    resetOption: function resetOption() {
      this.option.label = '';
      this.option.value = '';
      this.option.checked = false;
      this.$nextTick(function () {
        this.$refs.label.$el.focus();
      });
    },
    resetEditing: function resetEditing() {
      this.editing.index = null;
      this.editing.label = null;
      this.editing.value = null;
      this.editing.checked = null;
      this.$nextTick(function () {
        this.$refs.label.$el.focus();
      });
    },
    metLimit: function metLimit(option) {
      return this.defaults.length >= this.limit && _.findIndex(this.defaults, ['value', option.value]) === -1;
    }
  },
  created: function created() {
    this.options = this.value || [];
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OptionBuilder.vue?vue&type=template&id=920d0bea&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OptionBuilder.vue?vue&type=template&id=920d0bea& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row p-0" }, [
    _c(
      "form",
      {
        staticClass: "col col--flush w-full lg:w-1/2",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.add($event)
          }
        }
      },
      [
        _c("p-input", {
          ref: "label",
          attrs: { text: "text", placeholder: "Label" },
          model: {
            value: _vm.option.label,
            callback: function($$v) {
              _vm.$set(_vm.option, "label", $$v)
            },
            expression: "option.label"
          }
        }),
        _vm._v(" "),
        _c("p-input", {
          attrs: { text: "text", placeholder: "Value" },
          model: {
            value: _vm.option.value,
            callback: function($$v) {
              _vm.$set(_vm.option, "value", $$v)
            },
            expression: "option.value"
          }
        }),
        _vm._v(" "),
        _c(
          "p-button",
          {
            staticClass: "w-full",
            attrs: { type: "submit" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.add($event)
              }
            }
          },
          [_vm._v("Add")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "mt-6 text-center text-sm text-grey-dark" }, [
          _vm._v("Add and arrange as many options as you need.")
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col col--flush w-full lg:w-1/2" },
      [
        _c("p-sortable-list", {
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var items = ref.items
                return _c(
                  "div",
                  {},
                  _vm._l(items, function(option, index) {
                    return _c("p-sortable-item", { key: option.value }, [
                      _c("div", { staticClass: "flex bg-white shadow" }, [
                        _vm.isEditing(index)
                          ? _c(
                              "form",
                              {
                                staticClass:
                                  "flex justify-center items-center pl-3 py-1",
                                on: {
                                  submit: function($event) {
                                    $event.preventDefault()
                                    return _vm.update($event)
                                  }
                                }
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.editing.label,
                                      expression: "editing.label"
                                    }
                                  ],
                                  ref: "edit",
                                  refInFor: true,
                                  staticClass: "flex-1",
                                  attrs: { text: "text", placeholder: "Label" },
                                  domProps: { value: _vm.editing.label },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.editing,
                                        "label",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.editing.value,
                                      expression: "editing.value"
                                    }
                                  ],
                                  staticClass: "flex-1",
                                  attrs: { text: "text", placeholder: "Value" },
                                  domProps: { value: _vm.editing.value },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.editing,
                                        "value",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "p-2 text-grey-light focus:outline-none",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.resetEditing($event)
                                      }
                                    }
                                  },
                                  [_c("fa-icon", { attrs: { icon: "times" } })],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "p-2 text-grey-light focus:outline-none",
                                    attrs: { type: "submit" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.update($event)
                                      }
                                    }
                                  },
                                  [_c("fa-icon", { attrs: { icon: "check" } })],
                                  1
                                )
                              ]
                            )
                          : _c(
                              "div",
                              { staticClass: "flex flex-1 items-center" },
                              [
                                _c(
                                  "p-sortable-handle",
                                  { staticClass: "cursor-move inline-block" },
                                  [
                                    _c("fa-icon", {
                                      staticClass:
                                        "handle fa-fw text-grey-light mr-3",
                                      attrs: { icon: "ellipsis-v" }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "mr-3 flex-1" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: option.checked,
                                        expression: "option.checked"
                                      }
                                    ],
                                    staticClass: "mr-3",
                                    attrs: {
                                      type: "checkbox",
                                      disabled: _vm.metLimit(option)
                                    },
                                    domProps: {
                                      value: option.value,
                                      checked: Array.isArray(option.checked)
                                        ? _vm._i(option.checked, option.value) >
                                          -1
                                        : option.checked
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a = option.checked,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = option.value,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                option,
                                                "checked",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                option,
                                                "checked",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(option, "checked", $$c)
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("b", [_vm._v(_vm._s(option.label))]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "ml-3 text-xs text-grey-dark bg-grey-lighter px-2 py-1"
                                    },
                                    [_vm._v(_vm._s(option.value))]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "p-2 text-grey-light focus:outline-none",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.edit(index)
                                      }
                                    }
                                  },
                                  [
                                    _c("fa-icon", { attrs: { icon: "pencil" } })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "p-2 text-grey-light focus:outline-none",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.destroy(index)
                                      }
                                    }
                                  },
                                  [
                                    _c("fa-icon", {
                                      attrs: { icon: "trash-alt" }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                      ])
                    ])
                  }),
                  1
                )
              }
            }
          ]),
          model: {
            value: _vm.options,
            callback: function($$v) {
              _vm.options = $$v
            },
            expression: "options"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/OptionBuilder.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/OptionBuilder.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OptionBuilder_vue_vue_type_template_id_920d0bea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionBuilder.vue?vue&type=template&id=920d0bea& */ "./resources/js/components/OptionBuilder.vue?vue&type=template&id=920d0bea&");
/* harmony import */ var _OptionBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptionBuilder.vue?vue&type=script&lang=js& */ "./resources/js/components/OptionBuilder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OptionBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OptionBuilder_vue_vue_type_template_id_920d0bea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OptionBuilder_vue_vue_type_template_id_920d0bea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OptionBuilder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/OptionBuilder.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/OptionBuilder.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./OptionBuilder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OptionBuilder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OptionBuilder.vue?vue&type=template&id=920d0bea&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/OptionBuilder.vue?vue&type=template&id=920d0bea& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionBuilder_vue_vue_type_template_id_920d0bea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./OptionBuilder.vue?vue&type=template&id=920d0bea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OptionBuilder.vue?vue&type=template&id=920d0bea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionBuilder_vue_vue_type_template_id_920d0bea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionBuilder_vue_vue_type_template_id_920d0bea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/fieldtype.js":
/*!******************************************!*\
  !*** ./resources/js/mixins/fieldtype.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      required: true
    }
  },
  watch: {
    value: {
      deep: true,
      handler: function handler(value) {
        this.$emit('input', value);
      }
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvT3B0aW9uQnVpbGRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvT3B0aW9uQnVpbGRlci52dWU/N2RhMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9PcHRpb25CdWlsZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9PcHRpb25CdWlsZGVyLnZ1ZT9kN2UxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL09wdGlvbkJ1aWxkZXIudnVlPzBkYTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9maWVsZHR5cGUuanMiXSwibmFtZXMiOlsicHJvcHMiLCJ2YWx1ZSIsInJlcXVpcmVkIiwid2F0Y2giLCJkZWVwIiwiaGFuZGxlciIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGNBREE7QUFFQTtBQUNBLG1CQURBO0FBRUEscUJBRkE7QUFHQSxtQkFIQTtBQUlBO0FBSkEsT0FGQTtBQVNBO0FBQ0Esc0JBREE7QUFFQSxpQkFGQTtBQUdBO0FBSEEsT0FUQTtBQWVBO0FBZkE7QUFpQkEsR0FuQkE7QUFxQkEsa0JBckJBO0FBdUJBO0FBQ0EsWUFEQSxzQkFDQTtBQUNBO0FBQ0E7QUFIQSxHQXZCQTtBQTZCQTtBQUNBLFdBREEsbUJBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBS0EsU0FMQSxpQkFLQSxNQUxBLEVBS0E7QUFDQTtBQUNBO0FBUEEsR0E3QkE7QUF1Q0E7QUFDQSxPQURBLGlCQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLGdDQUZBO0FBR0E7QUFIQTtBQU1BO0FBQ0EsS0FUQTtBQVdBLFFBWEEsZ0JBV0EsS0FYQSxFQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWhCQTtBQWtCQSxVQWxCQSxvQkFrQkE7QUFDQTtBQUNBLGlDQURBO0FBRUEsaUNBRkE7QUFHQTtBQUhBO0FBTUE7QUFDQSxLQTFCQTtBQTRCQSxXQTVCQSxtQkE0QkEsS0E1QkEsRUE0QkE7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxLQXBDQTtBQXNDQSxhQXRDQSxxQkFzQ0EsS0F0Q0EsRUFzQ0E7QUFDQTtBQUNBLEtBeENBO0FBMENBLGVBMUNBLHlCQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FsREE7QUFvREEsZ0JBcERBLDBCQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQTdEQTtBQStEQSxZQS9EQSxvQkErREEsTUEvREEsRUErREE7QUFDQTtBQUNBO0FBakVBLEdBdkNBO0FBMkdBLFNBM0dBLHFCQTJHQTtBQUNBO0FBQ0E7QUE3R0EsRzs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUNBQXFDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlEQUF5RDtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnREFBZ0Q7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0Esa0RBQWtELG9CQUFvQjtBQUN0RSxpQ0FBaUMsc0NBQXNDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxxQ0FBcUM7QUFDL0UsNkNBQTZDLDJCQUEyQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxxQ0FBcUM7QUFDL0UsNkNBQTZDLDJCQUEyQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLGtEQUFrRCxTQUFTLGdCQUFnQixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsaUJBQWlCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxrREFBa0QsU0FBUyxnQkFBZ0IsRUFBRTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMENBQTBDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQ0FBMEM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDZCQUE2QjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBLG1EQUFtRCxTQUFTLGlCQUFpQixFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsOENBQThDO0FBQzlDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JVQTtBQUFBO0FBQUE7QUFBQTtBQUE0RjtBQUMzQjtBQUNMOzs7QUFHNUQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsbUZBQU07QUFDUixFQUFFLHdGQUFNO0FBQ1IsRUFBRSxpR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBNkwsQ0FBZ0IseVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBak47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZTtBQUNYQSxPQUFLLEVBQUU7QUFDSEMsU0FBSyxFQUFFO0FBQ0hDLGNBQVEsRUFBRTtBQURQO0FBREosR0FESTtBQU9YQyxPQUFLLEVBQUU7QUFDSEYsU0FBSyxFQUFFO0FBQ0hHLFVBQUksRUFBRSxJQURIO0FBRUhDLGFBRkcsbUJBRUtKLEtBRkwsRUFFWTtBQUNYLGFBQUtLLEtBQUwsQ0FBVyxPQUFYLEVBQW9CTCxLQUFwQjtBQUNIO0FBSkU7QUFESjtBQVBJLENBQWYsRSIsImZpbGUiOiJjaHVua3MvMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicm93IHAtMFwiPlxuICAgICAgICA8Zm9ybSBjbGFzcz1cImNvbCBjb2wtLWZsdXNoIHctZnVsbCBsZzp3LTEvMlwiIEBzdWJtaXQucHJldmVudD1cImFkZFwiPlxuICAgICAgICAgICAgPHAtaW5wdXQgdGV4dD1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxhYmVsXCIgdi1tb2RlbD1cIm9wdGlvbi5sYWJlbFwiIHJlZj1cImxhYmVsXCI+PC9wLWlucHV0PlxuICAgICAgICAgICAgPHAtaW5wdXQgdGV4dD1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlZhbHVlXCIgdi1tb2RlbD1cIm9wdGlvbi52YWx1ZVwiPjwvcC1pbnB1dD5cblxuICAgICAgICAgICAgPHAtYnV0dG9uIGNsYXNzPVwidy1mdWxsXCIgQGNsaWNrLnByZXZlbnQ9XCJhZGRcIiB0eXBlPVwic3VibWl0XCI+QWRkPC9wLWJ1dHRvbj5cblxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC02IHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmV5LWRhcmtcIj5BZGQgYW5kIGFycmFuZ2UgYXMgbWFueSBvcHRpb25zIGFzIHlvdSBuZWVkLjwvcD5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLS1mbHVzaCB3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICAgIDxwLXNvcnRhYmxlLWxpc3Qgdi1tb2RlbD1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Qtc2NvcGU9XCJ7IGl0ZW1zOiBpdGVtcyB9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLXNvcnRhYmxlLWl0ZW0gdi1mb3I9XCIob3B0aW9uLCBpbmRleCkgaW4gaXRlbXNcIiA6a2V5PVwib3B0aW9uLnZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBiZy13aGl0ZSBzaGFkb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSB2LWlmPVwiaXNFZGl0aW5nKGluZGV4KVwiIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGwtMyBweS0xXCIgQHN1Ym1pdC5wcmV2ZW50PVwidXBkYXRlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHRleHQ9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJMYWJlbFwiIGNsYXNzPVwiZmxleC0xXCIgdi1tb2RlbD1cImVkaXRpbmcubGFiZWxcIiByZWY9XCJlZGl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0ZXh0PVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVmFsdWVcIiBjbGFzcz1cImZsZXgtMVwiIHYtbW9kZWw9XCJlZGl0aW5nLnZhbHVlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInAtMiB0ZXh0LWdyZXktbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lXCIgQGNsaWNrLnByZXZlbnQ9XCJyZXNldEVkaXRpbmdcIj48ZmEtaWNvbiBpY29uPVwidGltZXNcIj48L2ZhLWljb24+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwLTIgdGV4dC1ncmV5LWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZVwiIEBjbGljay5wcmV2ZW50PVwidXBkYXRlXCIgdHlwZT1cInN1Ym1pdFwiPjxmYS1pY29uIGljb249XCJjaGVja1wiPjwvZmEtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImZsZXggZmxleC0xIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1zb3J0YWJsZS1oYW5kbGUgY2xhc3M9XCJjdXJzb3ItbW92ZSBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIGljb249XCJlbGxpcHNpcy12XCIgY2xhc3M9XCJoYW5kbGUgZmEtZncgdGV4dC1ncmV5LWxpZ2h0IG1yLTNcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1zb3J0YWJsZS1oYW5kbGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLTMgZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwib3B0aW9uLmNoZWNrZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIm1ldExpbWl0KG9wdGlvbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBvcHRpb24ubGFiZWwgfX08L2I+IDxzcGFuIGNsYXNzPVwibWwtMyB0ZXh0LXhzIHRleHQtZ3JleS1kYXJrIGJnLWdyZXktbGlnaHRlciBweC0yIHB5LTFcIj57eyBvcHRpb24udmFsdWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwLTIgdGV4dC1ncmV5LWxpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZVwiIEBjbGljay5wcmV2ZW50PVwiZWRpdChpbmRleClcIj48ZmEtaWNvbiBpY29uPVwicGVuY2lsXCI+PC9mYS1pY29uPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicC0yIHRleHQtZ3JleS1saWdodCBmb2N1czpvdXRsaW5lLW5vbmVcIiBAY2xpY2sucHJldmVudD1cImRlc3Ryb3koaW5kZXgpXCI+PGZhLWljb24gaWNvbj1cInRyYXNoLWFsdFwiPjwvZmEtaWNvbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1zb3J0YWJsZS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9wLXNvcnRhYmxlLWxpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbWl0OiAxLFxuICAgICAgICAgICAgICAgIGVkaXRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJycsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvcHM6IFsndmFsdWUnXSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgZGVmYXVsdHMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uZmlsdGVyKHRoaXMub3B0aW9ucywgWydjaGVja2VkJywgdHJ1ZV0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBvcHRpb25zKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdmFsdWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgYWRkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLm9wdGlvbi5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMub3B0aW9uLnZhbHVlIHx8IHRoaXMub3B0aW9uLmxhYmVsLFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0T3B0aW9uKClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGVkaXQoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRpbmcuaW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGluZy5jaGVja2VkID0gdGhpcy5vcHRpb25zW2luZGV4XS5jaGVja2VkXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0aW5nLmxhYmVsID0gdGhpcy5vcHRpb25zW2luZGV4XS5sYWJlbFxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGluZy52YWx1ZSA9IHRoaXMub3B0aW9uc1tpbmRleF0udmFsdWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuc3BsaWNlKHRoaXMuZWRpdGluZy5pbmRleCwgMSwge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5lZGl0aW5nLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5lZGl0aW5nLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiB0aGlzLmVkaXRpbmcuY2hlY2tlZCxcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEVkaXRpbmcoKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZGVzdHJveShpbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMub3B0aW9uc1tpbmRleF0udmFsdWVcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdEluZGV4ID0gXy5pbmRleE9mKHRoaXMuZGVmYXVsdHMsIHZhbHVlKVxuXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0cy5zcGxpY2UoZGVmYXVsdEluZGV4LCAxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNFZGl0aW5nKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWRpdGluZy5pbmRleCA9PSBpbmRleFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVzZXRPcHRpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb24ubGFiZWwgPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uLnZhbHVlID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbi5jaGVja2VkID0gZmFsc2VcblxuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmxhYmVsLiRlbC5mb2N1cygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlc2V0RWRpdGluZygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRpbmcuaW5kZXggPSBudWxsXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0aW5nLmxhYmVsID0gbnVsbFxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGluZy52YWx1ZSA9IG51bGxcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRpbmcuY2hlY2tlZCA9IG51bGxcblxuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmxhYmVsLiRlbC5mb2N1cygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG1ldExpbWl0KG9wdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRzLmxlbmd0aCA+PSB0aGlzLmxpbWl0ICYmIF8uZmluZEluZGV4KHRoaXMuZGVmYXVsdHMsIFsndmFsdWUnLCBvcHRpb24udmFsdWVdKSA9PT0gLTFcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMudmFsdWUgfHwgW11cbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgcC0wXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbCBjb2wtLWZsdXNoIHctZnVsbCBsZzp3LTEvMlwiLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgcmV0dXJuIF92bS5hZGQoJGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICByZWY6IFwibGFiZWxcIixcbiAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiTGFiZWxcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm9wdGlvbi5sYWJlbCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm9wdGlvbiwgXCJsYWJlbFwiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcHRpb24ubGFiZWxcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlZhbHVlXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5vcHRpb24udmFsdWUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5vcHRpb24sIFwidmFsdWVcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy1mdWxsXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZCgkZXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJBZGRcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTYgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyZXktZGFya1wiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJBZGQgYW5kIGFycmFuZ2UgYXMgbWFueSBvcHRpb25zIGFzIHlvdSBuZWVkLlwiKVxuICAgICAgICBdKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgY29sLS1mbHVzaCB3LWZ1bGwgbGc6dy0xLzJcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInAtc29ydGFibGUtbGlzdFwiLCB7XG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSByZWYuaXRlbXNcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbXMsIGZ1bmN0aW9uKG9wdGlvbiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicC1zb3J0YWJsZS1pdGVtXCIsIHsga2V5OiBvcHRpb24udmFsdWUgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBiZy13aGl0ZSBzaGFkb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNFZGl0aW5nKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcGwtMyBweS0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZWRpdGluZy5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlZGl0aW5nLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJlZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkxhYmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmVkaXRpbmcubGFiZWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVkaXRpbmcudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZWRpdGluZy52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGV4LTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiVmFsdWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZWRpdGluZy52YWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0aW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtMiB0ZXh0LWdyZXktbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc2V0RWRpdGluZygkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImZhLWljb25cIiwgeyBhdHRyczogeyBpY29uOiBcInRpbWVzXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtMiB0ZXh0LWdyZXktbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImZhLWljb25cIiwgeyBhdHRyczogeyBpY29uOiBcImNoZWNrXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LTEgaXRlbXMtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLXNvcnRhYmxlLWhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3Vyc29yLW1vdmUgaW5saW5lLWJsb2NrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhbmRsZSBmYS1mdyB0ZXh0LWdyZXktbGlnaHQgbXItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImVsbGlwc2lzLXZcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTMgZmxleC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24uY2hlY2tlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm9wdGlvbi5jaGVja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5tZXRMaW1pdChvcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShvcHRpb24uY2hlY2tlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShvcHRpb24uY2hlY2tlZCwgb3B0aW9uLnZhbHVlKSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogb3B0aW9uLmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBvcHRpb24uY2hlY2tlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoZWNrZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5jb25jYXQoWyQkdl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hlY2tlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQob3B0aW9uLCBcImNoZWNrZWRcIiwgJCRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKG9wdGlvbi5sYWJlbCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1sLTMgdGV4dC14cyB0ZXh0LWdyZXktZGFyayBiZy1ncmV5LWxpZ2h0ZXIgcHgtMiBweS0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhvcHRpb24udmFsdWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtMiB0ZXh0LWdyZXktbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVkaXQoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7IGF0dHJzOiB7IGljb246IFwicGVuY2lsXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtMiB0ZXh0LWdyZXktbGlnaHQgZm9jdXM6b3V0bGluZS1ub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlc3Ryb3koaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwidHJhc2gtYWx0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm9wdGlvbnMsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5vcHRpb25zID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcHRpb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL09wdGlvbkJ1aWxkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkyMGQwYmVhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL09wdGlvbkJ1aWxkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9PcHRpb25CdWlsZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTIwZDBiZWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTIwZDBiZWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTIwZDBiZWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL09wdGlvbkJ1aWxkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkyMGQwYmVhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzkyMGQwYmVhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9PcHRpb25CdWlsZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3B0aW9uQnVpbGRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3B0aW9uQnVpbGRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3B0aW9uQnVpbGRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTIwZDBiZWEmXCIiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgICAgIGhhbmRsZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9