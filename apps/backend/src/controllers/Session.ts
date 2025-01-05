import { Context } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export const validate = async (c: Context) => {
   const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
   }).$extends(withAccelerate());

   try {
      return c.json({ msg: "Project Owner Signup" }, 200);
   } catch (e: unknown) {

   }
}
export const revoke = async (c: Context) => {
   const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
   }).$extends(withAccelerate());

   try {
      return c.json({ msg: "Project Owner Signup" }, 200);
   } catch (e: unknown) {

   }
}
export const getAllSessions = async (c: Context) => {
   const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
   }).$extends(withAccelerate());

   try {
      return c.json({ msg: "Project Owner Signup" }, 200);
   } catch (e: unknown) {

   }
}