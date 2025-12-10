"use server";
import { revalidatePath } from "next/cache";

import { getUser } from "@/lib/auth/auth";
import prisma from "@/lib/prisma/prisma";

export async function setNoteTrash(id: string, value: boolean) {
  const user = await getUser();
  await prisma.note.update({ where: { user_id: user.id, id }, data: { trash: value } });

  revalidatePath("/");
}
