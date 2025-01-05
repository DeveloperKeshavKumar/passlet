import { Hono } from "hono";
import * as AppOwnerController from "../controllers/AppOwner";

const appOwnerRoutes = new Hono().basePath("/app-owner");

appOwnerRoutes.post("/signup", AppOwnerController.signUp);
appOwnerRoutes.post("/signin", AppOwnerController.signIn);
appOwnerRoutes.get("/apps", AppOwnerController.getAllApps);

export { appOwnerRoutes };