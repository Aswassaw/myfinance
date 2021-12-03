import { useEffect, useState } from "react";
import { fbAuth } from "../../config/firebase";
import useAuthContext from "./useAuthContext";

export default function useRegister() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { authDispatch } = useAuthContext();

  const register = async ({ email, displayName, password }) => {
    setError(null);
    setIsPending(true);

    try {
      // register user
      const res = await fbAuth.createUserWithEmailAndPassword(email, password);

      if (!res) {
        throw new Error("Could not complete register.");
      }

      // add displayName to user
      await res.user.updateProfile({ displayName });

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

  return { register, error, isPending };
}
