import type { NoteInfo } from "@/lib/types/NoteInfo";

import { NotesHeading } from "@/components/NotesHeading";
import { NotesSearch } from "@/components/NotesSearch";
import { NotesList } from "@/components/NotesList";
import { Pagination } from "@/components/Pagination";

interface Props {
  className?: React.ComponentProps<"section">["className"];
  isSide?: boolean;
  notes: NoteInfo[];
}

function NotesSection({ className, notes, isSide = false }: Props) {
  return (
    <section className={`row-span-2 grid grid-cols-1 grid-rows-[50px_50px_1fr_50px] divide-y ${className}`}>
      <NotesHeading count={notes.length} isSide={isSide} />
      <NotesSearch />
      <NotesList notes={notes} />
      <Pagination />
    </section>
  );
}

export { NotesSection };
