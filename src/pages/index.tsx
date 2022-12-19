import { NextPage } from 'next'
import React from 'react'
import Loader from '../components/common/Loader'
import { useSession } from 'next-auth/react'
import { getProjects } from '../utils/apiFunctions'
import Link from 'next/link'

const Home: NextPage = () => {
  const {data: session} = useSession()
  const {data: projects, isLoading, error, refetch} = getProjects()

  if(isLoading){
    return <Loader/>
  }

  if(error){
    return<></>
  }

  if(session){
    return (
        <div className="container mx-auto flex flex-col min-h-screen p-4 items-center">
            <button className="btn-1"><Link href="/projects" >View projects</Link></button>
        </div> 
    );
  }

  return <div className="flex items-center justify-center w-full h-full">
    <p>Sign in to access content</p>
  </div>
}

export default Home