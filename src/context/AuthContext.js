import { createContext, useEffect, useReducer } from "react";
import { fbAuth } from "../config/firebase";

const initialState = { user: null, authIsReady: false };

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const unsub = fbAuth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);

  console.log(state);

  return (
    <AuthContext.Provider value={{ authState: state, authDispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
