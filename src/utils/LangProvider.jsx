import { createContext, useContext, useState } from "react";

const LangContext = createContext();

const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;

export const useLangContext = () => useContext(LangContext);
