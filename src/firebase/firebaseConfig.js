// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDthKunkw4Ly2luTGWVsk7RspJsaCe-JVQ",
  authDomain: "frontend10-871e9.firebaseapp.com",
  projectId: "frontend10-871e9",
  storageBucket: "frontend10-871e9.appspot.com",
  messagingSenderId: "491487867595",
  appId: "1:491487867595:web:4f567c369b6a144ba3a14e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();

export {
    app,
    google

}