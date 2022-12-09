import { Button, styled } from '@mui/material';

const NavbarNavLink = styled(Button)(() => ({
  color: '#fff',
  fontSize: '1rem',
  justifyContent: 'center',
  marginLeft: '1rem',
  minWidth: 0,
  padding: 0,
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

export default NavbarNavLink;
