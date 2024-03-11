import { useMediaQuery } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const stateContext = createContext();

export const StateProvider = ({ children }) => {
  // Responsiveness
  const smMobile = useMediaQuery("(max-width: 375px)");
  const mobile = useMediaQuery("(min-width: 376px) and (max-width: 800px)");
  const tablet = useMediaQuery("(min-width: 801px) and (max-width: 1024px)");
  const laptop = useMediaQuery("(min-width: 1025px) and (max-width: 1660px)");
  const desktop = useMediaQuery("(min-width: 1661px)");
  const smHeight = useMediaQuery("(max-height: 600px)");

  const [currentMode, setCurrentMode] = useState("");

  useEffect(() => {
    const setInitialState = async () => {
      let theme = localStorage.getItem("themeMode");
      if (theme === undefined || theme === null) {
        localStorage.setItem("themeMode", "Light");
        setCurrentMode("Light");
      }
    };

    setInitialState();
  }, []);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  useEffect(() => {
    let theme = localStorage.getItem("themeMode");
    window.localStorage.setItem("themeMode", theme);
  }, []);

  useEffect(() => {
    setCurrentMode(localStorage.getItem("themeMode"));
  }, [setCurrentMode]);

  const [showMenu, setShowMenu] = useState(false);

  const stateValues = {
    smMobile,
    mobile,
    tablet,
    laptop,
    desktop,
    smHeight,

    currentMode,
    setMode,

    showMenu,
    setShowMenu,
  };

  return (
    <stateContext.Provider value={stateValues}>
      {children}
    </stateContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
