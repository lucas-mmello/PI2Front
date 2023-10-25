// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSw7-sqJApg07a7S5wAJ05RAtpl2xJ5iI",
  authDomain: "reactuploads-pi2.firebaseapp.com",
  projectId: "reactuploads-pi2",
  storageBucket: "reactuploads-pi2.appspot.com",
  messagingSenderId: "909244972753",
  appId: "1:909244972753:web:09dd607fa2695b41c34ff0",
  measurementId: "G-44S3XM674Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
