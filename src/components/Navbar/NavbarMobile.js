import { Box, IconButton, Stack } from '@mui/material';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import MenuIcon from '@mui/icons-material/Menu';
import useSidebar from '../../hooks/useSidebar';
import NavbarButton from './NavbarButton';
import { NavLink } from 'react-router-dom';

const NavbarMobile = () => {
  const { handleSidebar } = useSidebar();

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
        <NavbarButton variant='text' component={NavLink} to='/login'>
          <LoginIcon />
        </NavbarButton>
        <NavbarButton variant='text' component={NavLink} to='/signup'>
          <AppRegistrationIcon />
        </NavbarButton>
      </Box>
    </Box>
  );
};

export default NavbarMobile;
