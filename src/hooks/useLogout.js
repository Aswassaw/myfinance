import { useEffect, useState } from "react";
import { fbAuth } from "../config/firebase";
import { useAuthContext } from "../hooks/useAuthContext";

export default function useLogout() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { authDispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      // sign the user out
      await fbAuth.signOut();

      // dispatch logout action
      authDispatch({ type: "LOGOUT" });

      // update state
      if (!isCancelled) {
        setError(null);
        setIsPending(false);
      }
    } catch (err) {
      console.log(err.message);
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    // clean up
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { logout, error, isPending };
}
