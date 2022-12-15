import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { createProject, getProjects } from "../utils/apiFunctions";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const [projectName, setProjectNme] = useState<string>("")
  const {data: session} = useSession()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setProjectNme(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if(session?.user){
      createProject(projectName)
    }
  }

  const {data: projects, isLoading, error} = getProjects()

  return (
      <main className="container mx-auto flex min-h-screen p-4">
        {projects?.map((project)=><ProjectCard key={project.id} projectName={project.name} />)}
      </main> 
  );
};

export default Home;

type ProjectCardProps = {
  projectName: string
}

const ProjectCard = ({projectName}: ProjectCardProps) =>{
  return(
  <button aria-label={`${projectName}`} className="w-28 h-28 bg-gray-300 dark:bg-gray-700 rounded-md shadow-md flex justify-center items-center text-gray-700 dark:text-gray-300">
    <p>{projectName}</p>
  </button>
  )
}
