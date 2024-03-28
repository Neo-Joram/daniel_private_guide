import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./index.css";
import { StateProvider } from "./stateContext";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <BrowserRouter>
    <StateProvider>
      <App tab="home" />
    </StateProvider>
  </BrowserRouter>
);
