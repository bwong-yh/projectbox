import { createTheme } from '@mui/material';
import { createContext, useState } from 'react';
import { lightThemeStyle, darkThemeStyle } from '../styles/theme';

const ThemeContext = createContext();

const lightTheme = createTheme({ ...lightThemeStyle });
const darkTheme = createTheme({ ...darkThemeStyle });

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  );

  const changeMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: !darkMode ? lightTheme : darkTheme,
        changeMode: changeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
