import { reactive } from "vue";
const config = useRuntimeConfig();

import * as fireApp from "firebase/app";
import * as fireAuth from "firebase/auth";
import * as fireFirestore from "firebase/firestore";

const getUserData = (user) => {
  if (!user) return false;
  return {
    uid: user.uid,
    name: (user.providerData[0] ? user.providerData[0].displayName : false) || user.email,
    email: user.email,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
    // ...user,
  };
};

export default () => {
  fireApp.initializeApp(config.public.firebase);
  const auth = fireAuth.getAuth();
  const fireFirestoreDB = fireFirestore.getFirestore();

  let r = {};

  r.ready = false;
  r.user = false;

  r.userCreate = async (data = {}) => {
    data = { name: "", email: "", password: "", ...data };
    try {
      const resp = await fireAuth.createUserWithEmailAndPassword(auth, data.email, data.password);
      r.firestoreSave("user", getUserData(resp.user));
    } catch (e) {
      console.error(e);
    }
  };

  r.userUpdate = async () => {};

  r.userLogin = async () => {};

  r.userLogout = async () => {};

  r.firestoreSave = async (collection, data = {}) => {
    data = { uid: null, name: "", ...data };
    const ref = fireFirestore.collection(fireFirestoreDB, collection);
    return data.uid
      ? await fireFirestore.setDoc(fireFirestore.doc(fireFirestoreDB, collection, data.uid), data)
      : await fireFirestore.addDoc(ref, data);
  };

  r.firestoreFind = async (collection, uid) => {
    const docRef = fireFirestore.doc(fireFirestoreDB, collection, uid);
    const docSnap = await fireFirestore.getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : false;
  };

  r.firestoreSearch = async (collection, params = {}, query = null) => {
    params = { perPage: 5, ...params };

    if (query === null) {
      const collectRef = fireFirestore.collection(fireFirestoreDB, collection);
      query = fireFirestore.query(collectRef, fireFirestore.limit(params.perPage));
    }

    const docs = await fireFirestore.getDocs(query);
    const next = docs.docs[docs.docs.length - 1];
    const prev = docs.docs[docs.docs.length - 1];

    let data = [];
    docs.forEach((doc) => {
      data.push(doc.data());
    });

    return { params, data, prev, next, docs };
  };

  r.firestoreDelete = async (collection, uid) => {};

  r.realtimeSave = async () => {};

  r.realtimeFind = async () => {};

  r.realtimeSearch = async () => {};

  r.realtimeDelete = async () => {};

  r.storageSave = async () => {};

  r.storageFind = async () => {};

  r.storageSearch = async () => {};

  r.storageDelete = async () => {};

  fireAuth.onAuthStateChanged(auth, (user) => {
    r.user = getUserData(user);
    r.ready = true;
  });

  return r;

  // const user = {
  //   // find: async (uid, by = null) => {
  //   //   try {
  //   //     if (by == "email") {
  //   //       return await auth.getUserByEmail(uid);
  //   //     } else if (by == "phone") {
  //   //       return await auth.getUserByPhoneNumber(uid);
  //   //     }
  //   //     return await auth.getUser(uid);
  //   //   } catch (e) {
  //   //     console.log(e);
  //   //   }
  //   // },
  //   search: async (options = {}) => {
  //     options = {
  //       perPage: 20,
  //       nextPageToken: null,
  //       ...options,
  //     };

  //     try {
  //       return await auth.getUsers();
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   },
  //   save: async () => {},
  //   delete: async () => {},
  // };

  // const firestore = {};
  // const realtime = {};
  // const storage = {};

  // return { user, firestore, realtime, storage };
};
