import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCount] = useState(15);
  //let counter = 5;
  const addValue = () => {
    // console.log("value added", Math.random() * 100);
    if (counter >= 20) {
      return;
    }
    //counter = counter + 1;
    setCount(counter + 1);
    //  console.log("value added", counter);
  };

  const removeValue = () => {
    if (counter <= 0) {
      return;
    }
    setCount(counter - 1);
    //console.log("value subtract", counter);
  };
  return (
    <>
      <h1>Counter value: {counter}</h1>
      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
    </>
  );
}

export default App;
