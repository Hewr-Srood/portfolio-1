import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider(props) {
  const [theme, setTheme] = useState(true);
  const handleTheme = () => setTheme(!theme);
  return (
    <>
      <ThemeContext.Provider value={{ theme, handleTheme }}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
}
