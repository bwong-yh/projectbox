import { createTheme } from '@mui/material';
import { createContext, useState } from 'react';
import { lightThemeStyle, darkThemeStyle } from '../styles/theme';

const ThemeContext = createContext();

const lightTheme = createTheme({ ...lightThemeStyle });
const darkTheme = createTheme({ ...darkThemeStyle });

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={!darkMode ? lightTheme : darkTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
