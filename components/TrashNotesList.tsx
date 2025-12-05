"use client";

import { TrashNote } from "@/components/TrashNote";
import { useTrashNotes } from "@/stores/notesStore";

function TrashNotesList() {
  const trashNotes = useTrashNotes();

  return (
    <div className="mt-20 flex flex-col w-full max-w-[500px]">
      {trashNotes.length > 0 ? (
        trashNotes.map((n) => <TrashNote note={n} key={n.id} />)
      ) : (
        <p className="text-center">The trash is empty.</p>
      )}
    </div>
  );
}

export { TrashNotesList };
