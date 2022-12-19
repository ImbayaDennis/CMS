import React from 'react'
import AppbarContainer from './Appbar/AppbarContainer'
import SidebarContainer from './Sidebar/SidebarContainer'

type Props = {
    children: React.ReactNode | React.ReactNode[]
}

function Layout({children}: Props) {
  return (
    <div className='dark w-screen h-screen overflow-hidden z-0'>
        <AppbarContainer/>
        <div className="flex w-full h-full">
          <SidebarContainer/>
          <main className='w-full h-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'>{children}</main>
        </div>
    </div>
  )
}

export default Layout