import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut
} from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserwithEmailPassword = async ({email,password,displayName}) => {
  try {
    console.log(email,password, displayName);
    const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    console.log(resp);
    const { uid, photoURL } = resp.user;

    await updateProfile(firebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const loginWithEmailAndPassword = async({email, password})=>{
  try {
    const resp = await signInWithEmailAndPassword(firebaseAuth, email, password);
    const {uid, photoURL, displayName} = resp.user;
    return{
      ok: true,
      uid, 
      photoURL,
      displayName,
    }
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    }
  }
}

export const LogutFirebase= async()=>{
  return await firebaseAuth.signOut();
}
