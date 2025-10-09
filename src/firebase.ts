// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQYcWKEKOl0mR9gve_3hb4rxLAzYj3sw0",
  authDomain: "ecommerce-site-1dc06.firebaseapp.com",
  projectId: "ecommerce-site-1dc06",
  storageBucket: "ecommerce-site-1dc06.firebasestorage.app",
  messagingSenderId: "640517395561",
  appId: "1:640517395561:web:9084d04ccb1507475b3ef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
