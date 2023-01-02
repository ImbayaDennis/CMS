import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import Sidebar from './Sidebar'

type Props = {
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>
  themeFromStorage: boolean
}

const SidebarContainer = ({isDarkTheme, setIsDarkTheme, themeFromStorage}: Props) => {

  const [isOpen, setIsOpen] = useState(false)

  const setTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    localStorage.setItem("darkTheme", `${!isDarkTheme}`);
  }

  return (
    <Sidebar isDarkTheme={themeFromStorage} setIsDarkTheme={setTheme} isOpen={isOpen} setState={setIsOpen} />
  )
}

export default SidebarContainer