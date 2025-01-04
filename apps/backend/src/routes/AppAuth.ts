import { Context, Hono } from "hono";
import * as authController from "../controllers/AppAuth";

const appAuthRoutes = new Hono().basePath("/app");

appAuthRoutes.get("/signup", authController.signUp);
appAuthRoutes.post("/signin", authController.signIn);

export { appAuthRoutes };