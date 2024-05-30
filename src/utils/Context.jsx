import { createContext, useContext, useState } from "react";

const NavContext = createContext();

const Context = ({ children }) => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <NavContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </NavContext.Provider>
  );
};

export default Context;

export const useNavContext = () => useContext(NavContext);
