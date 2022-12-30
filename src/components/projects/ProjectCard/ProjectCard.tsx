import Link from "next/link"
import { ReactNode } from "react"

type ProjectCardProps = {
  projectName?: string
  projectId?: string
  children?: ReactNode
  toggleModal?: () => void
}

const ProjectCard = ({projectName, projectId, children, toggleModal}: ProjectCardProps) =>{
  const className = "w-28 h-28 m-2 bg-gray-300 hover:text-orange-600 hover:dark:text-orange-300 hover:scale-105 dark:bg-gray-700 rounded-md shadow-md flex justify-center items-center text-gray-700 dark:text-gray-300 transition-all duration-150"

  let projectCard;

  if(projectId){
    projectCard = (
    <Link href={`/projects/${projectId}`} aria-label={`${projectName}`} className={className}>
      <p>{projectName}</p>
    </Link>
    )
  }else{
    projectCard = <button aria-label="Add project" onClick={toggleModal} className={className}>{children}</button>
  }
  return(
  <div>{projectCard}</div>
  )
  
  
}

export default ProjectCard