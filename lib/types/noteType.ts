import type { NoteInfo } from "@/lib/types/noteInfoType";
import type { JSONContent } from "@tiptap/react";

export interface Note extends NoteInfo {
  content: JSONContent | string;
  id: string;
}
