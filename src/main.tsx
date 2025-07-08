import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./assets/main.css";
import "./assets/style.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
