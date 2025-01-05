import { Hono } from "hono";
import * as SessionController from "../controllers/Session";

const sessionRoutes = new Hono().basePath("/app");

sessionRoutes.post("/validate", SessionController.validate);
sessionRoutes.delete("/revoke", SessionController.revoke);
sessionRoutes.get("/all", SessionController.getAllSessions);

export { sessionRoutes };
