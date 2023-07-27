import React, { createContext, useContext, useState } from "react";

const TranslationContext = createContext();

const TranslationProvider = ({ defaultLanguage = "es", children }) => {
  const [language, setLanguage] = useState(defaultLanguage);
  return (
    <TranslationContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

const useTranslationContext = () => useContext(TranslationContext);

export { TranslationContext, TranslationProvider, useTranslationContext };
