import { Drawer, useMediaQuery, Toolbar, useTheme } from '@mui/material';
import { useContext } from 'react';
import { SidebarContext } from '../../context/SidebarContext';
import SidebarContent from './SidebarContent';

const Sidebar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const { sidebarOpen } = useContext(SidebarContext);

  return (
    <Drawer
      open={sidebarOpen}
      variant={matches ? 'temporary' : 'permanent'}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: theme.palette.primary.light,
          border: 0,
        },
      }}
    >
      <Toolbar />
      <SidebarContent />
    </Drawer>
  );
};

export default Sidebar;
