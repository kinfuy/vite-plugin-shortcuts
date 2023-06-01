import { o as openBlock, c as createElementBlock, t as toDisplayString, n as normalizeClass, d as defineComponent, r as resolveComponent, a as createBaseVNode, b as createVNode, F as Fragment, p as pushScopeId, e as popScopeId } from "./vendor.9fc49ffe.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const style_css_vue_type_style_index_0_src_59e5c3c6_scoped_59e5c3c6_lang = "";
const _hoisted_1$2 = { class: "src-imports-script" };
const _sfc_main$4 = {
  __name: "srcImportStyle",
  setup(__props) {
    const msg = "hello from component A!";
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, toDisplayString(msg));
    };
  }
};
const SrcImportStyle = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-59e5c3c6"]]);
const style2_css_vue_type_style_index_0_src_a9e847d6_scoped_a9e847d6_lang = "";
const _sfc_main$3 = {};
const _hoisted_1$1 = { class: "src-imports-style" };
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, "This should be tan");
}
const SrcImportStyle2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-a9e847d6"]]);
const one = "_one_1eud0_1";
const two = "_two_1eud0_5";
const style0 = {
  one,
  two
};
const _sfc_main$2 = {};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.$style.one)
  }, "src for import css module", 2);
}
const cssModules$1 = {
  "$style": style0
};
const SrcImportModuleStyle = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__cssModules", cssModules$1]]);
const _sfc_main$1 = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.$style.two)
  }, "src for import css module", 2);
}
const cssModules = {
  "$style": style0
};
const SrcImportModuleStyle2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__cssModules", cssModules]]);
const _sfc_main = defineComponent({
  components: {
    SrcImportStyle,
    SrcImportStyle2,
    SrcImportModuleStyle,
    SrcImportModuleStyle2
  },
  setup() {
    return {
      msg: "hello from script src!"
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-2d191c01"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "SFC Src Imports", -1));
const _hoisted_2 = { class: "src-imports-script" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "src-imports-style" }, "This should be tan", -1));
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SrcImportStyle = resolveComponent("SrcImportStyle");
  const _component_SrcImportStyle2 = resolveComponent("SrcImportStyle2");
  const _component_SrcImportModuleStyle = resolveComponent("SrcImportModuleStyle");
  const _component_SrcImportModuleStyle2 = resolveComponent("SrcImportModuleStyle2");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.msg), 1),
    _hoisted_3,
    createVNode(_component_SrcImportStyle),
    createVNode(_component_SrcImportStyle2),
    createVNode(_component_SrcImportModuleStyle),
    createVNode(_component_SrcImportModuleStyle2)
  ], 64);
}
const style_css_vue_type_style_index_0_src_2d191c01_scoped_2d191c01_lang = "";
const style2_css_vue_type_style_index_1_src_2d191c01_scoped_2d191c01_lang = "";
const SrcImport = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__scopeId", "data-v-2d191c01"]]);
export {
  SrcImport as S,
  _export_sfc as _
};
