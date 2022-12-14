import { Link, styled } from '@mui/material';

const SidebarNavLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
  '& div': {
    margin: 0,
    padding: '.5rem 1rem',
  },
});

export default SidebarNavLink;
