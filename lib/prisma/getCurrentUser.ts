import { auth } from "@/lib/auth/auth";

async function getCurrentUser() {
  const session = await auth();
  return session?.user || null;
}

export { getCurrentUser };
