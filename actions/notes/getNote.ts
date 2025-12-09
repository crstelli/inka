"use server";

import prisma from "@/lib/prisma/prisma";

async function getNote(id: string) {
  const note = await prisma.note.findUnique({ where: { id } });
  return note || null;
}

export { getNote };
