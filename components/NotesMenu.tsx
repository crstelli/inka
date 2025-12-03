import { NotesHeading } from "@/components/NotesHeading";
import { NotesList } from "@/components/NotesList";
import { NotesSearch } from "@/components/NotesSearch";
import { Pagination } from "@/components/Pagination";

function NotesMenu() {
  return (
    <>
      <NotesHeading />
      <NotesSearch />
      <NotesList />
      <Pagination />
    </>
  );
}

export { NotesMenu };
