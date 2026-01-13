import { Hono } from "hono";
import type { Env } from "../types/env";

const helloRouter = new Hono<{ Bindings: Env }>();

helloRouter.get("/hello", (c) => {
  return c.json({ message: "Hello from Hono" });
});

export default helloRouter;
