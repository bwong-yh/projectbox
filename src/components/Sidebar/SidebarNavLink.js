import { Link, styled } from '@mui/material';

const SidebarNavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.mode === 'light' ? theme.palette.primary.dark : '#fff',
  textDecoration: 'none',
  '& div': {
    margin: 0,
    padding: '.5rem 1rem',
  },
  '&:hover .MuiListItemText-root, &.active .MuiListItemText-root': {
    backgroundColor:
      theme.palette.mode === 'light'
        ? '#fff'
        : theme.palette.background.default,
  },
}));

export default SidebarNavLink;
