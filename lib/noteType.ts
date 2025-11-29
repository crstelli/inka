import type { JSONContent } from "@tiptap/react";

export interface Note {
  id: number;
  created_at: string;

  title: string;
  description?: string;

  content: JSONContent;
}
