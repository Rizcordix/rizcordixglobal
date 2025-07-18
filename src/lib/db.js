// src/lib/db.js

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Enable verbose logging (optional)
sqlite3.verbose();

const dbFilePath = process.cwd() + '/rizcordix.db';

export async function openDB() {
  return open({
    filename: dbFilePath,
    driver: sqlite3.Database,
  });
}
