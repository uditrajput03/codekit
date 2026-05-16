import { Hono } from 'hono'
import { decode, sign, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client'
import { authCheck, getPrisma } from './middleware'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import pay from './payment'
import { webhook } from './webhook'
import pass from './password'
import bcrypt from 'bcrypt'

type Bindings = {
  JWT_SECRET: string
  DATABASE_URL: string
  BOT_TOKEN: string
  BCRYPT_ROUNDS?: string
}
type Variables = {
  prisma: PrismaClient
}

const app = new Hono<{ Bindings: Bindings, Variables: Variables }>()
app.use(logger())
app.use(cors({
  origin: ['https://codekit.me', 'http://localhost:5173', 'http://localhost:4173'],
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}))
app.use(getPrisma)
app.use('/auth/*', authCheck)
app.route('/webhook', webhook)
app.route('/auth/pay', pay)
app.route('/password', pass)

app.get('/', async (c: any) => {
  return c.text(`Hello Codekit`)
})

app.get('/auth/profile', async (c) => {
  let jwtData = c.get('jwtPayload')
  const prisma = c.var.prisma
  try {
    let profile = await prisma.user.findUnique({
      where: {
        id: jwtData.id
      },
      select: {
        first: true,
        last: true,
        email: true,
        id: true,
        verified: true
      }
    })
    return c.json(profile)
  } catch (error) {
    console.error("Profile fetch error:", error)
    return c.json({
      status: "Something went wrong"
    }, 500)
  }
})

app.get('/auth/orders', async (c) => {
  let jwtData = c.get('jwtPayload')
  const prisma = c.var.prisma
  try {
    let orders = await prisma.orders.findMany({
      where: {
        userId: jwtData.id,
        completed: true
      },
      select: {
        id: true,
        createdAt: true,
        product: {
          select: {
            title: true
          }
        },
        paid: true,
      }
    })
    return c.json(orders)
  } catch (error) {
    console.error("Orders fetch error:", error)
    return c.json({
      status: "Something went wrong"
    }, 500)
  }
})

app.get('/auth', async (c) => {
  let jwtData = c.get('jwtPayload')
  return c.json(jwtData)
})

app.post('/login', async (c) => {
  const body: any = await c.req.parseBody()
  const prisma = c.var.prisma

  // Input validation
  if (!body.email || !body.password) {
    return c.json({
      status: "Email and password are required"
    }, 400)
  }

  try {
    let user = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    })

    if (user !== null) {
      // Compare hashed password
      const isValidPassword = await bcrypt.compare(body.password, user.password)
      
      if (isValidPassword) {
        const jwt = await sign({ email: user.email, id: user.id }, c.env.JWT_SECRET)
        return c.json({
          status: "Logged In",
          id: user.id,
          token: jwt
        })
      } else {
        return c.json({
          status: "Invalid password",
        }, 401)
      }
    } else {
      return c.json({
        status: "User not found"
      }, 401)
    }
  } catch (error) {
    console.error("Login error:", error)
    return c.json({
      status: "Something went wrong"
    }, 500)
  }
})

app.post('/signup', async (c) => {
  const body: any = await c.req.parseBody()
  const prisma = c.var.prisma
  
  // Input validation
  if (!body.first || !body.last || !body.email || !body.password) {
    return c.json({
      status: "All fields are required"
    }, 400)
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    return c.json({
      status: "Invalid email format"
    }, 400)
  }
  
  // Validate password length
  if (body.password.length < 8 || body.password.length > 20) {
    return c.json({
      status: "Password must be between 8 and 20 characters"
    }, 400)
  }

  try {
    // Hash the password before storing
    const rounds = parseInt(c.env.BCRYPT_ROUNDS || '10')
    const hashedPassword = await bcrypt.hash(body.password, rounds)
    
    let user = await prisma.user.create({
      data: {
        first: body.first,
        last: body.last,
        email: body.email,
        password: hashedPassword
      }
    })

    const jwt = await sign({ email: user.email, id: user.id }, c.env.JWT_SECRET)
    return c.json({
      status: "Account created successfully",
      id: user.id,
      token: jwt
    })
  } catch (error: any) {
    if (error.code === "P2002") { // Unique constraint violation
      return c.json({
        status: "Account already exists"
      }, 409)
    }
    console.error("Signup error:", error)
    return c.json({
      status: "Something went wrong"
    }, 500)
  }
})

app.post('/newsletter', async (c) => {
  const prisma = c.var.prisma
  try {
    let inputJson = await c.req.json()
    
    // Validate input
    if (!inputJson.email) {
      return c.json({
        status: "Email is required"
      }, 400)
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(inputJson.email)) {
      return c.json({
        status: "Invalid email format"
      }, 400)
    }
    
    let newsletterEntry = await prisma.newsLetter.create({
      data: {
        email: inputJson.email
      }
    })
    return c.json({
      status: "Subscribed successfully"
    }, 200)
  } catch (error: any) {
    if (error.code === "P2002") { // Unique constraint violation
      return c.json({
        status: "Already subscribed"
      }, 201)
    }
    console.error("Newsletter error:", error)
    return c.json({
      status: "Something went wrong"
    }, 500)
  }
})

app.post('/contact', async c => {
  const body = await c.req.parseBody()
  
  // Input validation
  if (!body.email || !body.subject || !body.message) {
    return c.text("All fields (email, subject, message) are required", 400)
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    return c.text("Invalid email format", 400)
  }
  
  try {
    let data = {
      chat_id: "-1002045554223",
      text: `Source: Codekit\nEmail: ${body.email}\nSubject: ${body.subject}\nMessage: ${body.message}`
    }
    
    let telegram: any = await fetch(`https://api.telegram.org/bot${c.env.BOT_TOKEN}/sendMessage`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(res => res)
    
    if (telegram.ok === true) {
      return c.json({
        id: "message_sent"
      }, 200)
    } else {
      return c.text("Something went wrong", 400)
    }
  } catch (error) {
    console.error("Contact error:", error)
    return c.text("Something went wrong", 500)
  }
})

app.get('/verify/:token', async c => {
  try {
    const token = c.req.param('token')
    const decoded = await verify(token, c.env.JWT_SECRET)
    const userId = (decoded as any).id
    
    const prisma = c.var.prisma
    await prisma.user.update({
      where: { id: userId },
      data: { verified: true }
    })
    
    return c.json({ status: "Email verified successfully" })
  } catch (error) {
    return c.json({ status: "Invalid verification token" }, 400)
  }
})

export default app