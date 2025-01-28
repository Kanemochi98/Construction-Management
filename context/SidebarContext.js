import React, { createContext, useState, useContext } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isMini, setIsMini] = useState(false);

  const toggleSidebar = () => {
    setIsMini((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isMini, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
