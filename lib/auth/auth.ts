import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import prisma from "@/lib/prisma/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      if (!user.email || !user.name) throw new Error("User profile error.");

      // Create user if does not exists.
      await prisma.user.upsert({
        where: {
          email: user.email,
        },
        update: {
          name: user.name,
        },
        create: {
          email: user.email,
          name: user.name,
        },
      });

      return true;
    },
  },
});

export async function getUser() {
  const session = await auth();
  if (!session?.user?.email) throw new Error("User not logged in.");

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) throw new Error("User does not exists.");

  return user;
}

export async function getSession() {
  const session = await auth();
  if (!session?.user?.email) throw new Error("User not logged in.");

  return session;
}
