import type { JSONContent } from "@tiptap/react";

import { DEFAULT_NOTE_NAME } from "@/lib/constants";
import { Note } from "@/lib/noteType";

interface Parameters {
  title?: string;
  description?: string;

  content: JSONContent;
}

export function createNote({ title = DEFAULT_NOTE_NAME, description, content }: Parameters) {
  const note: Note = {
    id: Date.now(),
    created_at: new Date(Date.now()).toISOString(),

    title: title,
    description: description,
    content: content,
  };

  return note;
}
