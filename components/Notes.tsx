import type { Note as NoteType } from "@/lib/noteType";

import { Note } from "./Note";
import { NotePlaceholder } from "./NotePlaceholder";

const notes: NoteType[] = [];

function Notes() {
  return (
    <div className="p-4 flex flex-col gap-4 overflow-auto">
      {notes.length > 0 ? notes.map((n) => <Note key={n.id} />) : <NotePlaceholder />}
    </div>
  );
}

export { Notes };
