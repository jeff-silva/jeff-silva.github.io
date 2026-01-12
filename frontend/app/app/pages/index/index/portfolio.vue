<template>
  <v-container class="page-index-markdown px-0" fluid>
    <div class="markdown-body">
      <h1 class="markdown-h1"><span class="hash">#</span> Portfólio</h1>

      <div
        v-for="(o, i) in resume.data.projects"
        :key="i"
        class="project-entry fade-in"
        :style="`animation-delay: ${i * 100}ms`"
      >
        <v-divider class="my-6 border-dashed border-opacity-25" v-if="i > 0"></v-divider>

        <h2 class="markdown-h2">
          <span class="hash">##</span>
          <a :href="o.url || null" target="_blank" class="project-link">{{ o.name }}</a>
          <v-icon icon="material-symbols:open-in-new" size="x-small" class="ms-2 text-disabled" v-if="o.url"></v-icon>
        </h2>

        <div v-if="o.description" class="project-description ps-4 border-s-2 mt-2">
          <div v-html="helper.markdownToHtml(o.description)"></div>
        </div>

        <div v-if="o.meta && o.meta.images && o.meta.images.length > 0" class="image-gallery mt-4 ps-4">
          <v-dialog max-width="900" scrollable>
            <template #activator="{ props }">
              <div class="d-flex flex-wrap gap-2">
                <div
                  v-for="(img, idx) in o.meta.images"
                  :key="idx"
                  v-bind="props"
                  class="image-thumbnail"
                  :style="`background-image: url(${img.file})`"
                  v-ripple
                >
                  <div class="image-overlay">
                    <v-icon icon="mdi-magnify" color="white"></v-icon>
                  </div>
                </div>
              </div>
            </template>

            <template #default="{ isActive }">
              <v-card theme="dark" class="image-viewer-card">
                <v-card-title class="d-flex justify-space-between align-center pa-4 bg-surface-variant">
                  <span>{{ o.name }}</span>
                  <v-btn icon="mdi-close" variant="text" @click="isActive.value = false"></v-btn>
                </v-card-title>
                <v-card-text class="pa-0 fill-height bg-black d-flex align-center justify-center">
                  <v-carousel
                    :hide-delimiters="o.meta.images.length <= 1"
                    :show-arrows="o.meta.images.length > 1"
                    height="80vh"
                    hide-delimiter-background
                    show-arrows-on-hover
                  >
                    <v-carousel-item v-for="(img, idx) in o.meta.images" :key="idx">
                      <div class="d-flex align-center justify-center fill-height">
                        <lib-panzoom style="width: 100%">
                          <img :src="img.file" class="image-full" />
                        </lib-panzoom>
                      </div>
                    </v-carousel-item>
                  </v-carousel>
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </div>

      <!-- End of file indicator -->
      <div class="mt-12 text-disabled font-italic text-caption"><span class="hash">~</span> end of file</div>
    </div>
  </v-container>
</template>

<script setup>
const helper = useHelper();

const props = defineProps({
  resume: { type: Object, default: () => ({}) },
});
</script>

<style scoped>
.markdown-body {
  font-family: "Fira Code", "Consolas", "Monaco", "Courier New", monospace; /* Fallback to monospace for the editor feel */
  color: #e0e0e0;
  max-width: 850px;
  margin: 0 auto;
}

/* Headings */
.hash {
  color: #569cd6; /* VS Code Blue */
  margin-right: 0.5rem;
  font-weight: normal;
  opacity: 0.7;
}

.markdown-h1 {
  font-family: "Inter", system-ui, sans-serif; /* Cleaner font for headings */
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #ffffff;
  letter-spacing: -0.5px;
}

.markdown-h2 {
  font-family: "Inter", system-ui, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #dcdcdc;
  display: flex;
  align-items: center;
}

/* Links */
.project-link {
  color: #4fc1ff; /* Light Blue */
  text-decoration: none;
  transition: color 0.2s;
}
.project-link:hover {
  text-decoration: underline;
  color: #9cdcfe;
}

/* Description */
.project-description {
  border-left-color: #333 !important; /* Overriding Vuetify border color if needed */
  color: #cccccc;
  font-family: "Inter", system-ui, sans-serif;
  line-height: 1.6;
  font-size: 1rem;
}

/* Deep selector for computed HTML content */
.project-description :deep(p) {
  margin-bottom: 0.75rem;
}
.project-description :deep(strong),
.project-description :deep(b) {
  color: #ce9178; /* VS Code String/Key color - adds a nice contrast */
  font-weight: 600;
}

/* Images */
.gap-2 {
  gap: 12px;
}
.image-thumbnail {
  width: 120px;
  height: 80px;
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s;
}
.image-thumbnail:hover {
  transform: translateY(-2px);
  border-color: #4fc1ff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
.image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: opacity;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
}
.image-thumbnail:hover .image-overlay {
  opacity: 1;
}

.image-full {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Animations */
.fade-in {
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
  transform: translateY(10px);
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
