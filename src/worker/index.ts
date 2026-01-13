import { Hono } from "hono";
import helloRouter from "../server/routes/hello.js";
import healthRouter from "../server/routes/health.js";
import publicRouter from "../server/routes/public.js";
import type { Env } from "../server/types/env.js";

// ────────────────────────────────────────────────
// Fix 1: Wrong path to getDatabase
// Most likely correct path is one of these (choose the real one):
// import { getDatabase } from "../db/connection.js";
// import { getDatabase } from "../server/db/connection.js";
// import { getDatabase } from "../src/db/connection.js";   ← ← ← try this first
// import { getDatabase } from "../../db/connection.js";

// For now, I'm assuming it's "../db/connection.js" — change it to match your folder structure
import { getDatabase } from "../import { Hono } from "hono";
import helloRouter from "../server/routes/hello.js";
import healthRouter from "../server/routes/health.js";
import publicRouter from "../server/routes/public.js";
import type { Env } from "../server/types/env.js";

// ────────────────────────────────────────────────
// Fix 1: Wrong path to getDatabase
// Most likely correct path is one of these (choose the real one):
// import { getDatabase } from "../db/connection.js";
// import { getDatabase } from "../server/db/connection.js";
// import { getDatabase } from "../src/db/connection.js";   ← ← ← try this first
// import { getDatabase } from "../../db/connection.js";

// For now, I'm assuming it's "../db/connection.js" — change it to match your folder structure
import { getDatabase } from "../db/connection.js";   // ← ADJUST THIS PATH

const app = new Hono<{ Bindings: Env }>();

// Mount your API sub-routers (all under /api)
app.route("/api", healthRouter);
app.route("/api", helloRouter);
app.route("/api", publicRouter);

// ────────────────────────────────────────────────
// Fix 2: You cannot .route() a function like getDatabase
// getDatabase is NOT a router — remove this line completely:
// app.route("/api", getDatabase);   ← DELETE THIS

// Optional: Nice root /api endpoint for testing
app.get("/api", (c) => {
  return c.json({
    ok: true,
    name: "Valerie Psych Booking API",
    timestamp: new Date().toISOString(),
    message: "API is running. Try /api/health or /api/hello"
  });
});

// Optional: Catch-all 404 for unknown API paths
app.notFound((c) => {
  return c.json({ error: "Not Found", path: c.req.path }, 404);
});

// Optional: Global error handler (very useful)
app.onError((err, c) => {
  console.error("Hono error:", err);
  return c.json({ error: "Internal Server Error", message: err.message }, 500);
});

export default app;import { Hono } from "hono";
import helloRouter from "../server/routes/hello.js";
import healthRouter from "../server/routes/health.js";
import publicRouter from "../server/routes/public.js";
import type { Env } from "../server/types/env.js";

// ────────────────────────────────────────────────
// Fix 1: Wrong path to getDatabase
// Most likely correct path is one of these (choose the real one):
// import { getDatabase } from "../db/connection.js";
// import { getDatabase } from "../server/db/connection.js";
// import { getDatabase } from "../src/db/connection.js";   ← ← ← try this first
// import { getDatabase } from "../../db/connection.js";

// For now, I'm assuming it's "../db/connection.js" — change it to match your folder structure
import { getDatabase } from "../../db/connection.js";   // ← ADJUST THIS PATH

const app = new Hono<{ Bindings: Env }>();

// Mount your API sub-routers (all under /api)
app.route("/api", healthRouter);
app.route("/api", helloRouter);
app.route("/api", publicRouter);

// ────────────────────────────────────────────────
// Fix 2: You cannot .route() a function like getDatabase
// getDatabase is NOT a router — remove this line completely:
// app.route("/api", getDatabase);   ← DELETE THIS

// Optional: Nice root /api endpoint for testing
app.get("/api", (c) => {
  return c.json({
    ok: true,
    name: "Valerie Psych Booking API",
    timestamp: new Date().toISOString(),
    message: "API is running. Try /api/health or /api/hello"
  });
});

// Optional: Catch-all 404 for unknown API paths
app.notFound((c) => {
  return c.json({ error: "Not Found", path: c.req.path }, 404);
});

// Optional: Global error handler (very useful)
app.onError((err, c) => {
  console.error("Hono error:", err);
  return c.json({ error: "Internal Server Error", message: err.message }, 500);
});

export default app;

const app = new Hono<{ Bindings: Env }>();

// Mount your API sub-routers (all under /api)
app.route("/api", healthRouter);
app.route("/api", helloRouter);
app.route("/api", publicRouter);

// ────────────────────────────────────────────────
// Fix 2: You cannot .route() a function like getDatabase
// getDatabase is NOT a router — remove this line completely:
// app.route("/api", getDatabase);   ← DELETE THIS

// Optional: Nice root /api endpoint for testing
app.get("/api", (c) => {
  return c.json({
    ok: true,
    name: "Valerie Psych Booking API",
    timestamp: new Date().toISOString(),
    message: "API is running. Try /api/health or /api/hello"
  });
});

// Optional: Catch-all 404 for unknown API paths
app.notFound((c) => {
  return c.json({ error: "Not Found", path: c.req.path }, 404);
});

// Optional: Global error handler (very useful)
app.onError((err, c) => {
  console.error("Hono error:", err);
  return c.json({ error: "Internal Server Error", message: err.message }, 500);
});

export default app;