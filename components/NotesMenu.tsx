import { getNotesList } from "@/lib/getNotesList";

import { NotesHeading } from "@/components/NotesHeading";
import { NotesSearch } from "@/components/NotesSearch";
import { NotesList } from "@/components/NotesList";
import { Pagination } from "@/components/Pagination";

async function NotesMenu() {
  const notes = await getNotesList();

  return (
    <>
      <NotesHeading count={notes.length} />
      <NotesSearch />
      <NotesList notes={notes} />
      <Pagination />
    </>
  );
}

export { NotesMenu };
