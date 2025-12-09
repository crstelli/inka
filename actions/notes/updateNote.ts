"use server";

import prisma from "@/lib/prisma/prisma";
import { getUser } from "@/lib/auth";

import type { JSONContent } from "@tiptap/react";

async function updateNote(noteId: string, content: JSONContent) {
  const user = await getUser();
  await prisma.note.update({ where: { id: noteId, user_id: user.id }, data: { content: JSON.stringify(content) } });
}

export { updateNote };
