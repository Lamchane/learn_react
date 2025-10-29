import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 p-4 text-4xl rounded-2xl mb-7">
        React Props
      </h1>
      <Card title="Nature" btn="Click here" />
    </>
  );
}

export default App;
