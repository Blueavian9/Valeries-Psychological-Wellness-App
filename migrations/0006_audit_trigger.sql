-- Migration: 0006 - Automatic audit logging triggers
-- Created: 2026-01-13
-- Purpose: Log INSERT/UPDATE on bookings and availability_slots automatically
-- Actor assumed as practitioner for MVP; extend later for client/system

PRAGMA foreign_keys = ON;

-- Trigger: Log new booking creation
CREATE TRIGGER IF NOT EXISTS trg_bookings_insert_audit
AFTER INSERT ON bookings
BEGIN
  INSERT INTO audit_logs (
    actor_type, 
    actor_id, 
    action, 
    entity_type, 
    entity_id, 
    metadata_json, 
    created_at
  ) VALUES (
    'practitioner', 
    NEW.practitioner_id, 
    'create_booking', 
    'booking', 
    NEW.id, 
    json_object(
      'client_email', NEW.client_email,
      'service_type_id', NEW.service_type_id,
      'start_at', NEW.start_at,
      'end_at', NEW.end_at,
      'status', NEW.status
    ), 
    strftime('%Y-%m-%dT%H:%M:%fZ','now')
  );
END;

-- Trigger: Log booking updates (e.g. status change, notes)
CREATE TRIGGER IF NOT EXISTS trg_bookings_update_audit
AFTER UPDATE ON bookings
BEGIN
  INSERT INTO audit_logs (
    actor_type, 
    actor_id, 
    action, 
    entity_type, 
    entity_id, 
    metadata_json, 
    created_at
  ) VALUES (
    'practitioner', 
    NEW.practitioner_id, 
    'update_booking', 
    'booking', 
    NEW.id, 
    json_object(
      'old_status', OLD.status,
      'new_status', NEW.status,
      'old_notes', OLD.notes,
      'new_notes', NEW.notes,
      'changed_fields', 
        CASE 
          WHEN OLD.status != NEW.status THEN 'status' 
          WHEN OLD.notes != NEW.notes THEN 'notes' 
          ELSE 'other' 
        END
    ), 
    strftime('%Y-%m-%dT%H:%M:%fZ','now')
  );
END;

-- Trigger: Log new availability slot creation
CREATE TRIGGER IF NOT EXISTS trg_slots_insert_audit
AFTER INSERT ON availability_slots
BEGIN
  INSERT INTO audit_logs (
    actor_type, 
    actor_id, 
    action, 
    entity_type, 
    entity_id, 
    metadata_json, 
    created_at
  ) VALUES (
    'practitioner', 
    NEW.practitioner_id, 
    'create_slot', 
    'slot', 
    NEW.id, 
    json_object(
      'start_at', NEW.start_at,
      'end_at', NEW.end_at,
      'status', NEW.status,
      'from_rule', NEW.rule_id IS NOT NULL
    ), 
    strftime('%Y-%m-%dT%H:%M:%fZ','now')
  );
END;