import { Link, styled } from '@mui/material';

const SidebarNavLink = styled(Link)(theme => ({
  color: 'inherit',
  textDecoration: 'none',
  '& div': {
    margin: 0,
    padding: '.5rem 1rem',
  },
  '&:hover div, &.active div': {
    backgroundColor: '#fff',
  },
}));

export default SidebarNavLink;
