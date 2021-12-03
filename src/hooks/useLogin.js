import { useEffect, useState } from "react";
import { fbAuth } from "../config/firebase";
import { useAuthContext } from "./useAuthContext";

export default function useLogin() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { authDispatch } = useAuthContext();

  const login = async ({ email, password }) => {
    setError(null);
    setIsPending(true);

    try {
      // login user
      const res = await fbAuth.signInWithEmailAndPassword(email, password);

      if (!res) {
        throw new Error("Could not complete login.");
      }

      // dispatch login action
      authDispatch({ type: "LOGIN", payload: res.user });

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

  return { login, error, isPending };
}
