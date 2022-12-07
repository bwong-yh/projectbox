import { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';

const useSidebar = () => {
  const context = useContext(SidebarContext);

  return context;
};

export default useSidebar;
