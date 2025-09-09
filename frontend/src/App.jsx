import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import { Toaster } from "react-hot-toast";

function App() {
  const token = localStorage.getItem("jwt");

  return (
    <div>
      <Routes>
        {/* Default route */}
        <Route
          path="/"
          element={token ? <Navigate to="/todo" /> : <Navigate to="/login" />}
        />

        {/* Protected Todo Page */}
        <Route
          path="/todo"
          element={token ? <Home /> : <Navigate to="/login" />}
        />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
