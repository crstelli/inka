"use server";
import { signIn } from "@/lib/auth";

async function signInWithGoogle() {
  return signIn("google", { redirectTo: "/" });
}

export { signInWithGoogle };
