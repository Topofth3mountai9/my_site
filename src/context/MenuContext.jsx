import { createContext, useContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [is_menu_open, set_is_menu_open] = useState(false);

  const toggle_menu = () => set_is_menu_open((prev) => !prev);
  return (
    <MenuContext.Provider
      value={{
        is_menu_open,
        set_is_menu_open,
        toggle_menu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
