import ReactDOM from "react-dom/client";
import React from "react";
//import App from "./App";

// const anotherElement = (
//     <a href="https://google.com" target="_blank">
//         Visit Google
//     </a>
// );

const anotherUser = "chai aur react"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click me to google',
  anotherUser

)



ReactDOM.createRoot(document.getElementById("root")).render(
   reactElement
);