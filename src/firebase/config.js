// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9rAxd7bFu_uOD-LfVncF7HtP4y9mXHyA",
  authDomain: "miniblog-react-bf052.firebaseapp.com",
  projectId: "miniblog-react-bf052",
  storageBucket: "miniblog-react-bf052.appspot.com",
  messagingSenderId: "181292680841",
  appId: "1:181292680841:web:b8b8c5e8de8465facda858",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFireStore(app);

export { db };
