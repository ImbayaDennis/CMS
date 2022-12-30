import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const fieldRouter = router({
  getFields: publicProcedure
    .input(z.object({ categoryId: z.string().nullable() }))
    .query(({ input }) => {
      if (input.categoryId) {
        return prisma?.field.findMany({
          where: { categoryId: input.categoryId },
          select: {
            id: true,
            name: true,
            stringField: {select: { id: true, content: true }},
            numberField: {select: { id: true, content: true }},
            booleanField: {select: { id: true, content: true }},
            imageField: {select: { id: true, content: true }},
          },
        });
      }
      return [];
    }),
  createField: protectedProcedure
    .input(z.object({name: z.string(), categoryId: z.string(), type: z.enum(["string", "textarea", "number", "boolean", "image"]), content: z.any()}))
    .mutation(({ input }) => {
      return prisma?.field.create({
        data: { name: input.name, categoryId: input.categoryId },
      }).then((res)=>{
        if(input.type === "string"){
          prisma?.stringField.create({data: {fieldId: res.id, content: input.content}})
        }
        if(input.type === "textarea"){
          prisma?.stringField.create({data: {fieldId: res.id, content: input.content}})
        }
        if(input.type === "number"){
          prisma?.numberField.create({data: {fieldId: res.id, content: input.content}})
        }
        if(input.type === "boolean"){
          prisma?.booleanField.create({data: {fieldId: res.id, content: input.content}})
        }
        if(input.type === "image"){
          prisma?.imageField.create({data: {fieldId: res.id, content: input.content}})
        }
      })
    }),
});
