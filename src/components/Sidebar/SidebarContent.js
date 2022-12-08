import { Box, Divider, List, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SidebarNavLink from './SidebarNavLink';

const SidebarContent = () => {
  return (
    <>
      <Box height='15rem'>Hello, User!</Box>

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
