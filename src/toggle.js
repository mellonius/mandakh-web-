import React, { useContext } from 'react';
import logo from './logo.svg';
import { ThemeContext } from "./theme"
export const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <span className="dark:text-white cursor-pointer select-none font-bold  w-30 h-30" onClick={() => { setTheme(theme === "dark" ? "light" : "dark") }}>
      <img src={logo} className="w-30 h-30 select-none" alt="logo" />
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </span>
  )
}