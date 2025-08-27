<template>
  <v-app>
    <v-layout>
      <!-- Loading -->
      <v-container v-if="!resume.ready" class="d-flex align-center justify-center">
        <v-icon icon="svg-spinners:180-ring-with-bg" size="100" color="primary" />
      </v-container>

      <div class="d-flex flex-column py-5" style="width: 100vw !important;" v-if="resume.ready">
        <v-container>
          <h1>{{ resume.data.basics.name }}</h1>

          <div>
            <strong>{{ resume.data.basics.label }}</strong>
          </div>
          
          <div>
            <strong>{{ [ resume.data.basics.location.city, resume.data.basics.location.state, resume.data.basics.location.country ].filter(v => !!v).join(', ') }}</strong>
          </div>

          <div
            v-if="resume.data.basics.summarySmall"
            v-html="resume.data.basics.summarySmall"
            style="white-space: pre-line"
            class="mt-3"
          ></div>
        </v-container>
          
        <v-container>
          <h2 class="mb-2">Links</h2>
          <template v-for="o in [ ...resume.data.contacts, ...resume.data.links ]">
            <div>&bullet; &nbsp; {{ o.name }}: <a :href="o.url">{{ o.url }}</a></div>
          </template>
        </v-container>

        <v-container>
          <h2 class="mb-2">Conhecimentos</h2>
          <div>{{ resume.data.skills
            .filter(o => o.show)
            .map(o => o.name)
            .sort((a, b) => {
              if (a>b) return 1;
              if (a<b) return -1;
              return 0;
            })
            .join(', ')
          }}</div>
        </v-container>
        
        <v-container>
          <h2 class="mb-2">Experiência</h2>
          <div class="d-flex flex-column" style="gap:40px;">
            <template v-for="o in resume.data.work.filter(o => o.show)">
              <div>
                <div>&bullet; &nbsp;<strong>{{ o.position }} &nbsp; | &nbsp; {{ o.name }}</strong></div>
                <div>{{ [ o.location.city, o.location.state, o.location.country ].filter(v => !!v).join(', ') }}</div>
                <div class="d-flex align-center mb-2">
                  <div>{{ o.date.start.formatted || "Atualmente" }}</div>
                  <div class="px-2">~</div>
                  <div>{{ o.date.final.formatted || "Atualmente" }}</div>
                </div>
  
                <div v-if="o.summary">
                  <small v-html="o.summary" style="white-space: break-spaces;"></small>
                </div>
              </div>
            </template>
          </div>
        </v-container>
        
        <v-container>
          <h2 class="mb-2">Qualidades</h2>
          <div>&bullet; &nbsp; Visão de Usuário</div>
          <div>&bullet; &nbsp; Comunicação</div>
          <div>&bullet; &nbsp; Capacidade de Adaptação</div>
        </v-container>

        <!-- <v-container id="skills">
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
        </v-container> -->

        <!-- <v-container id="experiencias">
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
        </v-container> -->
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
