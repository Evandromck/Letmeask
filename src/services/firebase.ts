<<<<<<< HEAD
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANNQ4mq3LCqsxPhDioEyoL5RSDV-kGu-s",
  authDomain: "letmeask-mck.firebaseapp.com",
  databaseURL: "https://letmeask-mck-default-rtdb.firebaseio.com",
  projectId: "letmeask-mck",
  storageBucket: "letmeask-mck.appspot.com",
  messagingSenderId: "947921954209",
  appId: "1:947921954209:web:daa7936a77fac2086e57e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

=======
import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BACKET,
    messagingSenderId: process.env.REACT_APP_MASSAGIN_SEDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const database = firebase.database();

>>>>>>> c4933bcd5ec36658fd211596b77f2b54c115f4b3
  