import { SETTINGS } from "../constants/constants"
import * as translations from "../translations"
import { useLocalStorage } from "./useStorage"

export default function useTranslation() {
  const [settings, setSettingsLang] = useLocalStorage("settings", JSON.stringify(SETTINGS));
  const parsedSettings = settings ? JSON.parse(settings) : SETTINGS;
  // const [language, setLanguage] = useLocalStorage("language", "en");
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
    "fallbackLanguage",
    "english"
  )

  const translate = key => {
    const keys = key.split(".")
    
    return (
      getNestedTranslation(parsedSettings.language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    )
  }

  return {
    // language,
    // setLanguage,
    // fallbackLanguage,
    // setFallbackLanguage,
    setSettingsLang,
    setFallbackLanguage,
    t: translate,
  }
}

function getNestedTranslation(language, keys) {
  return keys.reduce((obj, key) => {
    return obj?.[key]
  }, translations[language])
}