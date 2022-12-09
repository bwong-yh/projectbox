import { Box, Stack, Typography } from '@mui/material';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import NavbarNavLink from './NavbavNavLink';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import useLogout from '../../hooks/useLogout';
import NavbarBrand from './NavbarBrand';

const NavbarDesktop = () => {
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
        <AddTaskOutlinedIcon sx={{ color: 'white', mr: '1rem' }} />
        <NavbarBrand />
      </Stack>

      <Box>
        {user ? (
          <NavbarNavLink component={NavLink} onClick={handleLogout}>
            Logout
          </NavbarNavLink>
        ) : (
          <>
            <NavbarNavLink component={NavLink} to='/login'>
              Login
            </NavbarNavLink>
            <NavbarNavLink component={NavLink} to='/signup'>
              Signup
            </NavbarNavLink>
          </>
        )}
      </Box>
    </Box>
  );
};

export default NavbarDesktop;
