import { Context, Hono } from "hono";
import { appAuthRoutes } from "./AppAuth";
// import { userAuthRoutes } from "./UserAuth";

const routes = new Hono();

routes.route("/api/v1", appAuthRoutes);
// routes.route("/api/v1", userAuthRoutes);
routes.get('/', (c: Context) => {
   return c.text('Passlet Server is Up and Authenticating!');
})

export default routes;