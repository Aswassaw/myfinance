import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAuthContext from "./hooks/auth/useAuthContext";
import Auth from "./middlewares/Auth";

// pages & components
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import NotFound from "./NotFound";

export default function App() {
  const { authState } = useAuthContext();
  const { authIsReady, user } = authState;

  return (
    <div className='App'>
      {/* jika proses authentikasi belum selesai */}
      {!authIsReady && (
        <div className='loading-auth'>
          <h1>Loading...</h1>
        </div>
      )}

      {/* jika proses authentication telah selesai */}
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={
                <Auth isLoggedIn={Boolean(user)}>
                  <Landing />
                </Auth>
              }
            />
            <Route
              path='/login'
              element={
                <Auth isLoggedIn={Boolean(user)}>
                  <Login />
                </Auth>
              }
            />
            <Route
              path='/register'
              element={
                <Auth isLoggedIn={Boolean(user)}>
                  <Register />
                </Auth>
              }
            />
            <Route
              path='/home'
              element={
                <Auth isLoggedIn={Boolean(user)} protect>
                  <Home />
                </Auth>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}
