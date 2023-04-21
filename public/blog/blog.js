// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4epl_NUDI110EGr2kSjvRipZGD1p0gjo",
  authDomain: "ai-politico.firebaseapp.com",
  databaseURL: "https://ai-politico-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ai-politico",
  storageBucket: "ai-politico.appspot.com",
  messagingSenderId: "448337160491",
  appId: "1:448337160491:web:921e55afb10b8615d4bd6e",
  measurementId: "G-YQ0RM3LQ7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Hello from Firebase!");