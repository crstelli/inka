"use server";

import prisma from "@/lib/prisma/prisma";
import { getUser } from "@/lib/auth";

import type { JSONContent } from "@tiptap/react";
import { revalidatePath } from "next/cache";

interface Params {
  noteId: string;
  content?: JSONContent;
  title?: string;
}

async function updateNote({ noteId, content, title }: Params) {
  const user = await getUser();

  const data: Record<string, string> = {};

  if (content) data.content = JSON.stringify(content);
  if (title) data.title = title;

  await prisma.note.update({ where: { id: noteId, user_id: user.id }, data });

  revalidatePath("/");
}

export { updateNote };
