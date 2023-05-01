import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyANIwU8SF-RtDO2gUr66jq8ooW-m0-Va2A",
  authDomain: "focuseducation-aba61.firebaseapp.com",
  databaseURL: "https://focuseducation-aba61-default-rtdb.firebaseio.com",
  projectId: "focuseducation-aba61",
  storageBucket: "focuseducation-aba61.appspot.com",
  messagingSenderId: "857565102730",
  appId: "1:857565102730:web:2b101a63abf71e30b2a373",
  measurementId: "G-VHJ19R2RZ7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
