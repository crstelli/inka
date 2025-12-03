import type { NoteInfo } from "@/lib/noteInfoType";
import type { JSONContent } from "@tiptap/react";

export interface Note extends NoteInfo {
  content: JSONContent;
}
