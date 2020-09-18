import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASCRANrKSCnmKSkoY-jJy6Y2U9TDZR8qY",
  authDomain: "whatsapp-clone-1ba03.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-1ba03.firebaseio.com",
  projectId: "whatsapp-clone-1ba03",
  storageBucket: "whatsapp-clone-1ba03.appspot.com",
  messagingSenderId: "112431672229",
  appId: "1:112431672229:web:fd7d94fc3448d4da8d964c",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
