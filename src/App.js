import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    // this is wrong
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="App">
      <div>
        <button onClick={increment}>+</button>
      </div>
      <div>{count}</div>
      <div>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default App;
