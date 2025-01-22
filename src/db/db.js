import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCElFo_Iyk8cP_Dn5bIK3IxkH3cJ2iIYS4",
  authDomain: "las-tres-e0f04.firebaseapp.com",
  projectId: "las-tres-e0f04",
  storageBucket: "las-tres-e0f04.firebasestorage.app",
  messagingSenderId: "1013650958478",
  appId: "1:1013650958478:web:c517a476a13692bc5e41df"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;