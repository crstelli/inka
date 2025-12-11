import { getNotes } from "@/lib/prisma/getNotes";

import { NotesSection } from "@/components/NotesSection";
import { Heading } from "@/components/Heading";
import { EditorSection } from "@/components/EditorSection";
import { NotesSideList } from "@/components/NotesSideList";

export default async function page() {
  const notes = await getNotes();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] grid-rows-[50px_1fr] divide-x">
      <NotesSection notes={notes} className="max-lg:hidden" />
      <Heading />
      <EditorSection />

      <NotesSideList notes={notes} />
    </div>
  );
}
