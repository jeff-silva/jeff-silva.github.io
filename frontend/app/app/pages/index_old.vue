<template>
  <v-app>
    <v-layout>
      <!-- Loading -->
      <v-container v-if="!resume.ready" class="d-flex align-center justify-center">
        <v-icon icon="svg-spinners:180-ring-with-bg" size="100" color="primary" />
      </v-container>

      <v-defaults-provider :defaults="menu.defaults">
        <div style="position: fixed; top: 15px; right: 15px" aria-label="Navegação">
          <v-menu location="start">
            <template #activator="bind">
              <v-btn :icon="menu.icon" v-bind="bind.props" v-if="!display.mobile.value" />
            </template>

            <v-defaults-provider :defaults="menu.defaults">
              <div class="d-flex align-center pe-4" style="gap: 15px">
                <template v-for="o in menu.items">
                  <v-btn v-bind="o" />
                </template>
              </div>
            </v-defaults-provider>
          </v-menu>

          <v-btn :icon="menu.icon" v-if="display.mobile.value" @click="menu.show = true" aria-label="Navegação" />
        </div>
      </v-defaults-provider>

      <v-navigation-drawer
        v-model="menu.show"
        v-if="display.mobile.value"
        location="end"
        width="300"
        style="position: fixed; top: 0"
      >
        <v-card-title>Seções</v-card-title>
        <v-list aria-label="Seções">
          <template v-for="o in menu.items">
            <v-list-item v-bind="o">
              <v-icon v-if="o.icon" :icon="o.icon" />
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>

      <!-- <v-container>
        <h1>Site em manutenção</h1>
        <p>Voltarei em alguns minutos</p>
      </v-container> -->

      <div class="d-flex flex-column py-5" style="width: 100vw !important; gap: 20px" v-if="resume.ready">
        <v-container id="info">
          <h1>{{ resume.data.basics.name }}</h1>
          <h2>{{ resume.data.basics.label }}</h2>
          <br />

          <div class="d-flex flex-wrap align-center" style="gap: 10px">
            <template v-for="o in resume.data.links">
              <a :href="o.url" target="_blank" :aria-label="o.name">
                <img :src="o.icon" alt="" height="28" loading="lazy" />
              </a>
            </template>
          </div>

          <div class="d-flex flex-wrap align-center" style="gap: 10px">
            <template v-for="o in resume.data.contacts">
              <a :href="o.url" target="_blank" :aria-label="o.name">
                <img :src="o.icon" alt="" height="28" loading="lazy" />
              </a>
            </template>
          </div>
          <br />

          <div
            v-if="resume.data.basics.summary"
            v-html="resume.data.basics.summary.replace(/\n/g, '<br />')"
            style="white-space: pre-line"
          ></div>
        </v-container>

        <v-container id="skills">
          <h1>Skills</h1>
          <br />

          <div class="d-flex flex-column" style="gap: 20px">
            <template v-for="o in resume.data.skills">
              <v-row no-gutters class="align-center">
                <v-col cols="12" md="2">{{ o.name }}</v-col>
                <v-col cols="10" md="9">
                  <v-progress-linear :model-value="o.rating" height="5" :aria-label="o.name" />
                </v-col>
                <v-col cols="2" md="1" class="text-center">{{ o.rating }} %</v-col>
              </v-row>
            </template>
          </div>
        </v-container>

        <v-container id="experiencias">
          <h1>Experiências</h1>
          <br />

          <div class="d-flex flex-column" style="gap: 35px">
            <template v-for="o in resume.data.work">
              <div class="ps-5" style="border-left: solid 5px #444">
                <h2 class="mb-2">{{ o.position }}</h2>

                <h3 class="d-flex align-center" v-if="o.companyName">
                  <v-icon icon="material-symbols:alternate-email" size="16" class="me-1" />
                  <span>{{ o.name }}</span>
                </h3>

                <div class="d-flex align-center">
                  <v-icon icon="material-symbols:calendar-month" size="16" class="me-1" />
                  <div>{{ o.date.start.formatted || "Atualmente" }}</div>
                  <div class="px-2">~</div>
                  <div>{{ o.date.final.formatted || "Atualmente" }}</div>
                </div>

                <div class="d-flex align-center" v-if="o.location.formatted">
                  <v-icon icon="ic:round-place" size="16" class="me-1" />
                  <span>{{ o.location.formatted }}</span>
                </div>

                <div v-if="o.summary" v-html="o.summary.replace(/\n/g, '<br />')" class="mt-3"></div>
              </div>
            </template>
          </div>
        </v-container>

        <v-container id="projetos">
          <h1>Projetos</h1>
          <br />

          <v-dialog v-model="projectImages.dialog" width="1000">
            <v-carousel v-model="projectImages.dialog" height="auto" :hide-delimiters="true" #default="bind">
              <template v-for="item in resume.projectsImages">
                <v-carousel-item :value="item.image.url">
                  <div class="h-100 px-md-10">
                    <div class="h-100 px-md-10 d-flex align-center">
                      <v-row
                        no-gutters
                        class="bg-white rounded-lg elevation-10"
                        style="position: relative; max-height: 100%; overflow: hidden"
                      >
                        <v-col cols="12" md="7" style="max-height: 80vh; overflow: auto; position: relative">
                          <v-btn
                            flat
                            icon="mdi-close"
                            size="30"
                            @click="projectImages.close()"
                            class="d-md-none"
                            style="position: fixed; top: 10px; right: 20px"
                          />

                          <img :src="item.image.url" alt="" style="width: 100%" />

                          <div
                            class="d-md-none text-white"
                            style="position: fixed; left: 0; bottom: 0; width: 100%; background: #000000bb"
                          >
                            <v-card-title class="font-weight-bold">{{ item.project.name }}</v-card-title>
                            <v-card-text class="d-flex flex-column" style="gap: 15px">
                              <div class="d-flex align-center">
                                <v-icon icon="material-symbols:calendar-month" size="16" class="me-1" />
                                <div>{{ item.project.date.start.formatted || "Atualmente" }}</div>
                                <div class="px-2">~</div>
                                <div>{{ item.project.date.final.formatted || "Atualmente" }}</div>
                              </div>

                              <div
                                v-if="item.project.description"
                                v-html="item.project.description.replace(/\n/g, '<br />')"
                              ></div>

                              <v-btn v-if="item.project.url" color="white" :href="item.project.url" target="_blank">
                                Visualizar
                              </v-btn>
                            </v-card-text>
                          </div>
                        </v-col>
                        <v-col
                          cols="12"
                          md="5"
                          class="d-none d-md-block bg-grey-lighten-3"
                          style="max-height: 80vh; overflow: auto"
                        >
                          <v-card-title class="d-flex align-center">
                            <div class="flex-grow-1 font-weight-bold">{{ item.project.name }}</div>
                            <v-btn flat icon="mdi-close" size="30" @click="projectImages.close()" />
                          </v-card-title>
                          <v-card-text class="d-flex flex-column" style="gap: 15px">
                            <div class="d-flex align-center">
                              <v-icon icon="material-symbols:calendar-month" size="16" class="me-1" />
                              <div>{{ item.project.date.final.formatted || "Atualmente" }}</div>
                            </div>

                            <h4 v-if="item.image.summary" v-html="item.image.summary.replace(/\n/g, '<br />')"></h4>

                            <div
                              v-if="item.project.summary"
                              v-html="item.project.summary.replace(/\n/g, '<br />')"
                            ></div>

                            <v-btn
                              v-if="item.project.url"
                              color="primary"
                              theme="light"
                              variant="outlined"
                              :href="item.project.url"
                              target="_blank"
                            >
                              Visualizar
                            </v-btn>
                          </v-card-text>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                </v-carousel-item>
              </template>
            </v-carousel>
          </v-dialog>

          <app-mansory :cols="3" :items="resume.projectsImages">
            <template #item="bind">
              <v-card @click="projectImages.open(bind.item.image)">
                <v-card-title>{{ bind.item.project.title }}</v-card-title>
                <img :src="bind.item.image.url" alt="" style="width: 100%" />
              </v-card>
            </template>
          </app-mansory>
        </v-container>
      </div>
    </v-layout>
  </v-app>
