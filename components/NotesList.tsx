"use client";

import { Note } from "@/components/Note";
import { useNotesView } from "@/hooks/useNotesView";

import type { NoteInfo } from "@/lib/types/NoteInfo";

interface Props {
  notes: NoteInfo[];
}

function NotesList({ notes }: Props) {
  const displayNotes = useNotesView(notes);

  return (
    <div className="p-4 flex flex-col gap-4 overflow-auto">
      {displayNotes.map((n) => (
        <Note key={n.id} note={n} />
      ))}
    </div>
  );
}

export { NotesList };
