"use server";
import { getUser } from "@/actions/auth/getUser";
import prisma from "@/lib/prisma/prisma";

interface Note {
  content: string;
  title: string;
}

async function addNote(note: Note) {
  const user = await getUser();
  prisma.note.create({ data: { ...note, user_id: user.id } });
}

export { addNote };
