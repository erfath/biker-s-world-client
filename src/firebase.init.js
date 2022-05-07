// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-sI1Ya3U4uKEr1o9pnHzowSwpVPgXeUI",
  authDomain: "bikers-world-43bda.firebaseapp.com",
  projectId: "bikers-world-43bda",
  storageBucket: "bikers-world-43bda.appspot.com",
  messagingSenderId: "128994155156",
  appId: "1:128994155156:web:ea237a6bc35c34aabc3281"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;