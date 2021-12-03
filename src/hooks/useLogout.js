import { useState } from "react";
import { fbAuth } from "../config/firebase";
import { useAuthContext } from "../hooks/useAuthContext";

export default function useLogout() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      // sign the user out
      await fbAuth.signOut();

      // dispatch logout action
      dispatch({ type: "LOGOUT" });

      setError(null);
      setIsPending(false);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { logout, error, isPending };
}
