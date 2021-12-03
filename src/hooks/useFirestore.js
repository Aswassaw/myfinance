import { useEffect, useReducer, useState } from "react";
import { fbFirestore } from "../config/firebase";

const initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default function useFirestore(collection) {
  const [state, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // collection ref
  const ref = fbFirestore.collection(collection);

  // add a document
  const addDocument = async (doc) => {
    await ref.add(doc);
  };

  // delete a document
  const deleteDocument = async (id) => {
    await ref.doc(id).delete();
  };

  // update a document
  const updateDocument = async (id) => {};

  useEffect(() => {
    // clean up
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { state, addDocument, deleteDocument, updateDocument };
}
