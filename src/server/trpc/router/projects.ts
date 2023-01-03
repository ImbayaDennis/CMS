import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const projectsRouter = router({
  getProjects: publicProcedure.query(({ ctx, input }) => {
    if (ctx.session?.user) {
      return prisma?.project.findMany({
        where: { userId: ctx.session?.user?.id },
      });
    }
    return [];
  }),
  getProject: protectedProcedure
    .input(z.object({ projectId: z.string().nullish() }).nullish())
    .query(async ({ input }) => {
      if (input?.projectId) {
        return await prisma?.project.findUnique({
          where: { id: input.projectId }, include: {connectedProject:true}
        });
      }
    }),
  getConnectedProject: publicProcedure
    .input(z.object({ connectedProjectId: z.string().nullish() }).nullish())
    .query(async ({ input }) => {
      if (input?.connectedProjectId) {
        return await prisma?.connectedProject.findUnique({
          where: { id: input.connectedProjectId },
          include: { project: true },
        });
      }
    }),
  createProject: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input, ctx }) => {
      return prisma?.project.create({
        data: { name: input.name, userId: ctx.session.user.id },
      }).then((data)=>{
        prisma?.connectedProject.create({data: {name: input.name, projectId: data.id}})
      })
    }),
});
