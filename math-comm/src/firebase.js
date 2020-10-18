  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDE3o1FydKR-lZ3ylHJsotNE9gRgeA5dXc",
  authDomain: "math-comm.firebaseapp.com",
  databaseURL: "https://math-comm.firebaseio.com",
  projectId: "math-comm",
  storageBucket: "math-comm.appspot.com",
  messagingSenderId: "890108781494",
  appId: "1:890108781494:web:041c7787fd916db684d717",
  measurementId: "G-2QHV4JTJ4P"
};

  const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider };
export default db;
