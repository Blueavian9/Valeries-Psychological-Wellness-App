import { Hono } from "hono";
import type { Env } from "../types/env.js";
import { getDatabase } from "../db/connection.js";
import { PractitionerRepository } from "../repositories/practitionerRepository.js";

const publicRouter = new Hono<{ Bindings: Env }>();

publicRouter.get("/public/:slug", async (c) => {
  const slug = c.req.param("slug")?.trim();

  if (!slug) return c.json({ error: "Missing slug" }, 400);

  const db = getDatabase(c.env);
  const repo = new PractitionerRepository(db);

  const practitioner = await repo.getBySlug(slug);

  if (!practitioner) return c.json({ error: "Not found" }, 404);
  if (practitioner.is_active !== 1) return c.json({ error: "Inactive" }, 404);

  // Public-safe response (no PHI; email can be optional—keep it or remove it)
  return c.json({
    id: practitioner.id,
    display_name: practitioner.display_name,
    public_slug: practitioner.public_slug,
    timezone: practitioner.timezone,
  });
});

export default publicRouter;
