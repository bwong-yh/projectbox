import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import useAuthContext from '../../hooks/useAuthContext';
import useLogout from '../../hooks/useLogout';
import { NavLink, useNavigate } from 'react-router-dom';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import NavbarNavLink from './NavbavNavLink';
import NavbarBrand from './NavbarBrand';
import ModeSwitch from './ModeSwitch';
import { useContext } from 'react';
import { SidebarContext } from '../../context/SidebarContext';

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const smMatches = useMediaQuery(theme.breakpoints.down('sm'));
  const { user } = useAuthContext();
  const logout = useLogout();
  const navigate = useNavigate();
  const { handleSidebar } = useContext(SidebarContext);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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
      {/* <Toolbar>{matches ? <NavbarMobile /> : <NavbarDesktop />}</Toolbar> */}
      <Toolbar>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          sx={{ width: '100%' }}
        >
          <Stack direction='row' alignItems='center'>
            {matches ? (
              <>
                <IconButton
                  sx={{ color: 'white', padding: 0 }}
                  onClick={e => {
                    e.stopPropagation();
                    handleSidebar(true);
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <AddTaskOutlinedIcon
                  sx={{ color: 'white', margin: '0 1rem' }}
                />
                {!smMatches && <NavbarBrand />}
              </>
            ) : (
              <>
                <AddTaskOutlinedIcon sx={{ color: 'white', mr: '1rem' }} />
                <NavbarBrand />
              </>
            )}
          </Stack>

          <Box>
            <ModeSwitch />

            {user ? (
              <NavbarNavLink component={NavLink} onClick={handleLogout}>
                {matches ? <LogoutIcon /> : 'Logout'}
              </NavbarNavLink>
            ) : (
              <>
                <NavbarNavLink component={NavLink} to='/login'>
                  {matches ? <LoginIcon /> : 'Login'}
                </NavbarNavLink>
                <NavbarNavLink component={NavLink} to='/signup'>
                  {matches ? <AppRegistrationIcon /> : 'Signup'}
                </NavbarNavLink>
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
