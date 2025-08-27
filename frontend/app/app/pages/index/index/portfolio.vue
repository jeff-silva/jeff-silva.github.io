<template>
  <v-container class="page-index-markdown">
    <div>
      <h2>Portfólio</h2>
      <template v-for="(o, i) in resume.data.projects">
        <div>
          <div class="border-t my-6"></div>
          <h3>
            <a :href="o.url || null" target="_blank" style="color: #fff">{{ o.name }}</a>
          </h3>
          <!-- <div>{{ helper.formatDateBetween(o.date) }}</div> -->
          <div v-if="o.description" v-html="helper.markdownToHtml(o.description)" class="my-2 ps-5"></div>
          <pre>{{ o.meta.images }}</pre>

          <!-- <v-dialog max-width="600" v-if="o.images.length > 0">
            <template #activator="bind">
              <div class="d-flex" style="gap: 10px; cursor: pointer" v-bind="bind.props">
                <template v-for="oo in o.images">
                  <div
                    :style="`background:url(${oo.url}) center center no-repeat; background-size: cover; width:100px; height:100px; border-radius:8px;`"
                  ></div>
                </template>
              </div>
            </template>

            <template #default="bind">
              <v-card>
                <v-card-title>{{ o.name }}</v-card-title>
                <v-carousel :hide-delimiters="o.images.length <= 1" :show-arrows="o.images.length > 1" :height="null">
                  <template v-for="oo in o.images">
                    <v-carousel-item style="position: relative; z-index: -1">
                      <app-img-zoom :src="oo.url" style="width: 100%; height: 100%" />
                    </v-carousel-item>
                  </template>
                </v-carousel>
                <v-card-actions class="justify-end">
                  <v-btn class="bg-primary" @click="bind.isActive.value = false">Ok</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog> -->
        </div>
      </template>

      <pre>{{ resume.data }}</pre>
    </div>
  </v-container>
</template>

<script setup>
const helper = useHelper();

const props = defineProps({
  resume: { type: Object, default: () => ({}) },
});
</script>
