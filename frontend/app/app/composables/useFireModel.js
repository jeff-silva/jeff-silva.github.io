import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  query,
  orderBy,
  startAt,
} from "firebase/firestore";

export default (options = {}) => {
  options = {
    collection: "",
    data: {},
    model: { id: false, name: "" },
    options: {},
    events: [],
    ...options,
  };

  options.data = { ...options.model };

  const config = useRuntimeConfig();
  const db = getFirestore(initializeApp(config.public.firebase));

  const getExceptionData = (e) => {
    return {
      code: e.code || "",
      message: e.message || "",
      fields: [],
    };
  };

  const r = reactive({
    busy: false,
    data: options.data,
    error: false,

    async create() {
      try {
        const id = r.data.id || false;
        if (id) return;
        const ref = collection(db, options.collection);
        const ret = await addDoc(ref, r.data);
        r.data.id = ret.id;
        r.eventDispatch("created");
        r.eventDispatch("saved");
        return ret;
      } catch (e) {
        r.error = getExceptionData(e);
      }
    },

    async update() {
      try {
        const id = r.data.id || false;
        if (!id) return;
        const docRef = doc(db, options.collection, id);
        const ret = await setDoc(docRef, r.data);
        r.eventDispatch("updated");
        r.eventDispatch("saved");
        return ret;
      } catch (e) {
        r.error = getExceptionData(e);
      }
    },

    async save() {
      return !!r.data.id ? r.update() : r.create();
    },

    async delete(item = {}) {
      const id = item.id || false;
      if (!id) return;
      const ret = await deleteDoc(doc(db, options.collection, id));
      r.eventDispatch("deleted");
      return ret;
    },

    async setData(data) {
      r.data = { ...options.model, ...data };
    },

    async resetData() {
      r.data = { ...options.model };
    },

    async eventDispatch(eventName) {
      r.events.forEach(([name, callback]) => {
        if (name != eventName) return;
        callback();
      });
    },

    events: options.events,
    options: options.options,

    search: {
      busy: false,
      params: {
        orderBy: "id",
        limit: 25,
      },
      data: [],
      pagination: {},
      async submit() {
        let data = [];
        const dbRef = collection(db, options.collection);
        const q = query(dbRef);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          data.push({ ...options.model, ...doc.data(), id: doc.id });
        });
        r.search.data = data;
      },
    },
  });

  return r;
};
