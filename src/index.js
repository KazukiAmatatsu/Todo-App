import React from "react";
import { render } from "react-dom";
import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./App";

// optional configuration
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);

render(<Root />, document.getElementById("root"));
