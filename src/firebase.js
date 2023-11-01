import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDn7LIMxrSRLgiOibOlKGxkbgMNcrZbiWg",
  authDomain: "wedding-67895.firebaseapp.com",
  projectId: "wedding-67895",
  storageBucket: "wedding-67895.appspot.com",
  messagingSenderId: "927473408236",
  appId: "1:927473408236:web:2638c0e580b392d5baedc9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;




// apiKey: "AIzaSyBKzeqW4ynCOt93Lyc3Irw5lYa9rncLLXE",
// authDomain: "wedding-site-a0553.firebaseapp.com",
// projectId: "wedding-site-a0553",
// storageBucket: "wedding-site-a0553.appspot.com",
// messagingSenderId: "194651427996",
// appId: "1:194651427996:web:669bb418883b6ccca24959"