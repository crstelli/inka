import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: PrismaAdapter(prisma),
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
