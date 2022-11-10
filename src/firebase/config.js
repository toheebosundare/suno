import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDjltfm2KlCLu1wYpbKl5A9pnxGv_7dxMc",
  authDomain: "sunodojo.firebaseapp.com",
  projectId: "sunodojo",
  storageBucket: "sunodojo.appspot.com",
  messagingSenderId: "482721025907",
  appId: "1:482721025907:web:96cd2758994da9be01bf06"
};

// initializing firebase
firebase.initializeApp(firebaseConfig)

// initializing services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp


export { projectFirestore, projectAuth, timestamp }