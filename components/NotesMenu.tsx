import { NotesHeading } from "@/components/NotesHeading";
import { NotesSearch } from "@/components/NotesSearch";
import { NotesList } from "@/components/NotesList";
import { Pagination } from "@/components/Pagination";
import { getNotes } from "@/lib/getNotes";

async function NotesMenu() {
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

export { NotesMenu };
