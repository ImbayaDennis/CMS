import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const categoryRouter = router({
  getCategories: publicProcedure
    .input(z.object({ projectId: z.any() }))
    .query(({ input, ctx }) => {
      if (input.projectId) {
        return ctx?.prisma?.category.findMany({
          where: { projectId: input.projectId },
        });
      }
      return [];
    }),
  createCategory: protectedProcedure
    .input(z.object({ name: z.string(), projectId: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx?.prisma?.category.create({
        data: { name: input.name, projectId: input.projectId },
      });
    }),
});
