import { Box, IconButton, Stack } from '@mui/material';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import MenuIcon from '@mui/icons-material/Menu';
import useSidebar from '../../hooks/useSidebar';
import NavbarNavLink from './NavbavNavLink';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import useLogout from '../../hooks/useLogout';

const NavbarMobile = () => {
  const { handleSidebar } = useSidebar();
  const { user } = useAuthContext();
  const logout = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      sx={{ width: '100%' }}
    >
      <Stack direction='row' alignItems='center'>
        <IconButton
          sx={{ color: 'white', padding: 0 }}
          onClick={e => {
            e.stopPropagation();
            handleSidebar(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        <AddTaskOutlinedIcon sx={{ color: 'white', marginLeft: '1rem' }} />
      </Stack>

      <Box
        sx={{
          '& button': {
            justifyContent: 'flex-end',
            marginLeft: '-1rem',
          },
        }}
      >
        {user ? (
          <NavbarNavLink component={NavLink} onClick={handleLogout}>
            <LogoutIcon />
          </NavbarNavLink>
        ) : (
          <>
            <NavbarNavLink component={NavLink} to='/login'>
              <LoginIcon />
            </NavbarNavLink>

            <NavbarNavLink component={NavLink} to='/signup'>
              <AppRegistrationIcon />
            </NavbarNavLink>
          </>
        )}
      </Box>
    </Box>
  );
};

export default NavbarMobile;
