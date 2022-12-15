import React from 'react'
import AppbarContainer from './AppbarContainer'

type Props = {
    children: React.ReactNode | React.ReactNode[]
}

function Layout({children}: Props) {
  return (
    <div className='dark w-screen h-screen overflow-hidden'>
        <AppbarContainer/>
        <div className='w-full h-full bg-gray-100 dark:bg-gray-800'>{children}</div>
    </div>
  )
}

export default Layout