import { createTheme } from '@mui/material';
import { createContext, useState } from 'react';
import { defaultTheme, colors } from '../styles/theme';

const ThemeContext = createContext();

const lightTheme = createTheme({
  ...defaultTheme,
});

const darkTheme = createTheme({
  ...defaultTheme,
  palette: {
    mode: 'dark',
    primary: {
      light: colors.indigo[300],
      main: colors.indigo[400],
      dark: colors.indigo[700],
    },
    background: {
      paper: colors.indigo[500],
      default: colors.indigo[500],
    },
  },
  components: {
    ...defaultTheme.components,
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: colors.indigo[500],
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
  },
});

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={!darkMode ? lightTheme : darkTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
