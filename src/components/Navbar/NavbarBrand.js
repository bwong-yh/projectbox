import { styled, Typography } from '@mui/material';

const NavbarBrand = () => {
  const Brand = styled(Typography)(() => ({
    color: 'white',
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
  }));

  return (
    <Brand variant='h6' noWrap>
      PROJECTBOX
    </Brand>
  );
};

export default NavbarBrand;
