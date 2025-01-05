import { Context, Hono } from "hono";
import { appAuthRoutes } from "./AppAuth";
import { userAuthRoutes } from "./UserAuth";
import { appOwnerRoutes } from "./AppOwner";
import { sessionRoutes } from "./Session";

const routes = new Hono();

routes.route("/api/v1", appAuthRoutes);
routes.route("/api/v1", userAuthRoutes);
routes.route("/api/v1", appOwnerRoutes);
routes.route("/api/v1", sessionRoutes);

routes.get('/', (c: Context) => {
   return c.text('Passlet Server is Up and Authenticating!');
})

export default routes;