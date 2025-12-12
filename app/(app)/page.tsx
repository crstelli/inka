import { getNotes } from "@/lib/prisma/getNotes";

import { NotesSection } from "@/components/NotesSection";
import { Heading } from "@/components/Heading";
import { EditorSection } from "@/components/EditorSection";
import { NotesSideList } from "@/components/NotesSideList";
import { Suspense } from "react";

export default async function page() {
  const notes = await getNotes();

  return (
    <div className="grid grid-cols-1 h-screen overflow-y-auto lg:grid-cols-[400px_1fr] grid-rows-[50px_1fr] divide-x">
      <NotesSection notes={notes} className="max-lg:hidden" />
      <Heading />
      <Suspense fallback={<p>Editor loading...</p>}>
        <EditorSection />
      </Suspense>

      <NotesSideList notes={notes} />
    </div>
  );
}
