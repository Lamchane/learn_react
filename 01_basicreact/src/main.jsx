import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

const reactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Google"
);

// const reactsElement  = {
//   target : 'a',
//   props: {
//     href: 'sagargurung9004@gmail.com',
//     target:'_blank'
//   },
//   Children : 'Click'
// }
// const men = document.getElementById('root')
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <reactElement/> */}
  </StrictMode>
);
