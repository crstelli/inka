"use server";

import { getUser } from "@/lib/auth";
import prisma from "@/lib/prisma/prisma";

export async function trashNote(id: string) {
  const user = await getUser();
  await prisma.note.update({ where: { user_id: user.id, id }, data: { trash: true } });
}
