import React, { useState, useEffect } from "react";
import AppbarContainer from "./Appbar/AppbarContainer";
import SidebarContainer from "./Sidebar/SidebarContainer";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

function Layout({ children }: Props) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const [themeFromStorage, setThemeFromStorage] = useState<boolean>(true);

  useEffect(() => {
    setThemeFromStorage(localStorage.getItem("darkTheme") === "true");
  }, [isDarkTheme]);

  return (
    <div
      className={`${
        themeFromStorage ? "dark" : ""
      } relative z-0 h-screen w-screen overflow-hidden`}
    >
      <AppbarContainer />
      <div className="flex h-full w-full">
        <SidebarContainer
          themeFromStorage={themeFromStorage}
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
        />
        <main
          className={`fixed left-16 -z-10 h-full w-[calc(100vw-4rem)] bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400 md:static md:z-0`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
