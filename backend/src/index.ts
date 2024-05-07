import { Hono } from 'hono'
import { decode, sign, verify } from 'hono/jwt'
import { env } from 'hono/adapter'
import { PrismaClient } from '@prisma/client'
import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import ws from 'ws'
import { authCheck } from './middleware'
import { FileWatcherEventKind } from 'typescript'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
neonConfig.webSocketConstructor = ws
const connectionString = `url`

const pool = new Pool({ connectionString })
const adapter = new PrismaNeon(pool)
const prisma = new PrismaClient({ adapter })

const app = new Hono()
app.use(logger())
app.use(cors())
app.use('/auth/*', authCheck)
app.get('/', async (c: any) => {
  return c.text(`Hello Hono! `)
})
app.get('/auth/profile', async (c) => {
  let jwtData = c.get('jwtPayload')
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
    return c.json({
      status: "Somthing went wrong"
    }, 400)
  }
}
)
app.get('/auth', async (c) => {
  let jwtData = c.get('jwtPayload')
  return c.json(jwtData)
})

app.post('/login', async (c) => {
  const body:any = await c.req.parseBody()
  console.log(body);
  try {
    let out = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    })
    if (out != null) {
      if (out.password == body.password) {
        const jwt = await sign({ email: out.email, id: out.id }, c.env.JWT_SECRET)
        return c.json({
          status: "Logged In",
          id: out.id,
          token: jwt
        })
      }
      else {
        return c.json({
          status: "Invalid password",
        }, 400)

      }
    }
    return c.json({
      status: "User not exists"
    })
  }
  catch (error) {
    return c.json({
      status: "Somthing went wrong"
    }, 400)
  }

})

app.post('/signup', async (c) => {
  const body:any = await c.req.parseBody()
  console.log(body);
  
  try {
    let out = await prisma.user.create({
      data: {
        first: body.first,
        last: body.last,
        email: body.email,
        password: body.password
      }
    })
    console.log(out);
    
    const jwt = await sign({ email: out.email, id: out.id }, c.env.JWT_SECRET)
    return c.json({
      status: "Account Created successfully",
      id: out.id,
      token: jwt
    })
  } catch (error: any) {
    if (error.code = "P2002") {
      return c.json({
        status: "Account Already exist"
      })
    }
    console.log(error);
    return c.json({
      status: "Somthing went wrong"
    }, 400)
  }

})

app.post('newsletter', async (c) => {
  try {
    let inputEmail = await c.req.json()
    let a = await prisma.newsLetter.create({
      data: {
        email: inputEmail.email
      }
    })
    return c.json({
      status: "success"
    })
  } catch (error: any) {
    if (error.code = "P2002") {
      return c.json({
        status: "Already exist"
      })

    }
    console.log(error);
    return c.json({
      status: "Something went wrong"
    }, 400)
  }
})

export default app
