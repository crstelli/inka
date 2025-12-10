import { getUser } from "@/lib/auth";
import prisma from "@/lib/prisma/prisma";
import type { NextRequest } from "next/server";

export async function GET(_: NextRequest, ctx: RouteContext<"/api/notes/[id]">) {
  const user = await getUser();
  const { id } = await ctx.params;

  const note = await prisma.note.findUnique({ where: { id, user_id: user.id } });
  return Response.json(note);
}
