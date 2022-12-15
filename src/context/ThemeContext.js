import { createTheme } from '@mui/material';
import { createContext, useState } from 'react';
import { lightThemeStyle, darkThemeStyle } from '../styles/theme';

const ThemeContext = createContext();

const lightTheme = createTheme({ ...lightThemeStyle });
const darkTheme = createTheme({ ...darkThemeStyle });

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: !darkMode ? lightTheme : darkTheme, changeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
