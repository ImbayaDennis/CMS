import React, { useState, useEffect } from 'react'
import AppbarContainer from './Appbar/AppbarContainer'
import SidebarContainer from './Sidebar/SidebarContainer'

type Props = {
    children: React.ReactNode | React.ReactNode[]
}

function Layout({children}: Props) {
  const[isDarkTheme, setIsDarkTheme] = useState<boolean>(true)
  const [themeFromStorage, setThemeFromStorage] = useState<boolean>(true)
  

  useEffect(()=>{
    setThemeFromStorage(localStorage.getItem("darkTheme") === "true")
  }, [isDarkTheme])

  return (
    <div className={`${themeFromStorage ? "dark" : ""} relative w-screen h-screen overflow-hidden z-0`}>
        <AppbarContainer/>
        <div className="flex w-full h-full">
          <SidebarContainer themeFromStorage={themeFromStorage} isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
          <main className={`w-[calc(100vw-4rem)] h-full bg-gray-100 md:z-0 md:static -z-10 left-16 fixed dark:bg-gray-800 text-gray-500 dark:text-gray-400`}>{children}</main>
        </div>
    </div>
  )
}

export default Layout