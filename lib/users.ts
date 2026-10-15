import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import type { StoredUser } from "@/lib/auth-types";

const usersFile = path.join(process.cwd(), "data", "users.json");

export async function readUsers(): Promise<StoredUser[]> {
  try {
    const raw = await readFile(usersFile, "utf8");
    return JSON.parse(raw) as StoredUser[];
  } catch {
    return [];
  }
}

export async function writeUsers(users: StoredUser[]) {
  await mkdir(path.dirname(usersFile), { recursive: true });
  await writeFile(usersFile, JSON.stringify(users, null, 2), "utf8");
}

export async function findUserByEmail(email: string) {
  const users = await readUsers();
  return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
}

export async function findUserByUsername(username: string) {
  const users = await readUsers();
  return users.find(
    (user) => user.username.toLowerCase() === username.toLowerCase(),
  );
}

export async function findUserById(id: string) {
  const users = await readUsers();
  return users.find((user) => user.id === id);
}

export async function addUser(user: StoredUser) {
  const users = await readUsers();
  users.push(user);
  await writeUsers(users);
  return user;
}
