"use client";

import type { Note } from "@/lib/noteType";
import { useNotes } from "@/stores/notesStore";

interface Props {
  note: Note;
}

function Note({ note }: Props) {
  const { setCurrentNote, currentNote } = useNotes();

  const isActive = currentNote?.id === note.id;

  function handleSetNote() {
    setCurrentNote(note);
  }

  return (
    <div
      onClick={handleSetNote}
      className={`h-25 rounded-md p-3 border flex flex-col cursor-pointer ${
        isActive ? "bg-background" : "bg-secondary border-transparent"
      }`}
    >
      <h3 className="font-medium">{note.title}</h3>
      <span className="text-muted-foreground">{note.description || "No description provided"}</span>
    </div>
  );
}

export { Note };
