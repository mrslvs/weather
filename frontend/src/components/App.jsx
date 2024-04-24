import { useState } from "react";
import "../assets/styles/index.scss";
import axiosInstance from "../api/axiosInstance";

function App() {
  const [count, setCount] = useState(0);

  const send = async (e) => {
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
    <>
      <div className="test">
        <p>hello world!</p>
        <form onSubmit={send}>
          <input type="text" placeholder="Enter x" id="x" />
          <button type="submit" className="btn btn-primary">
            Bootstrap button
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
