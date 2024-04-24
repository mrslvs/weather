import { useState } from "react";
import "../assets/styles/index.scss";
import axiosInstance from "../api/axiosInstance";
import Register from "./Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="test">
        <p>hello world!</p>
        <Register />
      </div>
    </>
  );
}

export default App;
