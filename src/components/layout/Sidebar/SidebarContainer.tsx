import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import Sidebar from './Sidebar'

type Props = {
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>
  themeFromStorage: boolean
}

const SidebarContainer = ({isDarkTheme, setIsDarkTheme, themeFromStorage}: Props) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  const setTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    localStorage.setItem("darkTheme", `${!isDarkTheme}`);
  }

  return (
    <Sidebar isDarkTheme={themeFromStorage} setIsDarkTheme={setTheme} isOpen={sidebarIsOpen} setState={setSidebarIsOpen} />
  )
}

export default SidebarContainer