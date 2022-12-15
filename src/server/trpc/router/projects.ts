import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const projectsRouter = router({
  getProjects: publicProcedure
    .query(({ ctx }) => {
     if(ctx.session?.user){
       return prisma?.project.findMany({where: {userId: ctx.session?.user?.id}})
      }
      return []
    }),
  createProject: protectedProcedure
    .input(z.string())
    .mutation(({input, ctx})=>{
      const newProject = prisma?.project.create({data: {name: input, userId: ctx.session.user.id}})
    })
});
