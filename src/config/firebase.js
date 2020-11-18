import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth"
import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDn163PfCs7fJkNYA9EbSSdUkaFmiHwqBk",
  authDomain: "hotel-hotux.firebaseapp.com",
  databaseURL: "https://hotel-hotux.firebaseio.com",
  projectId: "hotel-hotux",
  storageBucket: "hotel-hotux.appspot.com",
  messagingSenderId: "586411419442",
  appId: "1:586411419442:web:43b469b31ec2122f79192b"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export {db,facebookProvider,googleProvider}
export default firebase;