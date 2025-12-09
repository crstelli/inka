import { useEffect, useState } from "react";
import type { Note } from "@/lib/types/Note";
import { useOpenNote } from "@/stores/openNoteStore";

export function useNote() {
  const openNote = useOpenNote();
  const [note, setNote] = useState<null | Note>(null);

  useEffect(() => {
    async function fetchNote() {
      const res = await fetch(`api/notes/${openNote}`);
      const data = await res.json();

      setNote(data);
    }

    if (openNote) fetchNote();
  }, [openNote, setNote]);

  return note;
}
