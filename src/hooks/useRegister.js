import { useState } from "react";
import { fbAuth } from "../config/firebase";
import { useAuthContext } from "../hooks/useAuthContext";

export default function useRegister() {
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

      setError(null);
      setIsPending(false);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { register, error, isPending };
}
