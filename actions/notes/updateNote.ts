"use server";
import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma/prisma";
import { getUser } from "@/lib/auth/auth";

import type { JSONContent } from "@tiptap/react";

interface Params {
  noteId: string;
  content?: JSONContent;
  title?: string;
  description?: string | null;
}

async function updateNote({ noteId, content, title, description }: Params) {
  const user = await getUser();

  const data: Record<string, string> = {};

  if (content) data.content = JSON.stringify(content);
  if (title) data.title = title;
  if (description) data.description = description;

  await prisma.note.update({ where: { id: noteId, user_id: user.id }, data });

  revalidatePath("/");
}

export { updateNote };
