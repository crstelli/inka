import prisma from "@/lib/prisma/prisma";

import { getUser } from "@/lib/auth";
import type { NoteInfo } from "@/lib/types/NoteInfo";

import { NotesHeading } from "@/components/NotesHeading";
import { NotesSearch } from "@/components/NotesSearch";
import { NotesList } from "@/components/NotesList";
import { Pagination } from "@/components/Pagination";

async function NotesMenu() {
  const user = await getUser();
  const notesInfo: NoteInfo[] = await prisma.note.findMany({
    where: { user_id: user.id },
    select: { id: true, title: true, description: true, updated_at: true, created_at: true },
  });

  return (
    <>
      <NotesHeading count={notesInfo.length} />
      <NotesSearch />
      <NotesList notes={notesInfo} />
      <Pagination />
    </>
  );
}

export { NotesMenu };
