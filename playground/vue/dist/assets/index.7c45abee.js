import { d as defineComponent, f as ref, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, F as Fragment, b as createVNode, w as withCtx, p as pushScopeId, e as popScopeId, g as createTextVNode, n as normalizeClass, h as getCurrentInstance, i as renderSlot, u as unref, j as debounce, k as withAsyncContext, l as createBlock, S as Suspense, m as reactive, q as onBeforeMount, s as createApp, v as defineCustomElement } from "./vendor.9fc49ffe.js";
import { _ as _export_sfc, S as SrcImport } from "./src-import.639638cf.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const _hoisted_1$e = /* @__PURE__ */ createBaseVNode("h2", { class: "hmr" }, "HMR", -1);
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("p", null, "Click the button then edit this message. The count should be preserved.", -1);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Hmr",
  setup(__props) {
    let foo2 = 0;
    const count = ref(foo2);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$e,
        _hoisted_2$9,
        createBaseVNode("button", {
          class: "hmr-inc",
          onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
        }, "count is " + toDisplayString(count.value), 1)
      ], 64);
    };
  }
});
const Hmr_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$d = /* @__PURE__ */ createBaseVNode("h2", null, "Syntax Support", -1);
const _hoisted_2$8 = { class: "syntax" };
const _sfc_main$d = {
  __name: "Syntax",
  setup(__props) {
    const foo2 = {
      bar: "baz"
    };
    const a = ref({
      b: foo2 == null ? void 0 : foo2.bar
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$d,
        createBaseVNode("p", _hoisted_2$8, toDisplayString((_a = a.value) == null ? void 0 : _a.b), 1)
      ], 64);
    };
  }
};
const PreProcessors_vue_vue_type_style_index_0_lang = "";
const PreProcessors_vue_vue_type_style_index_1_scoped_263bbfef_lang = "";
const PreProcessors_vue_vue_type_style_index_2_lang = "";
const _withScopeId$3 = (n) => (pushScopeId("data-v-263bbfef"), n = n(), popScopeId(), n);
const _hoisted_1$c = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("h2", { class: "pre-processors" }, "Pre-Processors", -1));
const _hoisted_2$7 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("p", { class: "pug" }, 'This is rendered from <template lang="pug"> and styled with <style lang="sass">. It should be magenta.', -1));
const _hoisted_3$5 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("p", { class: "pug-less" }, 'This is rendered from <template lang="pug"> and styled with <style lang="less">. It should be green.', -1));
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("p", { class: "pug-stylus" }, 'This is rendered from <template lang="pug"> and styled with <style lang="stylus">. It should be orange.', -1));
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("div", { class: "pug-slot" }, "slot content", -1));
const _sfc_main$c = {
  __name: "PreProcessors",
  setup(__props) {
    function SlotComponent(_, { slots }) {
      return slots["test-slot"]();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$c,
        _hoisted_2$7,
        _hoisted_3$5,
        _hoisted_4$2,
        createVNode(SlotComponent, null, {
          "test-slot": withCtx(() => [
            _hoisted_5$1
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
const PreProcessors = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-263bbfef"]]);
const blueColor = "_blue-color_1s4zt_2";
const style0 = {
  blueColor
};
const orangeColor = "_orange-color_1iw5l_1";
const style1 = {
  orangeColor
};
const _sfc_main$b = {};
const _hoisted_1$b = /* @__PURE__ */ createBaseVNode("h2", null, "CSS Modules", -1);
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1$b,
    createBaseVNode("div", {
      class: normalizeClass(["sfc-css-modules", _ctx.$style.blueColor])
    }, [
      createTextVNode(" <style module> - this should be blue "),
      createBaseVNode("pre", null, toDisplayString(_ctx.$style), 1)
    ], 2),
    createBaseVNode("div", {
      class: normalizeClass(["sfc-css-modules-with-pre", _ctx.mod.orangeColor])
    }, [
      createTextVNode(" CSS - this should be orange "),
      createBaseVNode("pre", null, toDisplayString(_ctx.mod), 1)
    ], 2)
  ], 64);
}
const cssModules = {
  "$style": style0,
  "mod": style1
};
const CssModules = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$3], ["__cssModules", cssModules]]);
const _imports_1 = "/assets/asset.b9f46fb3.png";
const _imports_2 = "/icon.png";
const _imports_3 = "/assets/fragment.d2571ff2.svg";
const Assets_vue_vue_type_style_index_0_scoped_92149b88_lang = "";
const _sfc_main$a = {};
const _withScopeId$2 = (n) => (pushScopeId("data-v-92149b88"), n = n(), popScopeId(), n);
const _hoisted_1$a = _imports_3 + "#icon-heart-view";
const _hoisted_2$6 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h2", null, "Template Static Asset Reference", -1));
const _hoisted_3$4 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Relative "),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "relative-import",
    src: _imports_1
  })
], -1));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Absolute "),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "absolute-import",
    src: _imports_1
  })
], -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Absolute import from public dir "),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "public-import",
    src: _imports_2
  })
], -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Relative URL in style "),
  /* @__PURE__ */ createBaseVNode("span", { class: "relative-style-url" })
], -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" SVG Fragment reference "),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "svg-frag",
    style: { "width": "32px", "height": "32px" },
    src: _hoisted_1$a,
    alt: ""
  })
], -1));
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_2$6,
    _hoisted_3$4,
    _hoisted_4$1,
    _hoisted_5,
    _hoisted_6,
    _hoisted_7
  ], 64);
}
const Assets = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$2], ["__scopeId", "data-v-92149b88"]]);
const block0 = (Comp) => {
  Comp.i18n = { "en": { "hello": "hello,vite!" }, "ja": { "hello": "\u3053\u3093\u306B\u3061\u306F\u3001vite\uFF01" } };
};
function useI18n(locale = "en") {
  const instance = getCurrentInstance();
  const resources = instance.type.i18n || { en: {} };
  function t(key) {
    const res = resources[locale] || {};
    return res[key];
  }
  return { t };
}
const _sfc_main$9 = {
  setup() {
    return { ...useI18n("ja") };
  }
};
const _hoisted_1$9 = /* @__PURE__ */ createBaseVNode("h2", null, "Custom Blocks", -1);
const _hoisted_2$5 = { class: "custom-block" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1$9,
    createBaseVNode("p", _hoisted_2$5, toDisplayString(_ctx.t("hello")), 1)
  ], 64);
}
if (typeof block0 === "function")
  block0(_sfc_main$9);
