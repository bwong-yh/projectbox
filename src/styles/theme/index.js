import { createTheme } from '@mui/material';

const colors = {
  gray: {
    100: '#f0f0f0',
    200: '#e0e0e0',
    300: '#d1d1d1',
    400: '#c1c1c1',
    500: '#b2b2b2',
    600: '#8e8e8e',
    700: '#6b6b6b',
    800: '#474747',
    900: '#242424',
  },
  indigo: {
    100: '#dbdde4',
    200: '#b6bbc9',
    300: '#9299af',
    400: '#6d7794',
    500: '#495579',
    600: '#3a4461',
    700: '#2c3349',
    800: '#1d2230',
    900: '#0f1118',
  },
};

const drawerWidth = 240;

const theme = {
  palette: {
    primary: {
      light: colors.gray[100],
      main: colors.gray[300],
      dark: colors.gray[700],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': { backgroundColor: 'transparent' },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: drawerWidth,
        },
      },
    },
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif",
  },
};

export { theme, colors };
