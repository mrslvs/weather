import React from "react";
import axiosInstance from "../api/axiosInstance";

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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={register}>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter username"
      />
      <input type="text" id="email" name="email" placeholder="Enter email" />
      <input
        type="text"
        id="password"
        name="password"
        placeholder="Enter password"
      />
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
};

export default Register;
