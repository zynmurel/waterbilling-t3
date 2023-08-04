import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";


export const postsRouter = createTRPCRouter({
  getAllUser : publicProcedure.query(({ctx})=>{
    return ctx.prisma.user.findMany()
  }),
});
