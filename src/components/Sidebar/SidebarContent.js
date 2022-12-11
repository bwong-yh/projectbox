import { Box, Divider, List, ListItemText, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import CustomAvatar from '../CustomAvatar/CustomAvatar';
import SidebarNavLink from './SidebarNavLink';

const SidebarContent = () => {
  const { user } = useAuthContext();

  return (
    <>
      <Box height='15rem' padding='1rem'>
        <Typography variant='h6' textAlign='center'>
          Hello, {user.displayName}!
        </Typography>
        <CustomAvatar
          user={user}
          sx={{ height: '75%', margin: '.5rem auto', width: '75%' }}
        />
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
