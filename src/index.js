import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

if (module.hot) {
  let root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
} else {
  ReactDOM.hydrateRoot(
    document.getElementById("root"),
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}