import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyDE5FNoZDbhGIH7oMyK3YxdfRurwuDe8-Q",
    authDomain: "therapy-66bfa.firebaseapp.com",
    databaseURL: "https://therapy-66bfa.firebaseio.com",
    projectId: "therapy-66bfa",
    storageBucket: "therapy-66bfa.appspot.com",
    messagingSenderId: "7042711669",
    appId: "1:7042711669:web:4088280f6a0a29f23f783c",
  };

firebase.initializeApp(config);
firebase.firestore();

export default firebase