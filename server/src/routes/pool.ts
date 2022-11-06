import { prisma } from "../lib/prisma"
import { FastifyInstance } from "fastify"


export async function poolRoutes(fastify: FastifyInstance){
  fastify.get('/pools/count', async() => {
    const count = await prisma.pool.count()

    return { count }
  })

}