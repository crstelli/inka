import { getNotes } from "@/actions/notes/getNotes";

import { NotesHeading } from "@/components/NotesHeading";
import { NotesSearch } from "@/components/NotesSearch";
import { NotesList } from "@/components/NotesList";
import { Pagination } from "@/components/Pagination";

async function NotesMenu() {
  const notes = await getNotes();

  return (
    <>
      <NotesHeading />
      <NotesSearch />
      <NotesList notes={notes} />
      <Pagination />
    </>
  );
}

export { NotesMenu };
