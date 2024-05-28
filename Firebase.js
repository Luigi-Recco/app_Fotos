import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlonHlPy7-6WDe_CW2ICzNCcQpMZSJ1tI",
  authDomain: "appfotos-cab0c.firebaseapp.com",
  projectId: "appfotos-cab0c",
  storageBucket: "appfotos-cab0c.appspot.com",
  messagingSenderId: "880824133663",
  appId: "1:880824133663:web:fd1392ad0b11b0eb1c4d2a"
};
  
  const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);
  export const fire = getFirestore(app);