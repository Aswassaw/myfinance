import { useEffect, useRef, useState } from "react";
import { fbFirestore } from "../config/firebase";

export default function useCollection(collection, _query, _orderBy) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = fbFirestore.collection(collection);

    // jika ada query
    if (query) {
      ref = ref.where(...query);
    }

    // jika ada orderBy
    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }

    const unsub = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocuments(results);
        setError(null);
      },
      (err) => {
        console.log(err);
        setError("Could Not Fetch the Data.");
      }
    );

    // clean up
    return () => {
      unsub();
    };
  }, [collection, orderBy, query]);

  return { documents, error };
}
