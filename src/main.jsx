import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CurrencyProvider } from "./CurrencyContext";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </HashRouter>
  </React.StrictMode>
);






