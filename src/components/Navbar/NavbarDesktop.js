import { Box, Stack, Typography } from '@mui/material';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';

const NavbarDesktop = ({ MyNavButton }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      sx={{ width: '100%' }}
    >
      <Stack direction='row' alignItems='center'>
        <AddTaskOutlinedIcon sx={{ mr: '1rem' }} />
        <Typography
          variant='h6'
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
        <MyNavButton variant='text'>Login</MyNavButton>
        <MyNavButton variant='text'>Signup</MyNavButton>
      </Box>
    </Box>
  );
};

export default NavbarDesktop;
