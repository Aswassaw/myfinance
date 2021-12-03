import React from "react";
import { Navigate } from "react-router";

export default function Auth({ isLoggedIn, children, protect = false }) {
  return (
    <>
      {/* filter untuk page yang dilindungi */}
      {protect && (
        <>
          {isLoggedIn && children}
          {!isLoggedIn && <Navigate to='/login' />}
        </>
      )}

      {/* filter untuk page yang tidak dilindungi */}
      {!protect && (
        <>
          {!isLoggedIn && children}
          {isLoggedIn && <Navigate to='/home' />}
        </>
      )}
    </>
  );
}
