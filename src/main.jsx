import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavContext from "./utils/NavProvider.jsx";
import LangContext from "./utils/LangProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangContext>
      <NavContext>
        <App />
      </NavContext>
    </LangContext>
  </React.StrictMode>
);
