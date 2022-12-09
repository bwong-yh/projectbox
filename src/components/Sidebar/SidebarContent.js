import { Box, Divider, List, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import SidebarNavLink from './SidebarNavLink';

const SidebarContent = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Box height='15rem'>
        Hello, {(user && user.displayName) || 'stranger'}!
      </Box>

      <Divider variant='middle' />

      <List sx={{ margin: '0.5rem 0' }}>
        <SidebarNavLink component={NavLink} to='/'>
          <ListItemText primary='Dashboard' />
        </SidebarNavLink>
        <SidebarNavLink component={NavLink} to='/create'>
          <ListItemText primary='New Project' />
        </SidebarNavLink>
      </List>

      <Divider variant='middle' />
    </>
  );
};

export default SidebarContent;
