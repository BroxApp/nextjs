import { cookies } from "next/headers";
import { findUserById } from "@/lib/users";
import type { PublicUser } from "@/lib/auth-types";

export const SESSION_COOKIE = "session";

function toPublicUser(user: {
  id: string;
  username: string;
  fname: string;
  lname: string;
  email: string;
  address: string;
  role: PublicUser["role"];
}): PublicUser {
  return {
    id: user.id,
    username: user.username,
    fname: user.fname,
    lname: user.lname,
    email: user.email,
    address: user.address,
    role: user.role,
  };
}

export async function createSession(userId: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, userId, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function getCurrentUser(): Promise<PublicUser | null> {
  const cookieStore = await cookies();
  const userId = cookieStore.get(SESSION_COOKIE)?.value;
  if (!userId) return null;

  const user = await findUserById(userId);
  if (!user) return null;

  return toPublicUser(user);
}
