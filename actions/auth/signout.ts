"use server";
import { signOut } from "@/lib/auth";

async function signout() {
  return signOut({ redirectTo: "/login" });
}

export { signout };
