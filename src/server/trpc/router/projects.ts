import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const projectsRouter = router({
  getProjects: publicProcedure.query(({ ctx, input }) => {
    if (ctx.session?.user) {
      return ctx?.prisma?.project.findMany({
        where: { userId: ctx.session?.user?.id },
      });
    }
    return [];
  }),
  getProject: protectedProcedure
    .input(z.object({ projectId: z.string().nullish() }).nullish())
    .query(async ({ input, ctx }) => {
      if (input?.projectId) {
        return await ctx?.prisma?.project.findUnique({
          where: { id: input.projectId }, include: {connectedProject:true}
        });
      }
    }),
  getConnectedProject: publicProcedure
    .input(z.object({ connectedProjectId: z.string().nullish() }).nullish())
    .query(async ({ input, ctx }) => {
      if (input?.connectedProjectId) {
        return await ctx?.prisma?.connectedProject.findUnique({
          where: { id: input.connectedProjectId },
          include: { project: true },
        });
      }
    }),
  createProject: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx?.prisma?.project.create({
        data: { name: input.name, userId: ctx.session.user.id },
      }).then((data)=>{
        ctx?.prisma?.connectedProject.create({data: {name: input.name, projectId: data.id}})
      })
    }),
});
