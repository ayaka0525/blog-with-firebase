import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD_1jF17wIXom_md2t_MvFeVlVMf_nrj40",
  authDomain: "blog-44ea3.firebaseapp.com",
  projectId: "blog-44ea3",
  storageBucket: "blog-44ea3.appspot.com",
  messagingSenderId: "379245010968",
  appId: "1:379245010968:web:4621937602bf73eed4e36d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };