import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';
import { SidebarProvider } from './context/SidebarContext';
import { AuthContextProvider } from './context/AuthContext';
import { ThemeContextProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      {/* <ThemeProvider theme={theme}> */}
      <AuthContextProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </AuthContextProvider>
      {/* </ThemeProvider> */}
    </ThemeContextProvider>
  </React.StrictMode>
);
