import { useEffect } from "react";
import { useState, createContext } from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.classList.add(darkMode);
  }, []);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.remove(darkMode);
    document.body.classList.add(!darkMode);
  };

  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </>
  );
}

export { DarkModeContext, DarkModeProvider };
