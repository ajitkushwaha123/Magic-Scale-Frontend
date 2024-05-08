
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOIqinCcDOVxoHGNjJYEOfveMjDSMCW4Q",
  authDomain: "authmagicscale.firebaseapp.com",
  projectId: "authmagicscale",
  storageBucket: "authmagicscale.appspot.com",
  messagingSenderId: "157948736536",
  appId: "1:157948736536:web:074f3835ef73795fe93f6d",
  measurementId: "G-T3H3GN1MCB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
