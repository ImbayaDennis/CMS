import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const categoryRouter = router({
    getCategories: publicProcedure
    .input(z.object({projectId: z.any()}))
    .query(({input})=>{
      if(input.projectId){
       return prisma?.category.findMany({where: {projectId: input.projectId}})
      }
      return []
    }),
    createCategory: protectedProcedure
    .input(z.object({ name: z.string(), projectId: z.string()}))
    .mutation(({input})=>{
        return prisma?.category.create({data: {name: input.name, projectId: input.projectId}})
    })
})