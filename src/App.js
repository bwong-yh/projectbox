import { Box, Container, CssBaseline, Toolbar, useTheme } from '@mui/material';
import useSidebar from './components/hooks/useSidebar';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const theme = useTheme();
  const { handleSidebar } = useSidebar();

  return (
    // sidebar is close when click on any in the app
    <Box onClick={() => handleSidebar(false)}>
      <CssBaseline />
      <Navbar />
      <Toolbar />

      <Box
        component='main'
        display='flex'
        sx={{ backgroundColor: theme.palette.primary.light }}
      >
        <Sidebar />
      </Box>
    </Box>
  );
}

export default App;
