import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
console.log("Hello");
console.log("Hello");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btnclose");
const btnOpen = document.querySelector(".btnopen");
btnOpen.addEventListener("click", function () {
  overlay.classList.add("hide");
});
btnClose.addEventListener("click", function () {
  overlay.classList.remove("hide");
});
