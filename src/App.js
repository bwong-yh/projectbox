import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import useSidebar from './hooks/useSidebar';
import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar';
import Create from './pages/Create/Create';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  const { handleSidebar } = useSidebar();

  return (
    // sidebar is close when click on any in the app
    <Box onClick={() => handleSidebar(false)}>
      <CssBaseline />

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='create' element={<Create />} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
