import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const projectsRouter = router({
  getProjects: publicProcedure
    .query(({ ctx }) => {
     if(ctx.session?.user){
       return ctx?.prisma?.project.findMany({where: {userId: ctx.session?.user?.id}})
      }
      return []
    }),
  createProject: protectedProcedure
    .input(z.object({name: z.string()}))
    .mutation(({input, ctx})=>{
      const newProject = prisma?.project.create({data: {name: input.name, userId: ctx.session.user.id}})
      return newProject
    })
});
