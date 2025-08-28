<template>
  <div>
    <nuxt-layout name="admin">
      <template #main>
        <!-- <v-row>
          <v-col cols="6">
            <v-text-field label="Name" v-model="test.name" v-bind="validate.bind('name', ['required'])" />
          </v-col>
          <v-col cols="6">
            <v-text-field label="E-mail" v-model="test.email" v-bind="validate.bind('email', ['email'])" />
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Password"
              type="password"
              v-model="test.password"
              v-bind="validate.bind('password', ['min:3', 'max:10'])"
            />
          </v-col>
          <v-col cols="12" class="d-flex align-center">
            <v-spacer />
            <v-btn :disabled="!validate.isValid()">Save</v-btn>
          </v-col>
        </v-row> -->

        <v-btn @click="personStorage.browse()">Browse</v-btn>
        <v-btn @click="personStorage.upload()">Upload</v-btn>
        <br /><br />

        <v-table class="border">
          <tbody>
            <template v-for="o in personSearch.data">
              <tr>
                <td>{{ o.uid }}</td>
                <td>{{ o.email }}</td>
                <td><v-btn icon="mdi-delete" flat @click="personSearch.delete(o)" /></td>
              </tr>
            </template>
          </tbody>
        </v-table>
        <br />
        <div class="d-flex justify-center" style="gap: 15px">
          <v-btn @click="personSearch.generate()">Generate</v-btn>
          <v-btn v-if="personSearch.next" @click="personSearch.submit(personSearch.next)">Load more</v-btn>
        </div>

        <pre>{{ personSearch.query }}</pre>
        <pre>{{ personStorage }}</pre>
        <!-- <pre>{{ firebase }}</pre> -->
      </template>
    </nuxt-layout>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";

// const test = reactive({ name: "", email: "", password: "" });
// import useValidate from "@/composables/useValidate";
// const validate = await useValidate({ values: test });

import useFirebase from "@/composables/useFirebase";
const firebase = useFirebase();

import axios from "axios";
import f from "@/utils/firebase.js";

const personSearch = reactive({
  query: {
    // endAt: "I0aMPRAFwEqRbe6YiqSS",
  },
  prev: false,
  next: false,
  data: [],
  async submit(query = null) {
    if (query) personSearch.query = query;
    const resp = await f.firestoreSearch("person", personSearch.query);
    personSearch.query = resp.query;
    personSearch.prev = resp.prev;
    personSearch.next = resp.next;
    personSearch.data = resp.data;

    // resp.data.map((item) => {
    //   personSearch.data.push(item);
    // });
  },
  async delete(person) {
    if (!confirm(`Deletar ${person.name}?`)) return;
    await f.firestoreDelete("person", person.uid);
    await personSearch.submit();
  },
  async generate() {
    let { data: randomUser } = await axios.get("https://randomuser.me/api/?results=1");
    randomUser = randomUser.results[0] ? randomUser.results[0] : false;
    if (!randomUser) return;
    await f.firestoreSave("person", {
      name: `${randomUser.name.first} ${randomUser.name.last}`,
      email: randomUser.email,
      picture: randomUser.picture.thumbnail,
    });
    await personSearch.submit();
  },
});

const personStorage = reactive({
  files: [],
  async browse() {
    Object.assign(document.createElement("input"), {
      type: "file",
      multiple: true,
      onchange(ev) {
        Array.from(ev.target.files).forEach((file) => {
          personStorage.files.push({
            data: {
              name: file.name,
              size: file.size,
              type: file.type,
            },
            file,
          });
        });
      },
    }).click();
  },

  async upload() {
    personStorage.files.forEach((file) => {
      file.upload = r.storageSave(file.data, file.file);
      console.log(file);
    });
  },
});

onMounted(async () => {
  personSearch.submit();
});
</script>
