import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfrPznWF10wLE2oIxalsDjXW0h03ErfT0",
  authDomain: "sinqly-upload-files.firebaseapp.com",
  projectId: "sinqly-upload-files",
  storageBucket: "sinqly-upload-files.appspot.com",
  messagingSenderId: "903443369599",
  appId: "1:903443369599:web:b4acdf28e68e4d8f5af94a",
  measurementId: "G-9ZH8FTVEH9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
