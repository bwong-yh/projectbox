import {
  AppBar,
  Button,
  styled,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const MyNavButton = styled(Button)(() => ({
    color: '#000',
    fontSize: '1rem',
    justifyContent: matches ? 'flex-end' : 'center',
    marginLeft: matches ? '-1rem' : '1rem',
    padding: matches ? 0 : 'inherit',
    '&:hover': {
      fontWeight: 700,
    },
  }));

  return (
    <AppBar elevation={0}>
      <Toolbar>
        {matches ? (
          <NavbarMobile MyNavButton={MyNavButton} />
        ) : (
          <NavbarDesktop MyNavButton={MyNavButton} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
