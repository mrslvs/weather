import { useState } from "react";
import "../assets/styles/index.scss";
import axiosInstance from "../api/axiosInstance";
import Register from "./Register";

function App() {
  const [count, setCount] = useState(0);

  const send = async (e) => {
    e.preventDefault();

    const testingData = document.getElementById("testingData").value;

    const dataObject = {
      y: testingData,
    };

    try {
      const response = await axiosInstance.post("/", dataObject, {
        withCredentials: true,
      });
      console.log("success");
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <>
      <div className="test">
        <p>hello world!</p>
        <Register />

        <form onSubmit={send}>
          <input
            type="text"
            placeholder="Enter y"
            id="testingData"
            name="testingData"
          />
          <button type="submit" className="btn btn-primary" name="register-btn">
            Bootstrap button Y
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
