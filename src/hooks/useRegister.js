import { useState } from "react";
import { fbAuth } from "../config/firebase";

export default function useRegister() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const register = async ({ email, displayName, password }) => {
    setError(null);
    setIsPending(true);

    try {
      // Register User
      const res = await fbAuth.createUserWithEmailAndPassword(email, password);
      console.log(res.user);

      if (!res) {
        throw new Error("Could not complete register.");
      }

      // Add displayName to User
      await res.user.updateProfile({
        displayName,
      });
      setError(null);
      setIsPending(false);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, register };
}
