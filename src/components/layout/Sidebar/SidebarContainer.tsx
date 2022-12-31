import { useState } from 'react'
import Sidebar from './Sidebar'

type Props = Record<string, unknown>

const SidebarContainer = (props: Props) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sidebar isOpen={isOpen} setState={setIsOpen} />
  )
}

export default SidebarContainer