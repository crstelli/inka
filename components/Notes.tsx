"use client";

import { useNotes } from "@/stores/notesStore";

import { Note } from "@/components/Note";
import { NotePlaceholder } from "@/components/NotePlaceholder";

function Notes() {
  const { notes } = useNotes();

  return (
    <div className="p-4 flex flex-col gap-4 overflow-auto">
      {notes.length > 0 ? notes.map((n) => <Note key={n.id} note={n} />) : <NotePlaceholder />}
    </div>
  );
}

export { Notes };
