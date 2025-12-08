"use server";
import prisma from "@/lib/prisma/prisma";
import { auth } from "@/lib/auth";

async function loadNotes() {
  const session = await auth();
  if (!session?.user?.email) throw new Error("User not logged in.");

  const userId = (
    await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    })
  )?.id;

  console.log(userId);
}

export { loadNotes };
