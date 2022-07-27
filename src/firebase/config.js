// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTu2u7rfIBZrQZmsIvfRJLv7uMC7Qjz1g",
  authDomain: "react-journal-f5cc1.firebaseapp.com",
  projectId: "react-journal-f5cc1",
  storageBucket: "react-journal-f5cc1.appspot.com",
  messagingSenderId: "196140010681",
  appId: "1:196140010681:web:87fbd89e080f48e9065f68"
};

// Initialize Firebase
export const firebaseApp  = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const fireStoreDB  = getFirestore(firebaseApp);

