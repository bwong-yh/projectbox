import { Navigate, Outlet } from 'react-router-dom';
import { Box, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ user }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const draweWidth = theme.components.MuiDrawer.styleOverrides.paper.width;

  return (
    <>
      {user ? (
        <>
          <Sidebar />

          <Box
            component='main'
            sx={{
              backgroundColor:
                theme.palette.mode === 'light'
                  ? '#fff'
                  : theme.palette.background.default,
              marginLeft: 'auto',
              width: matches ? '100%' : `calc(100% - ${draweWidth}px)`,
            }}
          >
            <Toolbar />
            <Outlet />
          </Box>
        </>
      ) : (
        <Navigate to='/login' />
      )}
    </>
  );
};

export default Layout;
