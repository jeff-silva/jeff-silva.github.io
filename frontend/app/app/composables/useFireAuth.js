import { reactive } from "vue";
const config = useRuntimeConfig();

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const getExceptionData = (e) => {
  return {
    code: e.code,
    message: e.message,
    fields: [],
  };
};

const getUserData = (user) => {
  if (!user) return false;
  return {
    uid: user.uid,
    name: (user.providerData[0] ? user.providerData[0].displayName : false) || user.email,
    email: user.email,
    ...user,
  };
};

export default (options = {}) => {
  options = {
    events: [],
    ...options,
  };

  const app = initializeApp(config.public.firebase);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    r.user = getUserData(user);
    r.ready = true;
    r.dispatch("authChange");
  });

  const r = reactive({
    ready: false,
    data: {
      email: "",
      password: "",
    },
    user: false,
    error: false,
    // auth,

    async save() {
      try {
        const data = await createUserWithEmailAndPassword(auth, r.data.email, r.data.password);
        r.user = getUserData(data.user);
        r.data.email = "";
        r.data.password = "";
        r.ready = true;
        r.dispatch("saved");
      } catch (e) {
        r.error = getExceptionData(e);
        r.dispatch("saveError");
        r.dispatch("error");
      }
    },

    async login() {
      try {
        const data = await signInWithEmailAndPassword(auth, r.data.email, r.data.password);
        r.user = getUserData(data.user);
        r.data.email = "";
        r.data.password = "";
        r.dispatch("loggedIn");
      } catch (e) {
        r.error = getExceptionData(e);
        r.dispatch("loginError");
        r.dispatch("error");
      }
    },

    async logout() {
      const data = await signOut(auth);
      r.user = getUserData(false);
      r.dispatch("loggedOut");
      r.dispatch("authChange");
      return data;
    },

    events: options.events,
    on(name, callback) {
      r.events.push({ name, callback });
    },
    dispatch(name) {
      r.events.forEach((evt) => {
        if (evt.name != name) return;
        evt.callback();
      });
    },
  });

  return r;
};
