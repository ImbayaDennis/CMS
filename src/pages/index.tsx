import { NextPage } from "next";
import React from "react";
import Loader from "../components/common/Loader";
import { useSession } from "next-auth/react";
import { getProjects } from "../utils/apiFunctions";
import Link from "next/link";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const { data: projects, isLoading, error, refetch } = getProjects();

  if (isLoading) {
    return (
      <div className="container mx-auto flex min-h-screen flex-col items-center p-4">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto flex min-h-screen flex-col items-center p-4">
        <p>Error: {error.message}</p>
      </div>
    );
  }

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
    <div className="flex h-full w-full items-center justify-center">
      <p>Sign in to access content</p>
    </div>
  );
};

export default Home;
