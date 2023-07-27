import React from "react";
import Select from "../Select/Select";
import { nanoid } from "nanoid";
import { useTranslationContext } from "../../context/TranslationContext/TranslationContext";

const LANGUAGE_OPTIONS = [
  {
    value: "es",
    label: "Español (ES)",
  },
  {
    value: "en",
    label: "English (EN)",
  },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useTranslationContext();
  return (
    <Select
      value={language}
      label={language === "es" ? "Selecciona un idioma" : "Select a language"}
      name="language"
      id={nanoid()}
      options={LANGUAGE_OPTIONS}
      onChange={(e) => setLanguage(e.target.value)}
    />
  );
};

export default LanguageSelector;
