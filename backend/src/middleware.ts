import { createMiddleware } from 'hono/factory'
import { decode, sign, verify } from 'hono/jwt'

export const authCheck = createMiddleware(async (c, next) => {
    let token = c.req.header('authorization')
    if (token != null) {
        try {
            let jwt = await verify(token, c.env.JWT_SECRET)
            c.set('jwtPayload', jwt)
            await next()
        } catch (error) {
            return c.json({
                status: "Invalid Authentication"
            })
        }
    }
    else {
        return c.json({
            status: "unauthorized"
        })
    }
})