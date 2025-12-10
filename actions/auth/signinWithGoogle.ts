"use server";
import { signIn } from "@/lib/auth/auth";

async function signinWithGoogle() {
  return signIn("google", { redirectTo: "/" });
}

export { signinWithGoogle };
