export type UserRole = "user" | "admin";

export type StoredUser = {
  id: string;
  username: string;
  fname: string;
  lname: string;
  email: string;
  address: string;
  passwordHash: string;
  role: UserRole;
};

export type PublicUser = Omit<StoredUser, "passwordHash">;
