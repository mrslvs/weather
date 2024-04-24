import { useState } from "react";
import "../assets/styles/index.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="test">
        <p>hello world!</p>
        <button className="btn btn-primary">Bootstrap button</button>
      </div>
    </>
  );
}

export default App;
