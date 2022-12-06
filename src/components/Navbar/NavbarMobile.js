import { Box, Stack } from '@mui/material';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import MenuIcon from '@mui/icons-material/Menu';

const NavbarMobile = ({ MyNavButton }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      sx={{ width: '100%' }}
    >
      <Stack direction='row' alignItems='center'>
        <MenuIcon />
        <AddTaskOutlinedIcon sx={{ marginLeft: '1rem' }} />
      </Stack>

      <Box>
        <MyNavButton variant='text'>
          <LoginIcon />
        </MyNavButton>
        <MyNavButton variant='text'>
          <AppRegistrationIcon />
        </MyNavButton>
      </Box>
    </Box>
  );
};

export default NavbarMobile;
