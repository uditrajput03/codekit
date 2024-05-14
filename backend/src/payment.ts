import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { authCheck, getPrisma } from "./middleware";
import { PrismaClient } from "@prisma/client/extension";


type Variables = {
    prisma: PrismaClient
}
type Bindings = {
    CASHFREE_CLIENT_SECRET: string
    CASHFREE_CLIENT_ID: string
    CASHFREE_LINK: string
}

const pay = new Hono<{Bindings:Bindings , Variables: Variables }>()
pay.use(logger())
pay.use(cors())
pay.use(authCheck)
pay.use(getPrisma)
pay.get('/', async (c: any) => {
    return c.text(`Hello Hono! `)
})
pay.post('/order', async (c) => {
    let body = await c.req.json()
    let jwtData = c.get('jwtPayload')
    console.log(jwtData);
    try {
        const prisma = c.var.prisma
        let product = await prisma.product.findUnique({
            where: {
                id: body.productId
            }
        })
        console.log(product);

        let order = await prisma.orders.create({
            data: {
                productId: product.id,
                userId: jwtData.id,
                toPay: product.price
            }
        })
        console.log("Order", order);

        let cashfreeReq = {
            "order_amount": product.price,
            "order_currency": "INR",
            "order_id": `${order.id}`,
            "order_note": `${product.title}`,
            "customer_details": {
                "customer_id": `${jwtData.id}`,
                "customer_phone": "9999999999",
                "customer_email": jwtData.email
            },
            "order_meta": {
                "return_url": "https://codekit.me/payment",
                "notify_url": "https://api.codekit.me/webhook"
            }
        }
        let res = await fetch(c.env.CASHFREE_LINK+ '/orders', {
            method: 'post',
            headers: {
                'x-client-id': c.env.CASHFREE_CLIENT_ID,
                'x-client-secret': c.env.CASHFREE_CLIENT_SECRET,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-version': '2023-08-01',
            },
            body: JSON.stringify(cashfreeReq)
        })
            .then((res) => res.json())
            .then((res: any) => {
                return (res)
            })
        let updatedOrder = await prisma.orders.update({
            where: {
                id: order.id
            },
            data: {
                cfOrderId: res.cf_order_id,
                paymentSessionId: res.payment_session_id
            }
        })
        return c.json({
            updatedOrder,
            res
        })
    } catch (error) {
        console.log(error);
        return c.json({
            status: "Something went wrong with payment gateway"
        })
    }
})
export default pay