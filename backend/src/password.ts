import { Hono } from 'hono'
import { decode, sign, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client'
import { authCheck, getPrisma } from './middleware'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import bcrypt from 'bcrypt'

type Bindings = {
    JWT_SECRET: string
    RESEND_API: string
    BCRYPT_ROUNDS?: string
}
type Variables = {
    prisma: PrismaClient
}

const pass = new Hono<{ Bindings: Bindings, Variables: Variables }>()
pass.use(logger())
pass.use(cors({
  origin: ['https://codekit.me', 'http://localhost:5173', 'http://localhost:4173'],
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}))
pass.use(getPrisma)

pass.post('/forget', async (c) => {
    const prisma = c.var.prisma
    const body: any = await c.req.parseBody()
    
    // Validate input
    if (!body.email) {
        return c.json({
            status: "Email is required"
        }, 400)
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
        return c.json({
            status: "Invalid email format"
        }, 400)
    }
    
    try {
        let user = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        })
        
        if (user !== null) {
            let jwt = await sign({ email: user.email, id: user.id }, c.env.JWT_SECRET)
            console.log(jwt);
            let url = `https://codekit.me/reset/${jwt}`
            let mail = {
                from: "CodeKit <support@codekit.me>",
                to: user.email,
                subject: "Password Reset",
                text: `Click on the link to reset your password: ${url}`
            }
            try {
                const res = await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${c.env.RESEND_API}`
                    },
                    body: JSON.stringify(mail)
                })
                if (res.status === 200) {
                    console.log("Email sent")
                    return c.json({
                        status: "Password reset email sent"
                    })
                } else {
                    console.error("Email failed:", res.status)
                    return c.json({
                        status: "Failed to send email"
                    }, 500)
                }
            } catch (error) {
                console.error("Email sending error:", error)
                return c.json({
                    status: "Failed to send email"
                }, 500)
            }
        }
        else {
            return c.json({
                status: "Email not found"
            }, 404)
        }
    } catch (error) {
        console.error("Forget password error:", error)
        return c.json({
            status: "Something went wrong with the server"
        }, 500)
    }
})

pass.post('/reset', async (c) => {
    const prisma = c.var.prisma
    const body: any = await c.req.parseBody()
    
    // Validate input
    if (!body.token || !body.password) {
        return c.json({
            status: "Token and password are required"
        }, 400)
    }
    
    // Validate password length
    if (body.password.length < 8 || body.password.length > 20) {
        return c.json({
            status: "Password must be between 8 and 20 characters"
        }, 400)
    }
    
    const { token, password } = body
    
    try {
        let decoded: any = await verify(token, c.env.JWT_SECRET)
        const userId = decoded.id
        
        // Hash the new password
        const rounds = parseInt(c.env.BCRYPT_ROUNDS || '10')
        const hashedPassword = await bcrypt.hash(password, rounds)
        
        let user = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                password: hashedPassword
            }
        })
        
        return c.json({
            status: "Password updated successfully"
        })
    } catch (error) {
        console.error("Password reset error:", error)
        return c.json({
            status: "Invalid or expired token"
        }, 400)
    }
})

export default pass