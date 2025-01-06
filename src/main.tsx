import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/Remedy.css";
import "./assets/css/Index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
