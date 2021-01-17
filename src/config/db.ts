import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmoVzvl4SDR-kU_WqMBl2o5WLYyiLkeuk",
  authDomain: "quadratic-voting-178e2.firebaseapp.com",
  projectId: "quadratic-voting-178e2",
  storageBucket: "quadratic-voting-178e2.appspot.com",
  messagingSenderId: "396787885992",
  appId: "1:396787885992:web:ead373555b32c2bd359f9d",
  measurementId: "G-876V3FF2W6",
};

// 初回のみ
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
export const db = firebase.firestore();
