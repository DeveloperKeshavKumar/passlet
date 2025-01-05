import { Context, Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { appOwnerSignupInput } from '@common-passlet';

export const signUp = async (c: Context) => {
   const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
   }).$extends(withAccelerate());

   try {
      const body = await c.req.json();
      const parseResult = appOwnerSignupInput.safeParse(body);

      return c.json({ msg: "Project Owner Signup" }, 200);
   } catch (e: unknown) {
      return c.json({ msg: "Project Owner Signup" }, 500);

   }
}
export const signIn = async (c: Context) => {
   const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
   }).$extends(withAccelerate());

   try {
      return c.json({ msg: "Project Owner Signup" }, 200);
   } catch (e: unknown) {

   }
}
export const getAllApps = async (c: Context) => {
   const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
   }).$extends(withAccelerate());

   try {
      return c.json({ msg: "Project Owner Signup" }, 200);
   } catch (e: unknown) {

   }
}