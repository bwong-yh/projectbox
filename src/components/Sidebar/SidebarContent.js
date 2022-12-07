import { Box, Divider, List, ListItem, ListItemText } from '@mui/material';

const SidebarContent = () => {
  return (
    <>
      <Box>Hello, User!</Box>

      <Divider variant='middle' />

      <List>
        <ListItem>
          <ListItemText primary='Dashboard' />
        </ListItem>
        <ListItem>
          <ListItemText primary='New Project' />
        </ListItem>
      </List>

      <Divider variant='middle' />
    </>
  );
};

export default SidebarContent;
