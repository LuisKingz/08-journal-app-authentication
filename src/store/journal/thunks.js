import { async } from "@firebase/util";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { fireStoreDB } from "../../firebase/config";
import { loadNotes } from "../../helpers";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes } from "./";

export const startNewNote=()=>{
    return async(dispatch, getState)=>{
        dispatch(savingNewNote());

        const { uid } = getState().auth;

        const newNote ={
            title: '',
            body:'',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(fireStoreDB,`${uid}/journal/notes`));
        await setDoc(newDoc,newNote);

        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
       
    }
}

export const startLoadingNotes=()=>{
    return async(dispatch, getState)=>{
        const { uid } = getState().auth;
        
        const notes  = await loadNotes(uid);
        dispatch(setNotes(notes));
    }   
}