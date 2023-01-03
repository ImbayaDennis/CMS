import { NextPage } from "next";
import {useEffect} from "react";
import Loader from "../components/common/Loader";
import { useSession } from "next-auth/react";
import { getProjects } from "../utils/apiFunctions";
import Link from "next/link";

const Home: NextPage = () => {
  const { data: session } = useSession();

  useEffect(()=>{
    localStorage.getItem("darkTheme") ? null : localStorage.setItem("darkTheme", "true")
  },[])

  if (session) {
    return (
      <div className="container mx-auto flex min-h-screen flex-col items-center p-4">
        <button className="btn-1">
          <Link href="/projects">View projects</Link>
        </button>
      </div>
    );
  }

  return (
  <div className="flex items-start justify-center w-full h-full">
    <p className="py-8">Sign in to access content</p>
  </div>
  );
};

export default Home;
