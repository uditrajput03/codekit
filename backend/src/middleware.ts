import { createMiddleware } from 'hono/factory'
import { verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client'
import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import ws from 'ws'

neonConfig.webSocketConstructor = ws

export const getPrisma = createMiddleware(async (c, next) => {
    try {
        const connectionString = c.env.DATABASE_URL
        const pool = new Pool({ connectionString, max: 5 })
        const adapter = new PrismaNeon(pool)
        const prisma = new PrismaClient({ adapter })
        c.set('prisma', prisma)
        await next()
        // Cleanup after request
        await prisma.$disconnect()
        await pool.end()
    } catch (error) {
        console.error("Prisma middleware error:", error)
        return c.json({ status: "Database connection error" }, 500)
    }
})

export const authCheck = createMiddleware(async (c, next) => {
    const token = c.req.header('authorization')

    if (!token) {
        return c.json({ status: "unauthorized" }, 401)
    }

    try {
        const jwt = await verify(token, c.env.JWT_SECRET)
        c.set('jwtPayload', jwt)
        await next()
    } catch (error) {
        return c.json({ status: "Invalid Authentication" }, 401)
    }
})
