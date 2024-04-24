import React from "react";

const Register = () => {
  const register = async (e) => {
    e.preventDefault();

    const x = document.getElementById("x").value;

    try {
      const response = await axiosInstance.post("/", x, {
        withCredentials: true,
      });
      console.log("success");
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <form onSubmit={register}>
      <input type="text" placeholder="Enter x" id="x" />
      <button type="submit" className="btn btn-primary">
        Bootstrap button
      </button>
    </form>
  );
};

export default Register;
