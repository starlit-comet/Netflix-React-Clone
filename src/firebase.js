// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { toast, ToastContainer } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0pGtjLs9wvLdCWYdkFfkjbInzmRNL1PM",
  authDomain: "netflix-react-clone-8bde1.firebaseapp.com",
  projectId: "netflix-react-clone-8bde1",
  storageBucket: "netflix-react-clone-8bde1.firebasestorage.app",
  messagingSenderId: "593626146858",
  appId: "1:593626146858:web:5ae3a431d3e092fd12fb53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
    try {
       const res = await createUserWithEmailAndPassword(auth,email,password)
        const user=res.user;
        await addDoc(collection(db,'user'),{
            uid:user.uid,
            name,
            authProvider:'local',
            email,
            
        })
    } catch (error) {
        console.log('error in firebase',error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
        // alert(error)
    }
}

const login = async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
        // alert(error)
    }
}

const logout = ()=>{
    signOut(auth)
}

export {auth,db,login,signup,logout}