import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDmM3MTX9ba-0D9Aavwjd2Br5zKWx4LQdQ",
  authDomain: "sunglasses-167e9.firebaseapp.com",
  projectId: "sunglasses-167e9",
  storageBucket: "sunglasses-167e9.appspot.com",
  messagingSenderId: "174159389814",
  appId: "1:174159389814:web:e4db5df948fd2dfd35eb57",
  measurementId: "G-98JNKW6V9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
