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
  </v-container>
</template>

<script setup>
const props = defineProps({
  resume: { type: Object, default: () => ({}) },
});
</script>
