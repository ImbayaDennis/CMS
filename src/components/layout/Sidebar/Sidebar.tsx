import Link from 'next/link'
import { ReactNode,Dispatch, SetStateAction } from 'react'
import { HiCollection , HiHome, HiMenuAlt2 } from 'react-icons/hi'
import { links } from '../../../assets/constants'

type Props = {
  isOpen: boolean
  setState: Dispatch<SetStateAction<boolean>>
}

const Sidebar = ({isOpen, setState}: Props) => {

  const width = isOpen ? "w-[14rem]" : "w-14"

  return (
    <div className={`bg-slate-800 border-r border-r-gray-900 ${width} p-4 flex flex-col items-center h-full transition-all`}>
      <button onClick={()=> setState(prev => (!prev))} className='text-2xl text-gray-500 hover:text-orange-400 py-2 transition-colors self-end'><HiMenuAlt2 /></button>
      <div className=" flex flex-col self-start my-4">
          <SidebarLink onClick={()=> setState(prev => (false))} sidebarOpen={isOpen} link={links.home} icon={<HiHome/>} to="Home" />
          <SidebarLink onClick={()=> setState(prev => (false))} sidebarOpen={isOpen} link={links.projects} icon={<HiCollection/>} to="Projects" />
      </div>
    </div>
  )
}

type SidebarLinkProps = {
    link: string;
    icon: ReactNode;
    to: string;
    sidebarOpen: boolean
    onClick?: ()=>void

}

const SidebarLink = ({link, icon, to, sidebarOpen, onClick}: SidebarLinkProps) =>{
    return <Link className='text-2xl text-gray-400 hover:text-orange-400 py-2  rounded-md transition-colors flex items-center flex-nowrap' aria-label={to} href={link} >{icon} <span className={`${sidebarOpen ? "opacity-100" : "opacity-0"} ml-6 text-base transition-opacity`}>{to}</span></Link>
}

export default Sidebar