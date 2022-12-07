import { Button, styled } from '@mui/material';

const NavbarButton = styled(Button)(() => ({
  color: '#000',
  fontSize: '1rem',
  justifyContent: 'center',
  marginLeft: '1rem',
  padding: 0,
  '&:hover': {
    fontWeight: 700,
  },
}));

export default NavbarButton;
