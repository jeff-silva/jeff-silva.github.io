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
          theme: 'twilight', // clouds-midnight, github-dark, merbivore-soft, merbivore, twilight
          readOnly: true,
          domReadOnly: true,
          wordWrap: 'on',
          renderLineHighlight: 'none',
          renderValidationDecorations: 'off',
          renderLineHighlightOnlyWhenFocus: true,
          occurrencesHighlight: false,
          selectionHighlight: false,
        }"
      />
      <br />
      <div v-html="h.markdownToHtml(resume.data.basics.summary)" class="ps-4"></div>
    </v-container>
  </div>
</template>

<script setup>
const props = defineProps({
  resume: { type: Object, default: () => ({}) },
});
const h = useHelper();
</script>
