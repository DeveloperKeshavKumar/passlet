// import { Context } from "hono";
// import { PrismaClient } from '@prisma/client/edge';
// import { withAccelerate } from '@prisma/extension-accelerate';

// export const signUp = async (c: Context) => {
//    const prisma = new PrismaClient({
//       datasourceUrl: c.env?.DATABASE_URL,
//    }).$extends(withAccelerate());

//    try {
//       return c.json({ msg: "SignUp" , prisma}, 200);
//    } catch (error: any) {
//       return c.json({ error: "Can't Signup, Try again later", message: error.message }, 500);
//    }
// }

// export const signIn = async (c: Context) => {
//    const prisma = new PrismaClient({
//       datasourceUrl: c.env?.DATABASE_URL,
//    }).$extends(withAccelerate());

//    try {
//       return c.json({ msg: "SignIn" }, 200);
//    } catch (error: any) {
//       return c.json({ error: "Can't Signup, Try again later", message: error.message }, 500);
//    }
// }