import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import About from "./components/About";
import Privacy from "./components/Privacy";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import MyAlertTemplate from "./components/AlertTemplate";

const options = {
    position: "top center",
    timeout: 1500,
    type: "info",
    transition: "fade"
}

ReactDOM.render(
    <React.StrictMode>
        <AlertProvider template={MyAlertTemplate} {...options}>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/l/:id" element={<App />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/privacy" element={<Privacy />} />   
            <Route path="*" element={<App />} />
        </Routes>
        </BrowserRouter>
        </AlertProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
