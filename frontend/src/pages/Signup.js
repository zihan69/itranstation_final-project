import React, { useState } from "react";
import api from "../utils/api";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/users/signup", form);
      setMessage("✅ Signup successful! Now login.");
      console.log(res.data);
    } catch (err) {
      setMessage("❌ Signup failed. " + err.response?.data?.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Signup</h2>
      {message && <p className="text-center">{message}</p>}
      <form onSubmit={handleSubmit} className="col-md-6 offset-md-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary w-100">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
