import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { getProjects } from "../utils/apiFunctions";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const session = useSession();
  const projects = getProjects({ userId: session.data?.user?.id })

  return (
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        
      </main>
  );
};

export default Home;
