import { useSession } from 'next-auth/react'
import React, { ChangeEvent, FormEvent, useState, useContext } from 'react'
import { createProject } from '../../../utils/apiFunctions'
import { ModalContextProvider } from '../../../contexts/ModalsContext'
import ProjectForm from '../../projects/ProjectForm/ProjectForm'

type Props = {
    refetchProjects: () => any
}

const ProjectFormContainer = ({refetchProjects}: Props) => {
  const [projectName, setProjectNme] = useState<string>("")
  const {data: session} = useSession()
  const {setModals} = useContext(ModalContextProvider)
  
  const newProject = createProject()
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setProjectNme(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if(session?.user){
      newProject.mutateAsync({name: projectName}).then(()=> refetchProjects())
      
    }
    setProjectNme("")
    setModals ? setModals(prev=>({...prev, createProject: {isOpen: false}})) : null
  }

  return (
        <ProjectForm handleSubmit={handleSubmit} name={`projectName`} value={projectName} onChange={handleChange} />
  )
}

export default ProjectFormContainer