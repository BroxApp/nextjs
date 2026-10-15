import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import {z} from "zod";

import { hashPassword } from "@/lib/password";
import {
    addUser,
    findUserByEmail,
    findUserByUsername,
} from "@/lib/users";

const registerSchema = z.object({
    username: z.string().trim().min(3),
    fname: z.string().trim().min(3),
    lname: z.string().trim().min(3),
    email: z.string().trim().email(),
    address: z.string().trim().min(3),
    password: z.string().trim().min(6),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validation = registerSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(
                { message: "Invalid registration information" },
                { status: 400 }
            );
        }
        const data = validation.data;

        const email = data.email.toLowerCase();
        const username = data.username.toLowerCase();

        const existingEmail = await findUserByEmail(email);

        if (existingEmail) {
            return NextResponse.json(
                { message: "This email is already registered" },
                { status: 409 }
            );
        }

        const existingUsername = await findUserByUsername(username);

        if (existingUsername) {
            return NextResponse.json(
                { message: "This username is already taken" },
                { status: 409 }
            );
        }

        const user = {
            id: randomUUID(),
            username,
            fname: data.fname,
            lname: data.lname,
            email,
            address: data.address,
            passwordHash: hashPassword(data.password),
            role: "user" as const,
        };

        await addUser(user);

        return NextResponse.json(
            { message: "User registered successfully" },
            { status: 201 },
        );
    }catch{
        return NextResponse.json(
            { message: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
