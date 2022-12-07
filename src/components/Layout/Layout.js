import { Outlet } from 'react-router-dom';
import { Box, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import Sidebar from '../Sidebar';

const Layout = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const draweWidth = theme.components.MuiDrawer.styleOverrides.paper.width;

  return (
    <>
      <Sidebar />

      <Box
        component='main'
        sx={{
          backgroundColor: '#fff',
          marginLeft: 'auto',
          width: matches ? '100%' : `calc(100% - ${draweWidth}px)`,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
