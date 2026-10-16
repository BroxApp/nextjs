"use client";
import { useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  identifier: z.string().min(1, "Email or username is required"),
  password: z.string().min(1, "Password is required"),
});

export default function LoginPage() {
  const [notification, setNotification] = useState("");
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      identifier: formData.get("identifier")?.toString().trim() || "",
      password: formData.get("password")?.toString().trim() || "",
    };

    const validationResult = loginSchema.safeParse(data);

    if (!validationResult.success) {
      setNotification(validationResult.error.issues[0].message);
      setTimeout(() => setNotification(""), 3000);
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setNotification(result.message || "Login failed");
        setTimeout(() => setNotification(""), 3000);
        return;
      }

      setNotification("Login successful!");
      setTimeout(() => {
        setNotification("");
        router.push("/profile"); // هدایت به صفحه پروفایل پس از لاگین موفق
      }, 1500);
    } catch {
      setNotification("Something went wrong");
      setTimeout(() => setNotification(""), 3000);
    }
  }

  return (
    <>
      <div
        className={`fixed left-5 bottom-5 rounded-lg bg-orange-600 px-5 py-3 text-white shadow-lg
          transition transform duration-500 
          ${notification ? "translate-x-0" : "-translate-x-20"}`}
      >
        {notification}
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-md space-y-5 rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-2xl sm:p-8 mt-10"
      >
        <h1 className="text-xl font-bold text-white text-center mb-4">Login</h1>
        <div>
          <label
            htmlFor="identifier"
            className="mb-1.5 block text-sm text-slate-300"
          >
            Email or Username:
          </label>
          <input
            id="identifier"
            type="text"
            name="identifier"
            placeholder="Enter your email or username"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none
                 placeholder:text-slate-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm text-slate-300"
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none
                 placeholder:text-slate-500 focus:border-orange-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 py-2.5 font-semibold text-slate-950 transition hover:bg-orange-400 active:scale-[0.95]"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}