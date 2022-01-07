import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCIzuUAteuztGBda6VkyK8v8H8cJegfNGo",
  authDomain: "project-v1-c1a3c.firebaseapp.com",
  projectId: "project-v1-c1a3c",
  storageBucket: "project-v1-c1a3c.appspot.com",
  messagingSenderId: "732859787660",
  appId: "1:732859787660:web:08ef824c0e37fdd9ae4ea9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth };