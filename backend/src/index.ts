import { Hono } from 'hono'
import { decode, sign, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client'
import { authCheck, getPrisma } from './middleware'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import pay from './payment'
import { webhook } from './webhook'
import pass from './password'

type Bindings = {
  JWT_SECRET: string
  DATABASE_URL: string
  BOT_TOKEN: string
}
type Variables = {
  prisma: PrismaClient
}

const app = new Hono<{ Bindings: Bindings, Variables: Variables }>()
app.use(logger())
app.use(cors())
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
    return c.json({
      status: "Somthing went wrong"
    }, 400)
  }
}
)
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
        createdAt:true,
        product:{
          select:{
            title: true
          }
        },
        paid: true,
      }
    })
    return c.json(orders)
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
  const body: any = await c.req.parseBody()
  const prisma = c.var.prisma

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
  const body: any = await c.req.parseBody()
  const prisma = c.var.prisma
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
  const prisma = c.var.prisma
  try {
    let inputEmail = await c.req.json()
    let a = await prisma.newsLetter.create({
      data: {
        email: inputEmail.email
      }
    })
    return c.json({
      status: "success test"
    })
  } catch (error: any) {
    if (error.code = "P2002") {
      return c.json({
        status: "Already exist"
      },201)
    }
    console.log(error);
    return c.json({
      status: "Something went wrong"
    }, 400)
  }
})

app.post('/contact', async c => {
  // const body = await c.req.json()
  const body = await c.req.parseBody()
  try {
  let data = {
    chat_id: "-1002045554223",
    text: `Source: Codekit
email: ${body.email}
subject: ${body.subject}
message: ${body.message}`
  }
    let telegram: any = await fetch(`https://api.telegram.org/bot${c.env.BOT_TOKEN}/sendMessage`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(res => res)
    if (telegram.ok == true) {
      return c.json({
        id: "id"
      }, 200)
    }
    else {
      return c.text("Something went wrong", 400)
    }
  } catch (error) {
    return c.text("Something went wrong", 400)
  }
})

app.get('/verify/:token', async c => {})


// app.post('/create' , async (c) => {
//   let body = await c.req.json()
//   const prisma = c.var.prisma
//   try {
//     let productId = await prisma.product.create({
//       data :{
//         title: body.title,
//         description: body.description,
//         price: body.price,
//         published: true
//       }
//     })
//     return c.json({
//       status: productId
//     })

//   } catch (error) {
//     console.log(error);
//   }
// })

export default app
