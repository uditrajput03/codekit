import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { authCheck, getPrisma } from "./middleware";
import { PrismaClient } from "@prisma/client/extension";
import bcrypt from 'bcrypt'


type Variables = {
    prisma: PrismaClient
}
type Bindings = {
    CASHFREE_CLIENT_SECRET: string
    CASHFREE_CLIENT_ID: string
    CASHFREE_LINK: string
    RESEND_API: string
}

const pay = new Hono<{Bindings:Bindings , Variables: Variables }>()
pay.use(logger())
pay.use(cors({
  origin: ['https://codekit.me', 'http://localhost:5173', 'http://localhost:4173'],
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}))
pay.use(authCheck)
pay.use(getPrisma)
pay.get('/', async (c: any) => {
    return c.text(`Hello Hono! `)
})
pay.post('/order', async (c) => {
    let body = await c.req.json()
    let jwtData = c.get('jwtPayload')
    console.log(jwtData);
    
    // Validate input
    if (!body.productId) {
        return c.json({
            status: "Product ID is required"
        }, 400)
    }

    try {
        const prisma = c.var.prisma
        let product = await prisma.product.findUnique({
            where: {
                id: body.productId
            }
        })
        
        if (!product) {
            return c.json({
                status: "Product not found"
            }, 404)
        }

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
        console.error("Payment order creation error:", error);
        return c.json({
            status: "Something went wrong with payment gateway"
        }, 500)
    }
})

pay.post('/resend', async (c) => {
    const prisma = c.var.prisma
    const body: any = await c.req.json()
    const { orderId } = body
    const jwtPayload = await c.get('jwtPayload')
    
    // Validate input
    if (!orderId) {
        return c.json({
            status: "Order ID is required"
        }, 400)
    }
    
    try {
        let order = await prisma.orders.findUnique({
            where: {
                id: orderId
            }
        })
        console.log(body, jwtPayload);
        if (order !== null) {
            let url = `https://codekit.me/download/${orderId}`
            let mail = {
                from: "CodeKit <support@codekit.me>",
                to: jwtPayload.email,
                subject: "Download Link",
                text: `Click on the link to download: ${url}\n\nOrder details: ${JSON.stringify(order)}`
            }
            let res = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${c.env.RESEND_API}`
                },
                body: JSON.stringify(mail)
            })
                .then((res) => res)
                .catch((error) => {
                    console.error("Email sending error:", error)
                    return c.json({
                        status: "Something went wrong"
                    }, 500)
                })
            if (res.status === 200) {
                return c.json({
                    status: "Download link sent"
                })
            }
            else {
                return c.json({
                    status: "Download link not sent"
                }, 500)
            }
        }
        else {
            return c.json({
                status: "Order not found"
            }, 404)
        }
    } catch (error) {
        console.error("Resend email error:", error)
        return c.json({
            status: "Something went wrong with the server"
        }, 500)
    }
})
export default pay