</template>

<script setup>
import { ref, reactive, computed, onMounted, getCurrentInstance } from "vue";
import axios from "axios";

const currentInstance = getCurrentInstance();

import { useDisplay } from "vuetify";
const display = useDisplay();

import useVuetifyThemeSwitcher from "@/composables/useVuetifyThemeSwitcher";
const vuetifyThemeSwitcher = useVuetifyThemeSwitcher();

const resume = reactive({
  ready: false,
  data: false,
  async load() {
    try {
      let { data } = await axios.get(
        "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/linkedin-resume.json"
      );
      resume.data = data;
      resume.data.skills = resume.data.skills.filter((o) => o.show);
      resume.data.work = resume.data.work.filter((o) => o.show);
      useSeoMeta({
        title: data.profile.headline,
        ogTitle: data.profile.headline,
        description: data.profile.headline,
        ogDescription: data.profile.headline,
        ogImage: "",
        twitterCard: "summary_large_image",
      });
      // projectImages.open(resume.data.projects[0].meta.images[0]);
    } catch (err) {}
    resume.ready = true;
  },
  projectsImages: computed(() => {
    let projectsImages = [];

    resume.data.projects.map((project) => {
      project.images.map((image) => {
        projectsImages.push({ image, project });
      });
    });

    return projectsImages;
  }),
});

const projectsModal = ref(null);

const menu = reactive({
  show: false,
  icon: "solar:hamburger-menu-outline",
  items: [
    { text: "Info", href: "#info" },
    { text: "Skills", href: "#skills" },
    { text: "Experiências", href: "#experiencias" },
    { text: "Projetos", href: "#projetos" },
    {
      icon: computed(() => {
        return vuetifyThemeSwitcher.current == "light" ? "material-symbols:dark-mode" : "material-symbols:light-mode";
      }),
      onClick: (ev) => {
        vuetifyThemeSwitcher.switch();
      },
    },
  ],
  defaults: {
    VBtn: { flat: true },
  },
});

const projectImages = reactive({
  dialog: false,
  open(image) {
    projectImages.dialog = image.url;
  },
  close() {
    projectImages.dialog = false;
  },
});

useSeoMeta({
  title: "Loading",
  ogTitle: "Loading",
  description: "Loading",
  ogDescription: "Loading",
  ogImage: "",
  twitterCard: "summary_large_image",
});

resume.load();
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

html,
body {
  font-family: "Lato", sans-serif;
  scroll-behavior: smooth !important;
  -webkit-scroll-behavior: smooth !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Playfair Display", serif;
  font-weight: 700;
}

a,
a:link,
a:visited,
a:hover {
  color: initial !important;
  font-family: "Playfair Display", serif !important;
}

.v-container {
  width: 800px;
  max-width: 90vw;
}

.ff-playfair {
  font-family: "Playfair Display", serif;
}

.ff-lato {
  font-family: "Lato", sans-serif;
}

[test],
[test] * {
  outline: solid 1px red !important;
}
</style>
