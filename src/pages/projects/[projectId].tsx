import { NextPage } from 'next'
import {useState, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/router'
import CategoriesContainer from '../../components/projects/Categories/CategoriesContainer'
import PropertiesContainer from '../../components/projects/Properties/PropertiesContainer'
import Loader from '../../components/common/Loader'
import { Category } from '@prisma/client'
import { getCategories, getProject } from '../../utils/apiFunctions'
import { HiClipboard } from 'react-icons/hi'
import { env } from '../../env/client.mjs'
import { useSession } from 'next-auth/react'

const ProjectContainer: NextPage = () => {
  const{status} = useSession()
  const router = useRouter()

  if(status !== "authenticated"){
    router.isReady ? router.push("/") : null
  }

  const {projectId} = router.query
  const {data: categories, isLoading, error, refetch} = getCategories({projectId})
  const {data: project} = getProject(router.isReady ? projectId : "") 
  const[apiLink, setApiLink] = useState<string>("api.link")
  const [activeCategory, setActiveCategory] = useState<Category | null>(null)

  useEffect(()=>{
    setApiLink(
      `${env.NEXT_PUBLIC_BASE_URL}/api/project/${project?.connectedProject?.id}`
    );
  },[project])

  if(isLoading){
    return <Loader/>
  }

  if(error){
    return(
      <div className="w-full h-full p-2">
        <p>Error: {error.message}</p>
      </div>
    )
  }
  



  const copyToClipboard = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigator.clipboard.writeText(apiLink)
    alert("Link copied!")
  }

  
  return (
    <div className="w-full h-full">
      <form className='m-2 ' onSubmit={(e)=> copyToClipboard(e)}>
        <legend className='m-2 text-lg'>Project API Link</legend>
        <div className="flex items-center">
        <input type="text" disabled className='form-input' value={apiLink} />
        <button type='submit' className='btn-1 w-16 flex items-center justify-center text-xl'><HiClipboard/></button>
        </div>
      </form>
      <div className={`w-full h-full p-2 flex flex-col sm:flex-row`}>
        <CategoriesContainer categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} projectId={projectId} refetchCategories={refetch} />
        <PropertiesContainer category={activeCategory} />
      </div> 
    </div>
   
  )
}

export default ProjectContainer