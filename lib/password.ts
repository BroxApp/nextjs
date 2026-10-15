import { randomBytes, scryptSync, timingSafeEqual } from "crypto";

// Training hash (Node built-in). Real apps usually use bcrypt or argon2.
export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string) {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;

  const incoming = scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, "hex");

  if (incoming.length !== expected.length) return false;
  return timingSafeEqual(incoming, expected);
}
