import {
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import CustomAvatar from '../CustomAvatar/CustomAvatar';
import SidebarNavLink from './SidebarNavLink';
import useCollection from '../../hooks/useCollection';

const SidebarContent = () => {
  const { user } = useAuthContext();
  const { documents: users } = useCollection('users');
  const theme = useTheme();

  // sort users display name before displaying
  users.sort((a, b) => {
    return a.displayName.toUpperCase().localeCompare(b.displayName.toUpperCase);
  });

  return (
    <>
      <Box height='15rem' padding='1rem'>
        <Typography variant='h6' textAlign='center'>
          Hello, {user.displayName}!
        </Typography>
        <CustomAvatar
          user={user}
          sx={{
            fontSize: '4rem',
            height: '75%',
            margin: '.5rem auto',
            width: '75%',
          }}
        />
      </Box>

      <Divider variant='middle' />

      <List
        sx={{
          margin: '0.5rem 0',
          '& a:hover div, & a.active div': {
            backgroundColor:
              theme.palette.mode === 'light'
                ? '#fff'
                : theme.palette.background.default,
          },
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
        {users.map(user => (
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
