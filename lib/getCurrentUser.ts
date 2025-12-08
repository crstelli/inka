import { auth } from "@/lib/auth";

async function getCurrentUser() {
  const session = await auth();
  return session?.user || null;
}

export { getCurrentUser };
