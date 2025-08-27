<template>
  <v-app class="layout-admin">
    <app-layout ref="appLayoutRef" :defaults-provider="defaultsProvider" :ready="auth.ready">
      <template #main="bind">
        <slot name="main" v-bind="bind"></slot>
      </template>

      <template #navigation="bind">
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
        <app-nav :items="nav.items" />
      </template>

      <template #header="bind">
        <v-spacer />
        <!-- <v-btn icon="ic:outline-message" />
        <v-btn icon="material-symbols:settings-outline-rounded" /> -->
        <div class="d-flex align-center">
          <div class="me-2">{{ auth.user.name }}</div>
          <v-icon icon="material-symbols:account-circle" />
        </div>
        <v-btn @click="vuetifyThemeSwitcher.switch()" icon="material-symbols:dark-mode" />
      </template>

      <template #login="bind">
        <form @submit.prevent="auth.login()">
          <v-text-field label="E-mail" v-model="auth.data.email" />
          <v-text-field label="Senha" v-model="auth.data.password" />
          <div class="d-flex">
            <v-spacer />
            <v-btn type="submit">Login</v-btn>
          </div>
        </form>
      </template>

      <template #register="bind">
        <form @submit.prevent="auth.save()">
          <v-text-field label="E-mail" v-model="auth.data.email" />
          <v-text-field label="Senha" v-model="auth.data.password" />
          <v-text-field label="Repita Senha" />
          <div class="d-flex">
            <v-spacer />
            <v-btn type="submit">Register</v-btn>
          </div>
        </form>
      </template>

      <template #password="bind">
        <form @submit.prevent>
          <v-text-field label="E-mail" v-model="auth.data.email" />
          <div class="d-flex">
            <v-spacer />
            <v-btn type="submit">Password</v-btn>
          </div>
        </form>
      </template>
    </app-layout>
  </v-app>
</template>

<script setup>
import { reactive, onMounted, getCurrentInstance } from "vue";
const currentInstance = getCurrentInstance();

import useVuetifyThemeSwitcher from "@/composables/useVuetifyThemeSwitcher";
const vuetifyThemeSwitcher = useVuetifyThemeSwitcher();

import useFireAuth from "@/composables/useFireAuth";
const auth = await useFireAuth();

auth.on("authChange", () => {
  currentInstance.ctx.$refs.appLayoutRef.view.set(auth.user ? "admin" : "login");
});

const nav = reactive({
  drawer: null,
  items: [
    { title: "Home", to: "/admin" },
    { title: "Pages", to: "/admin/page" },
    { title: "User", to: "/admin/user" },
    { title: "Test", to: "/admin/test" },
  ],
});

// onMounted(() => {
//   console.log(currentInstance.ctx.$refs.appLayoutRef);
// });
</script>
