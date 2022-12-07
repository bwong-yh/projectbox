import { Drawer, useMediaQuery, Toolbar, useTheme } from '@mui/material';
import useSidebar from '../hooks/useSidebar';
import SidebarContent from './SidebarContent';

const Sidebar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const { sidebarOpen } = useSidebar();

  return (
    <Drawer
      open={sidebarOpen}
      variant={!matches && 'permanent'}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: theme.palette.primary.light,
        },
      }}
    >
      <Toolbar />
      <SidebarContent />
    </Drawer>
  );
};

export default Sidebar;
