import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX7GAzVfwUOkckIxqptNh34asV_Pg4Dro",
  authDomain: "aerotaxi-4a540.firebaseapp.com",
  projectId: "aerotaxi-4a540",
  storageBucket: "aerotaxi-4a540.appspot.com",
  messagingSenderId: "655504676026",
  appId: "1:655504676026:web:3d00164a4699d410d55e83",
  measurementId: "G-E9L6W34JPM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
