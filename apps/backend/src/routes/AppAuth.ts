import { Hono } from "hono";
import * as AppController from "../controllers/AppAuth";

const appAuthRoutes = new Hono().basePath("/app");

appAuthRoutes.post("/register", AppController.register);
appAuthRoutes.post("/credentials", AppController.generateCredentials);
appAuthRoutes.get("/details", AppController.getAppDetails);

export { appAuthRoutes };