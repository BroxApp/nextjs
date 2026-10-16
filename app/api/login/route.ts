import { NextResponse } from "next/server";
import { z } from "zod";
import { findUserByEmail, findUserByUsername } from "@/lib/users";
import { verifyPassword } from "@/lib/password";
import { createSession } from "@/lib/session";

const loginSchema = z.object({
  identifier: z.string().min(1, "Email or username is required"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = loginSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: "Invalid input data" },
        { status: 400 }
      );
    }

    const { identifier, password } = validation.data;

    // جستجوی کاربر با ایمیل یا یوزرنیم
    const user =
      (await findUserByEmail(identifier)) ||
      (await findUserByUsername(identifier));

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email/username or password" },
        { status: 401 }
      );
    }

    // بررسی صحت پسورد
    const isPasswordValid = verifyPassword(password, user.passwordHash);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email/username or password" },
        { status: 401 }
      );
    }

    // ایجاد سشن (تنظیم کوکی)
    await createSession(user.id);

    return NextResponse.json(
      { message: "Logged in successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}