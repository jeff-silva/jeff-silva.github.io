<template>
    <div class="zoomist-container" ref="zoomistRef">
        <div class="zoomist-wrapper">
            <div class="zoomist-image">
                <img :src="props.src" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
        </div>
    </div>
</template>

<script setup>
import 'zoomist/css';
import Zoomist from "zoomist";
const zoomistRef = ref(null);

const props = defineProps({
  src: { type: [String], default: "" },
});

onMounted(() => {
    new Zoomist(zoomistRef.value, {
        minScale: 1,
        maxScale: 5,
        slider: true,
        zoomer: true,
    });
});
</script>
