"use server";
import { revalidatePath } from "next/cache";

import { getUser } from "@/lib/auth/auth";
import prisma from "@/lib/prisma/prisma";

export async function deleteNote(id: string) {
  const user = await getUser();
  await prisma.note.delete({ where: { user_id: user.id, id, trash: true } });

  revalidatePath("/");
}
