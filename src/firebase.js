import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBKzeqW4ynCOt93Lyc3Irw5lYa9rncLLXE",
  authDomain: "wedding-site-a0553.firebaseapp.com",
  projectId: "wedding-site-a0553",
  storageBucket: "wedding-site-a0553.appspot.com",
  messagingSenderId: "194651427996",
  appId: "1:194651427996:web:669bb418883b6ccca24959"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
