import { getUser } from "@/lib/auth";
import prisma from "@/lib/prisma/prisma";

export async function GET() {
  const user = await getUser();
  const notes = await prisma.note.findMany({ where: { user_id: user.id, trash: true } });

  return notes;
}
