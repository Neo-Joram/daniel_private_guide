import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./index.css";
import { StateProvider } from "./stateContext";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <StateProvider>
    <App tab="home" />
  </StateProvider>
);
