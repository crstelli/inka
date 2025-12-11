import { getNotes } from "@/lib/prisma/getNotes";

import { NotesHeading } from "@/components/NotesHeading";
import { NotesSearch } from "@/components/NotesSearch";
import { NotesList } from "@/components/NotesList";
import { Pagination } from "@/components/Pagination";

async function NotesSection() {
  const notes = await getNotes();

  return (
    <section className="[grid-area:notesSection] grid grid-cols-1 divide-y divide-border grid-rows-[50px_50px_1fr_50px]">
      <NotesHeading count={notes.length} />
      <NotesSearch />
      <NotesList notes={notes} />
      <Pagination />
    </section>
  );
}

export { NotesSection };
