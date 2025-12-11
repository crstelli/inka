import { getNotes } from "@/lib/prisma/getNotes";

import { NotesHeading } from "@/components/NotesHeading";
import { NotesSearch } from "@/components/NotesSearch";
import { NotesList } from "@/components/NotesList";
import { Pagination } from "@/components/Pagination";

async function NotesSection() {
  const notes = await getNotes();

  return (
    <>
      <NotesHeading count={notes.length} />
      <NotesSearch />
      <NotesList notes={notes} />
      <Pagination />
    </>
  );
}

export { NotesSection };
