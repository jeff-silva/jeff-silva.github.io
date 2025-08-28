<template>
  <v-container class="page-index-markdown">
    <h2>Skills</h2>

    <!-- <v-table>
      <tbody>
        <template v-for="o in resume.data.skills.filter((o) => o.keywords.includes('Main Stack'))">
          <tr>
            <td class="py-1 pe-4">{{ o.name }}</td>
            <td class="py-1">
              <div class="d-flex" style="gap: 10px">
                <template v-for="s in resume.rating(o.rating, 10)">
                  <v-icon
                    :icon="s.checked ? 'material-symbols-light:kid-star' : 'material-symbols-light:kid-star-outline'"
                  />
                </template>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </v-table> -->

    <!-- <br /> -->
    <!-- <h2>Outras skills</h2> -->

    <div class="d-flex flex-wrap" style="gap: 10px">
      <template v-for="o in resume.data.skills">
        <v-chip>{{ o.name }}</v-chip>
      </template>
    </div>

    <!-- <app-monaco
      style="width: 100%; min-height: 200px"
      :model-value="
        [
          `\n`,
          `const skills = `,
          JSON.stringify(
            resume.data.skills.map((o) => {
              return o.name;
            }),
            null,
            2
          ),
          `;`,
        ].join(``)
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
    /> -->
  </v-container>
</template>

<script setup>
const props = defineProps({
  resume: { type: Object, default: () => ({}) },
});
</script>
