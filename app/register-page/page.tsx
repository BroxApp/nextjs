"use client";
import { useState } from "react";
import { z } from "zod";

const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  fname: z.string().min(3, "First name must be at least 3 characters long"),
  lname: z.string().min(3, "Last name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(3, "Address must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function RegisterPage() {
  const [notification, setNotification] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      username: formData.get("username")?.toString().trim() || "",
      fname: formData.get("fname")?.toString().trim() || "",
      lname: formData.get("lname")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      address: formData.get("address")?.toString().trim() || "",
      password: formData.get("password")?.toString() || "",
    };

    const validationResult = registerSchema.safeParse(data);

    if (!validationResult.success) {
      setNotification(validationResult.error.issues[0].message);
      setTimeout(() => setNotification(""), 3000);
      setIsSuccess(false);
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validationResult.data),
      });

      const result = await response.json();

      if (!response.ok) {
        setNotification(result.message || "Registration failed");
        setTimeout(() => setNotification(""), 3000);
        setIsSuccess(false);
        return;
      }
      setNotification("Registration successful!");
      setIsSuccess(true);
      setTimeout(() => setNotification(""), 3000);
      form.reset();
    } catch (error) {
      setNotification("An error occurred during registration");
      setTimeout(() => setNotification(""), 3000);
    }
  }

  return (
    <>
      {
        <div
          className={`fixed left-5 bottom-5 rounded-lg  px-5 py-3 text-white transition transform duration-500 ${isSuccess ? "bg-green-600" : "bg-red-500"}
            ${notification ? "translate-x-0" : "-translate-x-20"}`}
        >
          {notification}
        </div>
      }

      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-md space-y-5 rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-2xl sm:p-8 mt-2"
      >
        <div>
          <label
            htmlFor="username"
            className="mb-1.5 block text-sm text-slate-300"
          >
            Choice a user name:
          </label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="User name"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none
                 placeholder:text-slate-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="fname"
            className="mb-1.5 block text-sm text-slate-300"
          >
            First name:
          </label>
          <input
            id="fname"
            type="text"
            name="fname"
            placeholder="First name"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none
                 placeholder:text-slate-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="lname"
            className="mb-1.5 block text-sm text-slate-300"
          >
            Last name:
          </label>
          <input
            id="lname"
            type="text"
            name="lname"
            placeholder="Last name"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none
                 placeholder:text-slate-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm text-slate-300"
          >
            Enter your valid email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none
                 placeholder:text-slate-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="mb-1.5 block text-sm text-slate-300"
          >
            Enter your current address:
          </label>
          <input
            id="address"
            type="text"
            name="address"
            placeholder="Home address"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none
                 placeholder:text-slate-500 focus:border-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm text-slate-300"
          >
            Enter a powerfull password:
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none
                 placeholder:text-slate-500 focus:border-orange-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 py-2.5 font-semibold text-slate-950 transition hover:bg-orange-400 active:scale-[0.95]"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
}
