-- Test slot
INSERT INTO availability_slots (
  id, practitioner_id, rule_id, start_at, end_at, duration_minutes, status
) VALUES (
  'slot-001', 'pract-001', 'rule-001', '2026-01-20T09:00:00Z', '2026-01-20T10:00:00Z', 60, 'available'
);