import { router } from "../trpc";
import { authRouter } from "./auth";
import { categoryRouter } from "./categories";
import { projectsRouter } from "./projects";

export const appRouter = router({
  categories: categoryRouter,
  projects: projectsRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
