import { useContext } from "react";
import "./App.css";
import { stateContext } from "./stateContext";
import { Container, Footer, Header } from "./layout";

function App() {
  const { currentMode } = useContext(stateContext);

  return (
    <div className={currentMode === "Dark" ? "dark text-white" : ""}>
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
