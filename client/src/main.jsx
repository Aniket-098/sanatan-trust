import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SettingsProvider } from "./context/SettingsContext";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SettingsProvider>
        <App />

        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </SettingsProvider>
    </BrowserRouter>
  </React.StrictMode>
);