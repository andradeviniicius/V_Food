import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: "vfood-f3381",
  storageBucket: "vfood-f3381.appspot.com",
  messagingSenderId: "327541435973",
  appId: "1:327541435973:web:76244c7d1ef876355fbd2c",
  measurementId: "G-5S89GG4FGP",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

export default database