import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import useSidebar from './hooks/useSidebar';
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar';
import Create from './pages/Create/Create';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import useAuthContext from './hooks/useAuthContext';
import Project from './pages/Project/Project';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { handleSidebar } = useSidebar();
  const { user, authReady } = useAuthContext();
  const theme = useContext(ThemeContext);

  return (
    <>
      {
        // reader app only if authReady is true
        authReady && ( // sidebar is close when click on any in the app
          <ThemeProvider theme={theme}>
            <Box onClick={() => handleSidebar(false)}>
              <CssBaseline />

              <BrowserRouter>
                <Navbar />

                <Routes>
                  <Route path='/' element={<Layout user={user} />}>
                    <Route index element={<Dashboard />} />
                    <Route path='create' element={<Create />} />
                    <Route path='project/:id' element={<Project />} />
                  </Route>

                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<Signup />} />
                  <Route path='*' element={<Navigate to='/' />} />
                </Routes>
              </BrowserRouter>
            </Box>
          </ThemeProvider>
        )
      }
    </>
  );
}

export default App;
