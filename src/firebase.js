import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMmLLk3IEeCtgDFKCFBNpuixScn_L7r2Y",
  authDomain: "twitter-clone-df3a2.firebaseapp.com",
  projectId: "twitter-clone-df3a2",
  storageBucket: "twitter-clone-df3a2.appspot.com",
  messagingSenderId: "53293522706",
  appId: "1:53293522706:web:2cefef7d4bb94ba2feddcb",
  measurementId: "G-E8YDS2WQCW"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
