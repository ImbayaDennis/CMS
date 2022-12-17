import { type NextPage } from "next";
import Loader from "../components/common/Loader";
import ProjectCardContainer from "../components/home/ProjectCard/ProjectCardContainer";
import ProjectFormContainer from "../components/home/ProjectFormContainer";
import { getProjects } from "../utils/apiFunctions";
import { HiPlusCircle } from 'react-icons/hi'
import ModalContainer from "../components/common/Modal/ModalContainer";

const Home: NextPage = () => {
  const {data: projects, isLoading, error, refetch} = getProjects()

  return (
      <div className="container mx-auto flex flex-col min-h-screen p-4">
        <div className="w-full flex">
          { !isLoading ? projects?.map((project)=><ProjectCardContainer key={project.id} projectName={project.name} projectId={project.id} />) : <Loader/>}
          <ProjectCardContainer children={<HiPlusCircle className="text-4xl" />} />
        </div>
        <ModalContainer child={<ProjectFormContainer refetchProjects={refetch} />} modal="createProject" />
      </div> 
  );
};

export default Home;
