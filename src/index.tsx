import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AccountantsProvider } from "./context";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AccountantsProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AccountantsProvider>
  </React.StrictMode>
);
