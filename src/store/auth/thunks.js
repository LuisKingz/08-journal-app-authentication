import {loginWithEmailAndPassword, LogutFirebase, registerUserwithEmailPassword,signInWithGoogle,} from "../../firebase/provider";
import { checkingCredential, logout, login } from "./";

export const checkinAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredential());
  };
};

export const startGoogleSigIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredential());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

export const startCreatingUserAndPassword = ({email, password, displayName}) => {
  return async (dispatch) => {
    dispatch(checkingCredential());

    const {ok,uid,photoURL,errorMessage} = await registerUserwithEmailPassword({email, password, displayName});
  
    if(!ok) return dispatch(logout({errorMessage}));

    dispatch(login({uid,displayName,email,photoURL}));
  };
};

export const startLoginWithEmailAndPassword=({email, password})=>{
  return async (dispatch) =>{
    dispatch(checkingCredential());

    const resp = await loginWithEmailAndPassword({email, password});
    if(!resp.ok) return dispatch (logout(resp));

    dispatch(login(resp));
  }
}

export const startLogout=()=>{
  return async (dispatch)=>{
    await LogutFirebase();

    dispatch(logout({ }));
  }
}
