import { Box, Stack, Typography } from '@mui/material';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import NavbarLink from './NavbavLink';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import useLogout from '../../hooks/useLogout';

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
        <Typography
          variant='h6'
          color='white'
          noWrap
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
          }}
        >
          PROJECTBOX
        </Typography>
      </Stack>

      <Box>
        {user ? (
          <NavbarLink component={NavLink} onClick={handleLogout}>
            Logout
          </NavbarLink>
        ) : (
          <>
            <NavbarLink component={NavLink} to='/login'>
              Login
            </NavbarLink>
            <NavbarLink component={NavLink} to='/signup'>
              Signup
            </NavbarLink>
          </>
        )}
      </Box>
    </Box>
  );
};

export default NavbarDesktop;
