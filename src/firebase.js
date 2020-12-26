// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCE9ayTOyFjnlIimPmQYuJ3-UKGEIyOnFE",
  authDomain: "challenge-4e8a3.firebaseapp.com",
  projectId: "challenge-4e8a3",
  storageBucket: "challenge-4e8a3.appspot.com",
  messagingSenderId: "51215750403",
  appId: "1:51215750403:web:9501ec0fc7d715fe7b4536",
  measurementId: "G-R91BJPHR6L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
