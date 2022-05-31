import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC16ytDATmvsp-E2SzFFn88x1tnuebiSbQ",
  authDomain: "rosso-app.firebaseapp.com",
  projectId: "rosso-app",
  storageBucket: "rosso-app.appspot.com",
  messagingSenderId: "806238343734",
  appId: "1:806238343734:web:d9cc84b06abd593886be97"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore()