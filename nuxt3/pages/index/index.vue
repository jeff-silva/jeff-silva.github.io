<template>
  <v-app theme="dark">
    <v-navigation-drawer rail permanent>
      <v-defaults-provider
        :defaults="{
          VBtn: { stacked: true, flat: true, size: 50 },
          VIcon: { size: 25 },
        }"
      >
        <div class="h-100 d-flex align-center flex-column py-2" style="gap: 5px">
          <template v-for="id in ['contacts', 'skills', 'work', 'portfolio', null, 'bio']">
            <template v-if="id === null">
              <v-spacer />
            </template>
            <template v-else>
              <v-tooltip :text="resume.sections[id]['title']">
                <template #activator="bind">
                  <v-btn v-bind="bind.props" :to="resume.sections[id]['to']">
                    <v-icon :icon="resume.sections[id]['icon']" />
                  </v-btn>
                </template>
              </v-tooltip>
            </template>
          </template>
        </div>
      </v-defaults-provider>
    </v-navigation-drawer>

    <v-main>
      <div v-if="resume.ready" style="display: flex; flex-direction: column; height: 100vh; overflow: auto">
        <div>
          <v-tabs density="compact" variant="tonal">
            <template v-for="o in resume.sections">
              <v-tab
                v-if="typeof o == 'object'"
                variant="tonal"
                style="text-transform: none; font-size: 12px; color: #bbb"
                :to="o.to"
                >{{ o.filename }}</v-tab
              >
            </template>
          </v-tabs>
        </div>

        <div style="flex-grow: 1; overflow: auto; position: relative">
          <nuxt-page :resume="resume" />
        </div>

        <div class="d-flex align-center pe-2" style="gap: 10px; font-size: 10px; color: #aaa">
          <div class="bg-teal pa-1">WSL: Ubuntu</div>
          <div class="d-flex">
            <v-icon icon="mingcute:git-branch-line" />
            main
          </div>
          <div class="d-flex">
            <v-icon icon="ic:outline-history" />
            &nbsp; 3 hrs 32 mins
          </div>
          <v-spacer />
          <div>Spaces: 2</div>
          <div>UTF-8</div>
          <div>LF</div>
          <div class="d-flex"><v-icon icon="tdesign:check-double" /> &nbsp; Prettier</div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import axios from "axios";

import { useClipboard } from "@vueuse/core";
const clipboard = useClipboard();

import useVuetifyThemeSwitcher from "@/composables/useVuetifyThemeSwitcher";
const vuetifyThemeSwitcher = useVuetifyThemeSwitcher();

const helper = reactive({
  formatDate() {
    return "zzz";
  },
  formatDateBetween(date) {
    if (!date.start.formatted) return "";
    if (!date.final.formatted) return "";
    let start = date.start.formatted;
    let final = date.final.formatted;
    return `${start} and ${final}`;
  },
  formatLocation(location) {
    return [location.city, location.state, location.country].filter((v) => !!v).join(", ");
  },
});

const resume = reactive({
  ready: false,
  data: false,
  async load() {
    try {
      const resp = await axios({
        method: "get",
        url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/jeferson-silva.json",
      });

      resume.data = resp.data;
    } catch (err) {}
    resume.ready = true;

    /*
    try {
      let { data } = await axios.get(
        "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/jeferson-silva.json"
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
    */
  },
  projectsImages: computed(() => {
    let projectsImages = [];

    // resume.data.projects.map((project) => {
    //   project.images.map((image) => {
    //     projectsImages.push({ image, project });
    //   });
    // });

    return projectsImages;
  }),
  rating(stars, size = 10) {
    // const full = 'material-symbols-light:kid-star';
    // const empty = 'material-symbols-light:kid-star-outline';
    stars = ((stars || 0) / 100) * size;
    return [...Array(size).keys()].map((value) => {
      value++;
      const checked = value <= stars;
      return { value, checked };
    });
  },
  clipboardText: null,
  section: "bio",
  sections: computed(() => {
    return {
      bio: {
        to: "/",
        title: "Bio",
        filename: "bio.js",
        icon: "material-symbols:person-2-outline",
      },
      contacts: {
        to: "/contacts",
        title: "Contatos",
        filename: "contacts.md",
        icon: "material-symbols:contact-mail-outline",
      },
      skills: {
        to: "/skills",
        title: "Skills",
        filename: "skills.md",
        icon: "streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars",
      },
      work: {
        to: "/work",
        title: "Experiência",
        filename: "work.md",
        icon: "fa6-solid:timeline",
      },
      portfolio: {
        to: "/portfolio",
        title: "Portfolio",
        filename: "portfolio.md",
        icon: "bytesize:portfolio",
      },
      // settings: {
      //   title: 'Settings',
      //   filename: 'settings.js',
      //   icon: 'tabler:settings',
      // },
    };
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

<style>
.page-index-markdown {
  max-width: 1000px;
}

.page-index-markdown h2 {
  margin-bottom: 15px;
}
</style>
