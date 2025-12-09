import prisma from "@/lib/prisma/prisma";

import { getUser } from "@/lib/auth";
import type { NoteInfo } from "@/lib/types/NoteInfo";

export async function getNotesList() {
  const user = await getUser();
  const notesInfo: NoteInfo[] = await prisma.note.findMany({
    where: { user_id: user.id },
    select: { id: true, title: true, description: true, updated_at: true, created_at: true },
  });

  return notesInfo;
}
