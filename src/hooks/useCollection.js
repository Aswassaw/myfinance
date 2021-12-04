import { useEffect, useState } from "react";
import { fbFirestore } from "../config/firebase";

export default function useCollection(collection) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ref = fbFirestore.collection(collection);

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
  }, [collection]);

  return { documents, error };
}
