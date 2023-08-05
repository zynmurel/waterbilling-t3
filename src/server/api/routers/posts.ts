import { clerkClient } from "@clerk/nextjs";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";


export const postsRouter = createTRPCRouter({
  getAllUser : publicProcedure.query(async ({ctx})=>{
    const users = await clerkClient.users.getUserList()
    console.log(users, "userList")
    return ctx.prisma.user.findMany()
  }),
  addConsumer : publicProcedure.mutation(({ ctx, input }) => {
    return ctx.prisma.consumer.create({
        data:{
            firstName:"Sean",
            lastName:"Comingues",
            gender:"Male",
            birthday:"2023-08-04T02:03:02.916Z"
        }
    })
}),

});
