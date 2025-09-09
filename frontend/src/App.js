import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">Inventory</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/login">Login</Link>
          <Link className="nav-link" to="/signup">Signup</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<h1 className="text-center mt-5">🏠 Welcome to Inventory App</h1>} />
      </Routes>
    </>
  );
}

export default App;
