PRAGMA foreign_keys = ON;

ALTER TABLE practitioners ADD COLUMN email TEXT;
ALTER TABLE practitioners ADD COLUMN is_active INTEGER NOT NULL DEFAULT 1;

CREATE UNIQUE INDEX IF NOT EXISTS idx_practitioners_email ON practitioners(email);

ALTER TABLE audit_logs ADD COLUMN metadata_json TEXT NOT NULL DEFAULT '{}';
