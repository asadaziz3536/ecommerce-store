// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA31aiTlGFkMIrORZTsQpH5bQoWj-XbsFg",
  authDomain: "ecommerce-app-4a08d.firebaseapp.com",
  projectId: "ecommerce-app-4a08d",
  storageBucket: "ecommerce-app-4a08d.firebasestorage.app",
  messagingSenderId: "455829997737",
  appId: "1:455829997737:web:ad4973f3f380dbba91c1b8"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth=  getAuth()

