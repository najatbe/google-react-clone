import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDgojRFqoBb_GHp_E5AqK24bNZf7ldCQbc",
    authDomain: "linkedin-react-clone-4e90c.firebaseapp.com",
    projectId: "linkedin-react-clone-4e90c",
    storageBucket: "linkedin-react-clone-4e90c.appspot.com",
    messagingSenderId: "27247884687",
    appId: "1:27247884687:web:ed8fdc3e784a7cd6ca33fa"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  
  export { db, auth}