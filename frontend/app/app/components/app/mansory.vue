<template>
  <div :style="`display:flex; gap: ${props.gap}; width:100%;`">
    <template v-for="(items, column) in chunk.items">
      <div
        :style="`
          display: flex;
          flex-direction: column;
          min-width: ${100 / chunk.cols}% !important;
          max-width: ${100 / chunk.cols}% !important;
          overflow: hidden;
          gap: ${props.gap};
        `"
      >
        <template v-for="(item, index) in items">
          <div>
            <slot name="item" v-bind="slotBind({ item, column, index })"></slot>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  cols: { type: Number, default: 3 },
  gap: { type: String, default: "15px" },
  items: { type: Array, default: () => [] },
});

const chunk = computed(() => {
  const cols = Math.min(4, Math.max(1, props.cols));
  const size = Math.ceil(props.items.length / props.cols);
  const items = Array.from({ length: props.cols }, (v, i) => props.items.slice(i * size, i * size + size));
  return { cols, items };
});

const slotBind = (merge = {}) => {
  return { ...merge };
};
</script>
