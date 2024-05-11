import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { getPrisma } from "./middleware";
import { PrismaClient } from "@prisma/client/extension";

type Variables = {
    prisma: PrismaClient
}

export const webhook = new Hono<{ Variables: Variables }>()
webhook.use(logger())
webhook.use(cors())
webhook.use(getPrisma)
webhook.post('/', async (c) => {
    const res = await c.req.json()
    const prisma = c.var.prisma
    try {
        const order = await prisma.orders.update({
            where: {
                id: Number(res.data.order.order_id),
                userId: parseInt(res.data.customer_details.customer_id)
            },
            data: {
                paid: res.data.payment.payment_amount,
                paymentStatus: res.data.payment.payment_status,
                completed: (res.data.payment.payment_status == "SUCCESS" ? true : false)
            }
        })
        return c.json({ "ok":"ok" }, 200)
    } catch (error) {
        return c.json({"status": "Something went wrong"} , 400)
    }

})