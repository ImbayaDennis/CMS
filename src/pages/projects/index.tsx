import { type NextPage } from "next";
import Loader from "../../components/common/Loader";
import ProjectCardContainer from "../../components/home/ProjectCard/ProjectCardContainer";
import ProjectFormContainer from "../../components/home/ProjectForm/ProjectFormContainer";
import { getProjects } from "../../utils/apiFunctions";
import { HiPlusCircle } from 'react-icons/hi'
import ModalContainer from "../../components/common/Modal/ModalContainer";
import { useSession } from "next-auth/react";

const Projects: NextPage = () => {
  const {data: session} = useSession()
  const {data: projects, isLoading, error, refetch} = getProjects()

  if(isLoading){
    
    return <div className="container mx-auto flex flex-col min-h-screen p-4"><Loader/></div>
  }

  if(error){
    console.log(error.message)
    return<></>
  }

  if(session){
    return (
        <div className="container mx-auto flex flex-col min-h-screen p-4">
          <div className="w-full flex flex-wrap justify-center md:justify-start">
            { !isLoading ? projects?.map((project)=><ProjectCardContainer key={project.id} projectName={project.name} projectId={project.id} />) : <Loader/>}
            <ProjectCardContainer children={<HiPlusCircle className="text-4xl" />} />
          </div>
          <ModalContainer child={<ProjectFormContainer refetchProjects={refetch} />} modal="createProject" />
        </div> 
    );
  }

  return <div className="flex items-center justify-center w-full h-full">
    <p>Sign in to access content</p>
  </div>

};

export default Projects;
