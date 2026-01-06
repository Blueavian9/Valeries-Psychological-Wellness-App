import { Hono } from "hono";
import type { Env } from "../types/env.js";
import { getDatabase } from "../db/connection.js";
import { PractitionerRepository } from "../repositories/practitionerRepository.js";

const publicRouter = new Hono<{ Bindings: Env }>();

/**
 * GET /api/public/:slug
 * Public practitioner profile (no PHI)
 */
publicRouter.get("/public/:slug", async (c) => {
  const slug = c.req.param("slug")?.trim();
  if (!slug) return c.json({ error: "Missing slug" }, 400);

  const db = getDatabase(c.env);
  const practitionerRepo = new PractitionerRepository(db);

  const practitioner = await practitionerRepo.getBySlug(slug);

  if (!practitioner || practitioner.is_active !== 1) {
    return c.json({ error: "Not found" }, 404);
  }

  return c.json({
    id: practitioner.id,
    display_name: practitioner.display_name,
    public_slug: practitioner.public_slug,
    timezone: practitioner.timezone,
  });
});

/**
 * GET /api/public/:slug/services
 * Public list of active service types (no PHI)
 */
publicRouter.get("/public/:slug/services", async (c) => {
  const slug = c.req.param("slug")?.trim();
  if (!slug) return c.json({ error: "Missing slug" }, 400);

  const db = getDatabase(c.env);
  const practitionerRepo = new PractitionerRepository(db);

  const practitioner = await practitionerRepo.getBySlug(slug);
  if (!practitioner || practitioner.is_active !== 1) {
    return c.json({ error: "Not found" }, 404);
  }

  const services = await db
    .prepare(
      `
      SELECT
        id,
        name,
        description,
        duration_minutes,
        price_cents,
        currency
      FROM service_types
      WHERE practitioner_id = ? AND is_active = 1
      ORDER BY name ASC
      `
    )
    .bind(practitioner.id)
    .all<{
      id: string;
      name: string;
      description: string | null;
      duration_minutes: number;
      price_cents: number | null;
      currency: string;
    }>();

  return c.json({ services: services.results ?? [] });
});

/**
 * GET /api/public/:slug/availability-rules
 * Public availability rules (no PHI)
 */
publicRouter.get("/public/:slug/availability-rules", async (c) => {
  const slug = c.req.param("slug")?.trim();
  if (!slug) return c.json({ error: "Missing slug" }, 400);

  const db = getDatabase(c.env);
  const practitionerRepo = new PractitionerRepository(db);

  const practitioner = await practitionerRepo.getBySlug(slug);
  if (!practitioner || practitioner.is_active !== 1) {
    return c.json({ error: "Not found" }, 404);
  }

  const rules = await db
    .prepare(
      `
      SELECT
        id,
        day_of_week,
        start_time,
        end_time
      FROM availability_rules
      WHERE practitioner_id = ? AND is_active = 1
      ORDER BY day_of_week ASC, start_time ASC
      `
    )
    .bind(practitioner.id)
    .all<{
      id: string;
      day_of_week: number;
      start_time: string;
      end_time: string;
    }>();

  return c.json({
    practitioner_id: practitioner.id,
    timezone: practitioner.timezone,
    rules: rules.results ?? [],
  });
});

export default publicRouter;
