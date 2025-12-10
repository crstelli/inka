"use server";
import { getUser } from "@/lib/auth/auth";
import prisma from "@/lib/prisma/prisma";
import { DEFAULT_NOTE_NAME } from "@/lib/utils/constants";

import type { JSONContent } from "@tiptap/react";
import { revalidatePath } from "next/cache";

async function createNote(content: JSONContent) {
  const user = await getUser();
  const note = await prisma.note.create({
    data: { user_id: user.id, content: JSON.stringify(content), title: DEFAULT_NOTE_NAME },
  });

  revalidatePath("/");
  return note;
}

export { createNote };
