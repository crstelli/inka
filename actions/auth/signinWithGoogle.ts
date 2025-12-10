"use server";
import { signIn } from "@/lib/auth";

async function signinWithGoogle() {
  return signIn("google", { redirectTo: "/" });
}

export { signinWithGoogle };
