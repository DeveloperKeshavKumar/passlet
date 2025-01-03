import { Context, Hono } from "hono";
import * as UserAuthController from "../controllers/UserAuth";

const userAuthRoutes = new Hono().basePath("/app");

userAuthRoutes.post("/signup", UserAuthController.signUp);
userAuthRoutes.post("/signin", UserAuthController.signIn);

export { userAuthRoutes };