const CustomBlock = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$1]]);
const Slotted_vue_vue_type_style_index_0_scoped_63efc739_lang = "";
const _sfc_main$8 = {};
const _withScopeId$1 = (n) => (pushScopeId("data-v-63efc739"), n = n(), popScopeId(), n);
const _hoisted_1$8 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", null, ":slotted", -1));
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1$8,
    renderSlot(_ctx.$slots, "default")
  ]);
}
const Slotted = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render], ["__scopeId", "data-v-63efc739"]]);
const _hoisted_1$7 = /* @__PURE__ */ createBaseVNode("h2", null, "Scan Deps from <script setup lang=ts> blocks", -1);
const _hoisted_2$4 = { class: "scan" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ScanDep",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$7,
        createBaseVNode("div", _hoisted_2$4, toDisplayString(typeof unref(debounce) === "function" ? "ok" : "error"), 1)
      ], 64);
    };
  }
});
const foo = "success";
const _hoisted_1$6 = /* @__PURE__ */ createBaseVNode("h2", null, "Ts Import", -1);
const _hoisted_2$3 = { class: "ts-import" };
const _hoisted_3$3 = { class: "ts-import2" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TsImport",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$6,
        createBaseVNode("p", _hoisted_2$3, toDisplayString(unref(foo)), 1),
        createBaseVNode("p", _hoisted_3$3, toDisplayString(unref(foo)), 1)
      ], 64);
    };
  }
});
const _hoisted_1$5 = /* @__PURE__ */ createBaseVNode("h2", null, "Async Component", -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("p", null, "Testing TLA and for await compatibility with esbuild", -1);
const _hoisted_3$2 = { class: "async-component" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AsyncComponent",
  async setup(__props) {
    let __temp, __restore;
    let test = "";
    const forAwaitTest = async (array) => {
      for await (const value of array) {
        test += value;
      }
    };
    [__temp, __restore] = withAsyncContext(() => forAwaitTest([Promise.resolve("a"), Promise.resolve("b")]).catch(() => {
    })), await __temp, __restore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$5,
        _hoisted_2$2,
        createBaseVNode("p", _hoisted_3$2, "ab == " + toDisplayString(unref(test)), 1)
      ], 64);
    };
  }
});
const _hoisted_1$4 = /* @__PURE__ */ createBaseVNode("h2", null, "Reactivity Transform", -1);
const _sfc_main$4 = {
  __name: "ReactivityTransform",
  props: ["foo"],
  setup(__props) {
    let a = $ref(0);
    const inc = () => a++;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$4,
        createBaseVNode("p", null, "Prop foo: " + toDisplayString(_ctx.bar), 1),
        createBaseVNode("button", {
          class: "ref-transform",
          onClick: inc
        }, toDisplayString(unref(a)), 1)
      ], 64);
    };
  }
};
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("h2", null, "Setup Import Template", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1$3,
    createBaseVNode("button", {
      class: "setup-import-template",
      onClick: $setup.inc
    }, toDisplayString($setup.count), 1)
  ], 64);
}
const _sfc_main$3 = {
  __name: "SetupImportTemplate",
  setup(__props, { expose }) {
    expose();
    let count = $ref(0);
    const inc = () => count++;
    const __returned__ = { get count() {
      return count;
    }, set count(v) {
      count = v;
    }, inc };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const SetupImportTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", render]]);
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("h2", null, "worker template error match", -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("code", null, " const worker = new Worker(new URL('./worker.js', import.meta.url)) ", -1);
const _hoisted_3$1 = { class: "vue-worker" };
const _sfc_main$2 = {
  __name: "worker",
  setup(__props) {
    const message = ref("");
    const worker = new Worker(new URL("/assets/workerTest.45d642c6.js", self.location));
    worker.addEventListener("message", (ev) => {
      message.value = ev.data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$2,
        _hoisted_2$1,
        createBaseVNode("div", _hoisted_3$1, toDisplayString(message.value), 1)
      ], 64);
    };
  }
};
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "comments" }, null, -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h1", null, "Vue SFCs", -1);
const _hoisted_3 = { class: "hmr-block" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "slotted" }, "this should be red", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Main",
  setup(__props) {
    const time = ref("loading...");
    window.addEventListener("load", () => {
      setTimeout(() => {
        const [entry] = performance.getEntriesByType("navigation");
        time.value = `loaded in ${entry.duration.toFixed(2)}ms.`;
      }, 0);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$1,
        _hoisted_2,
        createBaseVNode("pre", null, toDisplayString(time.value), 1),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_sfc_main$e)
        ]),
        createVNode(_sfc_main$d),
        createVNode(PreProcessors),
        createVNode(CssModules),
        createVNode(Assets),
        createVNode(CustomBlock),
        createVNode(SrcImport),
        createVNode(Slotted, null, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        }),
        createVNode(_sfc_main$7),
        createVNode(_sfc_main$6),
        (openBlock(), createBlock(Suspense, null, {
          default: withCtx(() => [
            createVNode(_sfc_main$5)
          ]),
          _: 1
        })),
        createVNode(_sfc_main$4, { foo: time.value }, null, 8, ["foo"]),
        createVNode(SetupImportTemplate),
        createVNode(_sfc_main$2)
      ], 64);
    };
  }
});
const _style_0 = "\n.custom-element[data-v-d74cff17] {\n  color: green;\n}\n";
const _withScopeId = (n) => (pushScopeId("data-v-d74cff17"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", null, "Custom Element", -1));
const _sfc_main = {
  __name: "CustomElement.ce",
  props: {
    label: String
  },
  setup(__props) {
    const state = reactive({ count: 0 });
    onBeforeMount(() => {
      state.count = 1;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createBaseVNode("button", {
          class: "custom-element",
          type: "button",
          onClick: _cache[0] || (_cache[0] = ($event) => state.count++)
        }, toDisplayString(__props.label) + ": " + toDisplayString(state.count), 1)
      ], 64);
    };
  }
};
const CustomElement = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__scopeId", "data-v-d74cff17"]]);
createApp(_sfc_main$1).mount("#app");
customElements.define("custom-element", defineCustomElement(CustomElement));
