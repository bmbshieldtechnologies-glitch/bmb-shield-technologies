import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBY4SkfWI_GVZHmP8ACFBeL9DMcT7COk8k",
  authDomain: "bmbshield-assessment.firebaseapp.com",
  projectId: "bmbshield-assessment",
  storageBucket: "bmbshield-assessment.firebasestorage.app",
  messagingSenderId: "1026054583192",
  appId: "1:1026054583192:web:7b37405a997e6d52e1b1ed",
  measurementId: "G-YLXYKKC53L"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  getDocs,
  addDoc
};
