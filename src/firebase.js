// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC79sfofOO_Cn6PSlNoa7BD_z_URURGrZM",
  authDomain: "littlepanda-e70d4.firebaseapp.com",
  projectId: "littlepanda-e70d4",
  storageBucket: "littlepanda-e70d4.appspot.com",
  messagingSenderId: "443898818857",
  appId: "1:443898818857:web:cb0cb25244ce6993d70738"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);