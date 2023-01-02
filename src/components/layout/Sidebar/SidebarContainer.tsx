import { useState, Dispatch, SetStateAction } from 'react'
import Sidebar from './Sidebar'

type Props = {
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>
}

const SidebarContainer = ({isDarkTheme, setIsDarkTheme}: Props) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sidebar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} isOpen={isOpen} setState={setIsOpen} />
  )
}

export default SidebarContainer