import { Note } from "@/lib/noteType";
import type { JSONContent } from "@tiptap/react";

interface Parameters {
  title?: string;
  description?: string;

  content: JSONContent;
}

export function createNote({ title = "New Note", description, content }: Parameters) {
  const note: Note = {
    id: Date.now(),
    created_at: new Date(Date.now()).toISOString(),

    title: title,
    description: description,
    content: content,
  };

  return note;
}
