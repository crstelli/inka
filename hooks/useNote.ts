import { useEffect, useState } from "react";
import { useOpenNote } from "@/stores/openNoteStore";

import type { Note } from "@/lib/types/Note";

export function useNote() {
  const openNote = useOpenNote();
  const [note, setNote] = useState<null | Note>(null);

  useEffect(() => {
    async function fetchNote() {
      let note = null;
      if (openNote) {
        const res = await fetch(`api/notes/${openNote}`);
        note = await res.json();
      }

      setNote(note);
    }

    fetchNote();
  }, [openNote, setNote]);

  return note;
}
