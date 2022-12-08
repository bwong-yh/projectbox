import { Button, styled } from '@mui/material';

const NavbarButton = styled(Button)(() => ({
  color: '#fff',
  fontSize: '1rem',
  justifyContent: 'center',
  marginLeft: '1rem',
  minWidth: 0,
  padding: 0,
  '&:hover': {
    fontWeight: 700,
  },
}));

export default NavbarButton;
