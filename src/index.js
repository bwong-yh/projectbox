import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SidebarProvider } from './context/SidebarContext';
import { AuthContextProvider } from './context/AuthContext';
import { ThemeContextProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
