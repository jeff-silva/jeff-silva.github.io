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

          <v-dialog max-width="600" scrollable v-if="o.meta.images.length > 0">
            <template #activator="bind">
              <br />
              <div class="d-flex" style="gap: 10px; cursor: pointer" v-bind="bind.props">
                <template v-for="oo in o.meta.images">
                  <div
                    :style="`background:url(${oo.file}) center center no-repeat; background-size: cover; width:100px; height:100px; border-radius:8px;`"
                  ></div>
                </template>
              </div>
            </template>

            <template #default="bind">
              <v-card>
                <v-card-title>{{ o.name }}</v-card-title>
                <v-card-text class="pa-0">
                  <v-carousel
                    :hide-delimiters="o.meta.images.length <= 1"
                    :show-arrows="o.meta.images.length > 1"
                    height="70vh"
                  >
                    <template v-for="oo in o.meta.images">
                      <v-carousel-item style="position: relative">
                        <!-- <app-img-zoom :src="oo.file" style="width: 100%; height: 100%" /> -->
                        <div style="height: 100%; overflow: auto">
                          <img :src="oo.file" style="width: 100%" />
                        </div>
                      </v-carousel-item>
                    </template>
                  </v-carousel>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn class="bg-primary" @click="bind.isActive.value = false">Ok</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </template>
    </div>
  </v-container>
</template>

<script setup>
const helper = useHelper();

const props = defineProps({
  resume: { type: Object, default: () => ({}) },
});
</script>
