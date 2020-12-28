import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBJk5tSKGzbG4XjFmTGQV9Ga05KiXePU2w",
  authDomain: "wily-3ef4b.firebaseapp.com",
  projectId: "wily-3ef4b",
  storageBucket: "wily-3ef4b.appspot.com",
  messagingSenderId: "326363560400",
  appId: "1:326363560400:web:3f50bdd83096fc9145a1d5"
};

if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig)


}
export default firebase.firestore()