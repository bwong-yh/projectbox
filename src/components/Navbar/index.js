import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      elevation={0}
      component='nav'
      position='fixed'
      sx={{
        backgroundColor: theme.palette.primary.dark,
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>{matches ? <NavbarMobile /> : <NavbarDesktop />}</Toolbar>
    </AppBar>
  );
};

export default Navbar;
