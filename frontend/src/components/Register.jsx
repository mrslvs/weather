import React from "react";
import axiosInstance from "../api/axiosInstance";
// import "../assets/styles/index.scss";

const Register = () => {
  const register = async (e) => {
    e.preventDefault();

    const registerData = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    try {
      const response = await axiosInstance.post("/register", registerData, {
        withCredentials: true,
      });
      console.log("success");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={register} className="container">
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter username"
        className="form-control mb-3"
      />
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter email"
        className="form-control mb-3"
      />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter password"
        className="form-control mb-3"
      />
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
};

export default Register;
