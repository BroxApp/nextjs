import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export default async function ProfilePage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="mx-auto max-w-lg mt-10 rounded-2xl border border-slate-700 bg-slate-950 p-8 shadow-2xl text-white space-y-6">
      <h1 className="text-2xl font-bold text-orange-500 border-b border-slate-800 pb-4">
        User Profile
      </h1>
      
      <div className="space-y-3 text-slate-300">
        <p><strong className="text-white">Username:</strong> {user.username}</p>
        <p><strong className="text-white">First Name:</strong> {user.fname}</p>
        <p><strong className="text-white">Last Name:</strong> {user.lname}</p>
        <p><strong className="text-white">Email:</strong> {user.email}</p>
        <p><strong className="text-white">Address:</strong> {user.address}</p>
        <p><strong className="text-white">Role:</strong> <span className="uppercase bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded text-sm">{user.role}</span></p>
      </div>

      <div className="pt-4 border-t border-slate-800">
        <LogoutButton />
      </div>
    </div>
  );
}