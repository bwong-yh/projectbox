import { createContext, useState } from 'react';

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = open => {
    setSidebarOpen(open);
  };

  return (
    <SidebarContext.Provider value={{ sidebarOpen, handleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
