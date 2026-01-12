<template>
  <v-container class="page-index-markdown px-0" fluid>
    <div class="markdown-body">
      <h1 class="markdown-h1"><span class="hash">#</span> Experiência</h1>

      <div
        v-for="(o, i) in resume.data.work"
        :key="i"
        class="work-entry fade-in"
        :style="`animation-delay: ${i * 100}ms`"
      >
        <v-divider class="my-6 border-dashed border-opacity-25" v-if="i > 0"></v-divider>

        <h2 class="markdown-h2">
          <span class="hash">##</span>
          <span class="position">{{ o.position }}</span>
          <span class="keyword mx-2">in</span>
          <span class="company">{{ o.name }}</span>
        </h2>

        <!-- <div class="comment text-disabled font-italic mb-2 ps-4">
          // {{ helper.formatDateBetween(o.startDate, o.endDate) }}
        </div> -->

        <div v-if="o.summary" class="work-summary ps-4 border-s-2 mt-2">
          <div v-html="helper.markdownToHtml(o.summary)"></div>
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
  font-family: "Fira Code", "Consolas", "Monaco", "Courier New", monospace;
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
  font-family: "Inter", system-ui, sans-serif;
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
  flex-wrap: wrap;
}

.position {
  color: #4fc1ff; /* Light Blue */
}

.keyword {
  color: #c586c0; /* VS Code Purple for 'in' keyword logic */
  font-family: "Fira Code", monospace;
  font-size: 0.9em;
  font-weight: normal;
}

.company {
  color: #9cdcfe; /* Lighter blue */
}

/* Summary - styled like documentation/comments block */
.work-summary {
  border-left-color: #333 !important;
  color: #cccccc;
  font-family: "Inter", system-ui, sans-serif;
  line-height: 1.6;
  font-size: 1rem;
}

/* Deep selector for computed HTML content */
.work-summary :deep(p) {
  margin-bottom: 0.75rem;
}
.work-summary :deep(strong),
.work-summary :deep(b) {
  color: #ce9178; /* VS Code String/Key color */
  font-weight: 600;
}
.work-summary :deep(a) {
  color: #4fc1ff;
  text-decoration: none;
}
.work-summary :deep(a):hover {
  text-decoration: underline;
}

.comment {
  font-family: "Fira Code", monospace;
  font-size: 0.85rem;
  color: #6a9955; /* VS Code Comment Green */
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
