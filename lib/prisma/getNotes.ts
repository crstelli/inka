import prisma from "@/lib/prisma/prisma";

import { getUser } from "@/lib/auth/auth";
import type { NoteInfo } from "@/lib/types/NoteInfo";

interface Params {
  trash?: boolean;
}

export async function getNotes({ trash = false }: Params = {}) {
  const user = await getUser();
  const notesInfo: NoteInfo[] = await prisma.note.findMany({
    where: { user_id: user.id, trash },
    select: { id: true, title: true, description: true, updated_at: true, created_at: true },
  });

  return notesInfo;
}
