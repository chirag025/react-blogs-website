import React, { useContext } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { AppContext } from "../context/AppContext";

const Header = () => {

  const {isDarkMode, setIsDarkMode} = useContext(AppContext);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-md py-3 fixed top-0 left-0 z-10">
      <header className="flex justify-between md:justify-center items-center w-full max-w-6xl mx-auto px-4">
        <h1 className="text-2xl font-bold uppercase text-black dark:text-white">
          Blog Nexus
        </h1>
        <button
          onClick={toggleDarkMode}
          className="py-2 px-4 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition duration-300 dark:bg-gray-700 dark:hover:bg-gray-600 absolute right-6"
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-400" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-200" />
          )}
        </button>
      </header>
    </div>
  );
};

export default Header;
