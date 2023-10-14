// This will go to Header
import { initializeApp } from 'firebase/app';
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB9Oz-VIAK5RZ7vTwsgzVg9lrc-XLdKSEM",
    authDomain: "disney-clone-502e5.firebaseapp.com",
    projectId: "disney-clone-502e5",
    storageBucket: "disney-clone-502e5.appspot.com",
    messagingSenderId: "694670912820",
    appId: "1:694670912820:web:2cbe7b97fa0d36b91d4961",
    measurementId: "G-73BVL5YEXN"
  };

  const firebaseApp = initializeApp(firebaseConfig);
//   const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const storage = getStorage(firebaseApp);

  export {auth, provider, storage };

//   export default db;