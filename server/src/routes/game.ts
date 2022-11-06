import { FastifyInstance } from "fastify";
import ShortUniqueId from "short-unique-id";
import { z } from 'zod'
import { prisma } from "../lib/prisma";

export async function gameRoutes(fastify: FastifyInstance){
  fastify.post('/pools', async(request, reply) => {
    const createPoolBody = z.object({
      title: z.string(),
    })


    const { title } = createPoolBody.parse(request.body)
    const generate = new ShortUniqueId({ length: 6})
    const code = String(generate()).toLocaleUpperCase()
    
    await prisma.pool.create({
      data: {
        title,
        code
      }
    })
    return reply.status(201).send({ code })
  })  
  
}