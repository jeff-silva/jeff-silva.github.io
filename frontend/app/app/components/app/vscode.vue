<template>
  <vscode-demo class="app-vscode">
    <slot></slot>
  </vscode-demo>
</template>

<script setup>
const $props = defineProps({
  modelValue: { type: String, default: "" },
  theme: { type: String, default: "dark" },
});

const $emit = defineEmits(["update:modelValue"]);

let editor;

const app = reactive({
  ready: false,
  init() {
    let theme = localStorage.getItem("vscode-playground:theme") || null;
    if (!theme) localStorage.setItem("vscode-playground:theme", (theme = "dark"));
  },
});

onMounted(() => {
  const i = setInterval(() => {
    if (!app.ready) return;
    clearInterval(i);
    app.init();
  }, 100);
});

watch(
  () => $props.modelValue,
  (modelValueNew) => {
    editor.setValue(modelValueNew);
  }
);

useHead({
  script: [
    {
      key: "vscode-elements",
      src: "https://cdn.jsdelivr.net/npm/@vscode-elements/elements@1.9.0/dist/bundled.js",
      type: "module",
      onload: () => {
        app.ready = true;
      },
    },
    {
      key: "vscode-elements-playground",
      src: "https://cdn.jsdelivr.net/npm/@vscode-elements/webview-playground/dist/index.js",
      type: "module",
    },
  ],
  link: [
    {
      key: "vscode-codicon",
      rel: "stylesheet",
      href: "https://microsoft.github.io/vscode-codicons/dist/codicon.css",
    },
  ],
});
</script>

<style>
vscode-demo.app-vscode::part(header) {
  display: none !important;
}

vscode-demo.app-vscode::part(canvas) {
  top: 0;
}
</style>
