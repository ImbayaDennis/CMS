import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const fieldRouter = router({
  getFields: publicProcedure
    .input(z.object({ categoryId: z.string().nullable() }))
    .query(({ input, ctx }) => {
      if (input.categoryId) {
        return ctx?.prisma?.field.findMany({
          where: { categoryId: input.categoryId },
          select: {
            id: true,
            name: true,
            stringField: { select: { id: true, content: true } },
            numberField: { select: { id: true, content: true } },
            booleanField: { select: { id: true, content: true } },
            imageField: { select: { id: true, content: true } },
          },
        });
      }
      return [];
    }),
  createField: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        categoryId: z.string(),
        type: z.enum(["string", "textarea", "number", "boolean", "image"]),
        content: z.any(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx?.prisma?.field
        .create({
          data: { name: input.name, categoryId: input.categoryId },
        })
        .then((res) => {
          if (input.type === "string") {
            ctx?.prisma?.stringField.create({
              data: { fieldId: res.id, content: input.content },
            });
          }
          if (input.type === "textarea") {
            ctx?.prisma?.stringField.create({
              data: { fieldId: res.id, content: input.content },
            });
          }
          if (input.type === "number") {
            ctx?.prisma?.numberField.create({
              data: { fieldId: res.id, content: input.content },
            });
          }
          if (input.type === "boolean") {
            ctx?.prisma?.booleanField.create({
              data: { fieldId: res.id, content: input.content },
            });
          }
          if (input.type === "image") {
            ctx?.prisma?.imageField.create({
              data: { fieldId: res.id, content: input.content },
            });
          }
        });
    }),
});
