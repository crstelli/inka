"use server";
import { getUser } from "@/actions/auth/getUser";
import prisma from "@/lib/prisma/prisma";

async function loadNotes() {
  const user = await getUser();
  const notes = await prisma.note.findMany({ where: { user_id: user.id } });

  return notes;
}

export { loadNotes };
