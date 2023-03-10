import { type NextPage } from "next";
import Loader from "../../components/common/Loader";
import ProjectCardContainer from "../../components/projects/ProjectCard/ProjectCardContainer";
import ProjectFormContainer from "../../components/projects/ProjectForm/ProjectFormContainer";
import { getProjects } from "../../utils/apiFunctions";
import { HiPlusCircle } from "react-icons/hi";
import ModalContainer from "../../components/common/Modal/ModalContainer";
import { useSession } from "next-auth/react";

const Projects: NextPage = () => {
  const { data: session } = useSession();
  const {
    data: projects,
    isFetching,
    isLoading,
    error,
    refetch,
  } = getProjects();

  if (isLoading) {
    return (
      <div className="container mx-auto flex min-h-screen flex-col p-4">
        <Loader />
      </div>
    );
  }

  if (error) {
    console.log(error.message);
    return <></>;
  }

  if (session) {
    return (
      <div className="container mx-auto flex min-h-screen flex-col p-4">
        <div className="flex w-full flex-wrap justify-center md:justify-start">
          {!isLoading || !isFetching ? (
            projects?.map((project) => (
              <ProjectCardContainer
                key={project.id}
                projectName={project.name}
                projectId={project.id}
              />
            ))
          ) : (
            <Loader />
          )}
          <ProjectCardContainer>
            <HiPlusCircle className="text-4xl" />
          </ProjectCardContainer>
        </div>
        <ModalContainer modal="createProject">
          <ProjectFormContainer refetchProjects={refetch} />
        </ModalContainer>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-start justify-center">
      <p className="py-8">Sign in to access content</p>
    </div>
  );
};

export default Projects;
