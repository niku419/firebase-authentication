import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/database'
import 'firebase/storage'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCPo2kEncS2fHOhYi2zpZ4g8V_VrDg-QdY",
    authDomain: "autho-281311.firebaseapp.com",
    projectId: "autho-281311",
    storageBucket: "autho-281311.appspot.com",
    messagingSenderId: "869240920546",
    appId: "1:869240920546:web:f90c73a75de8d170fdc1bb",
    measurementId: "G-RX10JYB72V"
})
const firestore = app.firestore()
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const auth = app.auth()
export const database = {
  userDetails: firestore.collection('userDetails'),
  folders: firestore.collection('folders'),
  files: firestore.collection('files'),
  createdAt: firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage()
export default app