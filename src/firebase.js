import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const API_KEY = import.meta.env.VITE_API_KEY;
const STORAGE_KEY = import.meta.env.VITE_MSG_KEY;
const APP_KEY = import.meta.env.VITE_APP_ID;
const DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const PROJECT_ID = import.meta.env.VITE_PROJ_ID;
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_ID;

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: STORAGE_KEY,
    appId: APP_KEY
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };