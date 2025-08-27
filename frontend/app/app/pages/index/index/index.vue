<template>
  <div>
    <v-container class="page-index-markdown">
      <app-monaco
        style="width: 100%; min-height: 200px"
        :model-value="
          [
            ``,
            `const dev = new class FullStackDeveloper`,
            `{`,
            `   name = '${resume.data.basics.name}';`,
            `   description = '${resume.data.basics.label}';`,
            `   place = '` +
              [resume.data.basics.location.city, resume.data.basics.location.state].filter((v) => !!v).join(', ') +
              `';`,
            `}`,
            ``,
          ].join(`\n`)
        "
        :options="{
          language: 'javascript',
          readOnly: true,
          wordWrap: 'on',
        }"
      />
      <br />
      <div v-html="h.markdownToHtml(resume.data.basics.summary)"></div>
    </v-container>
  </div>
</template>

<script setup>
const props = defineProps({
  resume: { type: Object, default: () => ({}) },
});
const h = useHelper();
</script>
