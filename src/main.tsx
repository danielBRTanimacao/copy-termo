import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/Remedy.css";
import "./assets/css/Index.css";
import App from "./App.tsx";
import About from "./About.tsx";

createRoot(document.getElementById("root")!).render(
    <>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    </>
);
