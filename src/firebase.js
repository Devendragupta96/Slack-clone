// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBCJb0g3mdEpqqzjriyQsK-N02iDEFPUM",
  authDomain: "slack-clone-149a5.firebaseapp.com",
  projectId: "slack-clone-149a5",
  storageBucket: "slack-clone-149a5.appspot.com",
  messagingSenderId: "400832049157",
  appId: "1:400832049157:web:9fbe38e579f047e0762c6c",
  measurementId: "G-72X5MPZHKK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
