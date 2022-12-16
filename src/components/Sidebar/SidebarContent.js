import {
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import CustomAvatar from '../CustomAvatar/CustomAvatar';
import SidebarNavLink from './SidebarNavLink';
import useCollection from '../../hooks/useCollection';

const SidebarContent = () => {
  const { user } = useAuthContext();
  const { documents: users } = useCollection('users');

  // sort users display name before displaying
  const sortedUsers = users.sort((a, b) =>
    a.displayName.toUpperCase().localeCompare(b.displayName.toUpperCase)
  );

  return (
    <>
      <Box height='15rem' padding='1rem'>
        <Typography variant='h6' textAlign='center'>
          Hello, {user.displayName}!
        </Typography>
        <CustomAvatar
          user={user}
          sx={{
            height: '75%',
            margin: '.5rem auto',
            width: '75%',
            '& p': {
              fontSize: '4rem',
            },
          }}
        />
      </Box>

      <Divider variant='middle' />

      <List
        sx={{
          margin: '0.5rem 0',
        }}
      >
        <SidebarNavLink component={NavLink} to='/'>
          <ListItemText primary='Dashboard' />
        </SidebarNavLink>
        <SidebarNavLink component={NavLink} to='/create'>
          <ListItemText primary='New Project' />
        </SidebarNavLink>
      </List>

      <Divider variant='middle' />

      <List sx={{ margin: '0.5rem 0' }}>
        {sortedUsers.map(user => (
          <ListItem key={user.id}>
            <Badge
              variant='dot'
              color={user.online ? 'success' : 'grey'}
              overlap='circular'
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <CustomAvatar
                user={user}
                sx={{
                  height: '2rem',
                  width: '2rem',
                }}
              />
            </Badge>
            <ListItemText
              primary={user.displayName}
              sx={{ marginLeft: '1rem' }}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SidebarContent;
