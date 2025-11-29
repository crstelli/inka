"use client";

import type { Note } from "@/lib/noteType";
import { useNotes } from "./notesContext/Provider";

interface Props {
  note: Note;
}

function Note({ note }: Props) {
  const { setCurrentNote } = useNotes();

  function handleSetNote() {
    setCurrentNote(note);
  }

  return (
    <div onClick={handleSetNote} className="bg-secondary h-25 rounded-md p-3 flex flex-col cursor-pointer">
      <h3 className="font-medium">{note.title}</h3>
      <span className="text-muted-foreground">{note.description || "No description provided"}</span>
    </div>
  );
}

export { Note };
