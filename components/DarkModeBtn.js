import React from "react";
import { themeContext, themes } from "./context/themeContext";
import { useContext, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const DarkModeBtn = ({ bgColor }) => {
  // const dark_color = "#374151";
  const [darkMode, setDarkMode] = useState(false);
  const { changeTheme } = useContext(themeContext);
  return (
    <>
      {!darkMode ? (
        <div
          className='hover:scale-110 opacity-90 hover:opacity-100 select-none'
          style={{ color: `${bgColor}` }}
        >
          <button aria-label='toggle light mode'>
            <SunIcon
              className='h-6 w-6'
              onClick={() => {
                setDarkMode((prev) => !prev);
                changeTheme(darkMode ? themes.dark : themes.light);
              }}
            ></SunIcon>
          </button>
        </div>
      ) : (
        <div
          style={{ color: `${bgColor}` }}
          className='hover:scale-110 opacity-90 hover:opacity-100 select-none'
        >
          <button aria-label='toggle dark mode'>
            <MoonIcon
              className='h-6 w-6'
              onClick={() => {
                setDarkMode((prev) => !prev);
                changeTheme(darkMode ? themes.dark : themes.light);
              }}
            ></MoonIcon>
          </button>
        </div>
      )}
    </>
  );
};

export default DarkModeBtn;
