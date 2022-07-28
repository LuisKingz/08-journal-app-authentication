import { collection, documentId, getDocs } from "firebase/firestore/lite";
import { fireStoreDB } from "../firebase/config";

export const loadNotes = async (uid = "") => {
  if (!uid) throw new Error("El UID del usuario no existe!");
  const collectionRef = collection(fireStoreDB, `${uid}/journal/notes`);
  const doc = await getDocs(collectionRef);
  const notes = [];
  doc.forEach((doc) => {
    notes.push({id: doc.id, ...doc.data()})
  });

  return notes;
};
