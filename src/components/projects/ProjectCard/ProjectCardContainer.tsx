import { ReactNode, useContext } from 'react'
import ProjectCard from './ProjectCard'
import { ModalContextProvider } from '../../../contexts/ModalsContext'

type Props = {
  projectName?: string
  projectId?: string
  children?: ReactNode
}

const ProjectCardContainer = ({projectId, projectName, children}: Props) => {

  const {setModals} = useContext(ModalContextProvider)

  const toggleModal = () =>{
    if(setModals){
      setModals((prev)=> ({ ...prev, createProject: {isOpen: true}}))
    }
  }

  return (
    <ProjectCard projectId={projectId} projectName={projectName} toggleModal={toggleModal}>{children}</ProjectCard>
  )
}

export default ProjectCardContainer