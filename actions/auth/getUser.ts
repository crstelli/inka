"use server";
import prisma from "@/lib/prisma/prisma";
import { auth } from "@/lib/auth";

async function getUser() {
  const session = await auth();
  if (!session?.user?.email) throw new Error("User not logged in.");

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  return user;
}

export { getUser };
