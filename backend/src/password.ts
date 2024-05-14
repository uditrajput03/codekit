import { Hono } from 'hono'
import { decode, sign, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client'
import { authCheck, getPrisma } from './middleware'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import pay from './payment'
import { webhook } from './webhook'

type Bindings = {
    JWT_SECRET: string
    RESEND_API: string
}
type Variables = {
    prisma: PrismaClient
}

const pass = new Hono<{ Bindings: Bindings, Variables: Variables }>()
pass.use(logger())
pass.use(cors())
pass.use(getPrisma)
pass.post('/forget', async (c) => {
    const prisma = c.var.prisma
    const body: any = await c.req.parseBody()
    const { email } = body
    try {
        let user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (user != null) {
            let jwt = await sign({ email: user.email, id: user.id }, c.env.JWT_SECRET)
            console.log(jwt);
            let url = `https://codekit.me/reset/${jwt}`
            let mail = {
                from: "CodeKit <support@codekit.me>",
                to: user.email,
                subject: "Password Reset",
                text: `Click on the link to reset your password ${url}`
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
                    return c.json({
                        status: "Something went wrong"
                    }, 400)
                })
            if (res.status == 200) {
                console.log("Email sent");

                return c.json({
                    status: "Email sent"
                })
            }
            else {
                return c.json({
                    status: "Email not sent"
                }, 400)
            }
        }
        else {
            return c.json({
                status: "Email not found"
            }, 400)
        }
    } catch (error) {
        return c.json({
            status: "Somthing went wrong with the server"
        }, 400)
    }
})

pass.post('/reset', async (c) => {
    const prisma = c.var.prisma
    const body: any = await c.req.parseBody()
    const { token, password } = body
    try {
        let { id }: any = await verify(token, c.env.JWT_SECRET)
        let user = await prisma.user.update({
            where: {
                id
            },
            data: {
                password
            }
        })
        return c.json({
            status: "Password updated"
        })
    } catch (error) {
        return c.json({
            status: "Somthing went wrong"
        }, 400)
    }
})

export default pass