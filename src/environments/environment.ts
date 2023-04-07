export const environment = {
  production: false
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK_swNok9OyI2zCnUmDEw08xDpc-fApfc",
  authDomain: "gamestop-app-6140e.firebaseapp.com",
  databaseURL: "https://gamestop-app-6140e-default-rtdb.firebaseio.com",
  projectId: "gamestop-app-6140e",
  storageBucket: "gamestop-app-6140e.appspot.com",
  messagingSenderId: "977501291137",
  appId: "1:977501291137:web:006ed5657b3d49a5cbc380",
  measurementId: "G-QFG607BKPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);