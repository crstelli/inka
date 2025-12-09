"use client";

import { getNote } from "@/actions/notes/getNote";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Editor } from "@/components/Editor";
import { EditorHeading } from "@/components/EditorHeading";
import type { Note } from "@/lib/types/noteType";
import { useOpenNote } from "@/stores/openNoteStore";
import { useEffect, useState } from "react";

function EditorSection() {
  const openNote = useOpenNote();
  const [note, setNote] = useState<null | Note>(null);

  useEffect(() => {
    async function fetchNote() {
      const res = await fetch(`api/notes/${openNote}`);
      const data = await res.json();

      setNote(data);
    }

    if (openNote) fetchNote();
  }, [openNote]);

  return (
    <>
      <EditorHeading />
      <Editor note={note} />
      <Breadcrumb />
    </>
  );
}

export { EditorSection };
