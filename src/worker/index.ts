import { Hono } from "hono";
import helloRouter from "../server/routes/hello.js";
import healthRouter from "../server/routes/health.js";
import publicRouter from "../server/routes/public.js";
import type { Env } from "../server/types/env.js";

const app = new Hono<{ Bindings: Env }>();

app.route("/api", healthRouter);
app.route("/api", helloRouter);
app.route("/api", publicRouter);

app.get("/api", (c) => c.json({ ok: true, name: "Valerie Psych Booking API" }));

export default app;
