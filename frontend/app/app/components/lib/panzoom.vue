<template>
  <div style="position: relative; overflow: hidden">
    <div ref="zoomRef">
      <slot name="default"></slot>
    </div>

    <slot name="info"></slot>

    <div class="lib-panzoom__actions">
      <button type="button" @click="lib.instance.reset()">Reset</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  options: { type: Object, default: () => ({}) },
});

const emit = defineEmits(["ready"]);

const zoomRef = ref(null);

const scope = (merge = {}) => {
  return { ...merge };
};

const lib = reactive({
  id: "lib-panzoom-" + Math.round(Math.random() * 9999),
  instance: null,
  init() {
    const pan = Panzoom(zoomRef.value, {
      minScale: 1,
      ...props.options,
    });

    zoomRef.value.parentNode.addEventListener("wheel", pan.zoomWithWheel);

    lib.instance = pan;
  },
});

onMounted(() => {
  const i = setInterval(() => {
    if (typeof Panzoom == "undefined") return;
    clearInterval(i);
    lib.init();
    emit("ready", scope());
  }, 100);
});

useHead({
  script: [
    {
      key: "panzoom",
      src: "https://unpkg.com/@panzoom/panzoom@4.6.1/dist/panzoom.min.js",
    },
  ],
  link: [],
});
</script>

<style>
.lib-panzoom__actions {
  position: absolute;
  bottom: 5px;
  right: 5px;
}

.lib-panzoom__actions > button {
  background: #00000077;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}

.lib-panzoom__actions > button:hover {
  background: #00000055;
}
</style>
