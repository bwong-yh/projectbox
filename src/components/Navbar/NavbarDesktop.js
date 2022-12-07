import { Box, Stack, Typography } from '@mui/material';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import NavbarButton from './NavbarButton';

const NavbarDesktop = () => {
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
        <NavbarButton variant='text'>Login</NavbarButton>
        <NavbarButton variant='text'>Signup</NavbarButton>
      </Box>
    </Box>
  );
};

export default NavbarDesktop;
