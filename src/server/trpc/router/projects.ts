import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const projectsRouter = router({
  getProjects: publicProcedure
    .input(z.object({ userId: z.string().nullish(), connectedProjectId: z.string().nullish() }).nullish())
    .query(({ input }) => {
      if(input?.userId){
        const projects = prisma?.user.findUnique({where: {id: input.userId}}).projects
        return projects
      }
      if(input?.connectedProjectId){}
    }),
});
