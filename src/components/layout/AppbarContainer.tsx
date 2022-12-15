import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import Appbar from './Appbar'

type Props = {}

const AppbarContainer = (props: Props) => {
  const {data} = useSession()

  let isAuth = data ? true : false
  let imgUrl = data?.user?.image ? data?.user?.image : "https://icons8.com/icon/98957/user"

  return (
    <Appbar signIn={signIn} signOut={signOut} isAuth={isAuth} imgUrl={imgUrl} />
  )
}

export default AppbarContainer