import React from 'react';
const getInitialTheme = _ => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedPrefs = window.localStorage.getItem("color-theme")
      if (typeof storedPrefs === "string") {
        return storedPrefs
      }
  
      const userMedia = window.matchMedia("(prefers-color-scheme: light)")
      if (userMedia.matches) {
        return "light"
      }
    }
  
    // If you want to use light theme as the default, return "light" instead
    return "light"
  }
  const getInitialLanguage = _ => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedPrefs = window.localStorage.getItem("language")
      if (typeof storedPrefs === "string") {
        return storedPrefs
      }
  
      const userMedia = window.matchMedia("(prefers-color-scheme: mn)")
      if (userMedia.matches) {
        return "mn"
      }
    }
  
    // If you want to use light theme as the default, return "light" instead
    return "mn"
  }
export const LanguageContext = React.createContext()
export const ThemeContext = React.createContext()
export const LanguageProvider = ({ initialLanguage, children }) => {
 
  const [language, setLanguage] = React.useState(getInitialLanguage)

  const rawSetLanguage = language => {
    const root = window.document.documentElement
    const isEnglish = language === "mn"

    root.classList.remove(isEnglish ? "mn" : "eng")
    root.classList.add(language)

    localStorage.setItem("language", language)
  }
  if (initialLanguage) {
    rawSetLanguage(initialLanguage)
  }
  React.useEffect(
    _ => {
      rawSetLanguage(language)
    },
    [language]
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
export const ThemeProvider = ({ initialTheme, children }) => {

  const [theme, setTheme] = React.useState(getInitialTheme)
  const rawSetTheme = theme => {
    const root = window.document.documentElement
    const isDark = theme === "dark"

    root.classList.remove(isDark ? "light" : "dark")
    root.classList.add(theme)

    localStorage.setItem("color-theme", theme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  React.useEffect(
    _ => {
      rawSetTheme(theme)
    },
    [theme]
  )

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}