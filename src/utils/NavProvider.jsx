import { createContext, useContext, useEffect, useState } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState("#");
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkmode(true);
    }
  }, []);



  return (
    <NavContext.Provider
      value={{ activeNav, setActiveNav, darkmode, setDarkmode }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;

export const useNavContext = () => useContext(NavContext);
