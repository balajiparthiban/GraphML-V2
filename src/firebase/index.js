// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';

// import firebase from 'firebase'
// require('firebase/auth')

// import firebase from 'firebase';


import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD1F9w5H7WRmLzDqFvgx2B8w53Y5S_JjHk",
    authDomain: "graphml-ddd96.firebaseapp.com",
    databaseURL: "https://graphml-ddd96-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "graphml-ddd96",
    storageBucket: "graphml-ddd96.appspot.com",
    messagingSenderId: "785901839226",
    appId: "1:785901839226:web:6a42bc02391604b32c6cc3",
    measurementId: "G-XGH7GH5DPV"
  };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)

// const app = initializeApp(firebaseConfig);
// export const fire = getAuth(app)


firebase.initializeApp(firebaseConfig);
export default firebase