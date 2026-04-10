// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCibaEP0SdjaNku34GRFgVHfa8O2QWBGcw",
  authDomain: "testing-react-redux-app.firebaseapp.com",
  projectId: "testing-react-redux-app",
  storageBucket: "testing-react-redux-app.firebasestorage.app",
  messagingSenderId: "608176029194",
  appId: "1:608176029194:web:b73422f473c2a8ea56e9f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
