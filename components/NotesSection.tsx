import { getNotes } from "@/lib/prisma/getNotes";

import { NotesHeading } from "@/components/NotesHeading";
import { NotesSearch } from "@/components/NotesSearch";
import { NotesList } from "@/components/NotesList";
import { Pagination } from "@/components/Pagination";

async function NotesSection() {
  const notes = await getNotes();

  return (
    <section className="max-lg:hidden row-span-2 grid grid-cols-1 grid-rows-[50px_50px_1fr_50px] divide-y">
      <NotesHeading count={notes.length} />
      <NotesSearch />
      <NotesList notes={notes} />
      <Pagination />
    </section>
  );
}

export { NotesSection };
