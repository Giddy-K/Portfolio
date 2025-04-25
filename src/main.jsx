import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 7000, // 🕒 Toast will stay for 7 seconds
        className:
          "bg-[#1a1a1a] text-white font-medium border border-gray-700 shadow-lg rounded-lg p-4",
        style: {
          fontFamily: "Poppins, sans-serif",
        },
        success: {
          icon: "👏",
        },
        error: {
          icon: "⚠️",
        },
      }}
    />
  </React.StrictMode>
);
