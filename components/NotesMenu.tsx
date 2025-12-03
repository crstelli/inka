import { NotesHeading } from "@/components/NotesHeading";
import { NotesSearch } from "@/components/NotesSearch";
import { NotesList } from "@/components/NotesList";
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
