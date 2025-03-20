// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// إعدادات Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDqgl3Xn3KmeH5ZFg5ToBq3yzuHDSzNTk8",
  authDomain: "exam-e8fa9.firebaseapp.com",
  projectId: "exam-e8fa9",
  storageBucket: "exam-e8fa9.appspot.com",
  messagingSenderId: "995581072212",
  appId: "1:995581072212:web:33f7ecffa01d3010d9aec1",
  measurementId: "G-D898YWKT96"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
