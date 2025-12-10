"use server";

import { getUser } from "@/lib/auth";
import prisma from "@/lib/prisma/prisma";
import { revalidatePath } from "next/cache";

export async function deleteNote(id: string) {
  const user = await getUser();
  await prisma.note.delete({ where: { user_id: user.id, id, trash: true } });

  revalidatePath("/");
}
