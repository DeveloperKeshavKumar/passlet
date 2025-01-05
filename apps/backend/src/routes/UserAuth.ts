import { Hono } from "hono";
import * as UserAuthController from "../controllers/UserAuth";

const userAuthRoutes = new Hono().basePath("/user");

userAuthRoutes.post("/signup", UserAuthController.signUp);
userAuthRoutes.post("/signin", UserAuthController.signIn);
userAuthRoutes.post("/forget-password", UserAuthController.forgotPassword);
userAuthRoutes.post("/reset-password", UserAuthController.resetPassword);

export { userAuthRoutes };