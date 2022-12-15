import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import Appbar from './Appbar'

type Props = {}

const AppbarContainer = (props: Props) => {
  const {data} = useSession()

  let isAuth = data ? true : false

  return (
    <Appbar signIn={signIn} isAuth={isAuth} />
  )
}

export default AppbarContainer