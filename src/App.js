import { useContext } from "react";
import "./App.css";
import { stateContext } from "./stateContext";
import { Route, Routes } from "react-router-dom";
import {
  AboutMePage,
  ExplorePage,
  HomePage,
  MorePage,
  ServicePage,
} from "./pages";

function App() {
  const { currentMode } = useContext(stateContext);

  return (
    <div className={currentMode === "Dark" ? "dark text-white" : ""}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/aboutMe" element={<AboutMePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/more" element={<MorePage />} />
      </Routes>
    </div>
  );
}

export default App;
