"use client";

import { Note } from "./Note";
import { NotePlaceholder } from "./NotePlaceholder";

import { useNotes } from "./notesContext/Provider";

function Notes() {
  const { notes } = useNotes();

  return (
    <div className="p-4 flex flex-col gap-4 overflow-auto">
      {notes.length > 0 ? notes.map((n) => <Note key={n.id} note={n} />) : <NotePlaceholder />}
    </div>
  );
}

export { Notes };
