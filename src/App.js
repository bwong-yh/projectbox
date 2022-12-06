import { Box, Button, CssBaseline, Toolbar, useTheme } from '@mui/material';
import Navbar from './components/Navbar';

function App() {
  const theme = useTheme();

  return (
    <Box>
      <CssBaseline />

      <Navbar />
      <Toolbar />

      <Box
        component='main'
        sx={{ backgroundColor: theme.palette.primary.light }}
      >
        <Button variant='contained'>Test</Button>
      </Box>
    </Box>
  );
}

export default App;
