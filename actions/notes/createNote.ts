import { getCurrentUser } from "@/lib/getCurrentUser";
import prisma from "@/lib/prisma/prisma";
import type { Note } from "@/lib/types/noteType";

export async function createNote(note: Note) {
  const user = await getCurrentUser();
  // prisma.note.create({ data: { ...note, user: user.id } });
}
