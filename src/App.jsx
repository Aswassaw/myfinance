import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/auth/useAuthContext";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

export default function App() {
  const { authState } = useAuthContext();

  return (
    <div className='App'>
      {/* jika proses authentikasi belum selesai */}
      {!authState.authIsReady && (
        <div className='loading-auth'>
          <h1>Loading...</h1>
        </div>
      )}

      {/* jika proses authentication telah selesai */}
      {authState.authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}
