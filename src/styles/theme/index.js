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
};

const theme = createTheme({
  palette: {
    primary: {
      light: colors.gray[100],
      main: colors.gray[300],
      dark: colors.gray[500],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
    },
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif",
  },
});

export default theme;
