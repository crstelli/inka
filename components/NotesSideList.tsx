"use client";

import type { NoteInfo } from "@/lib/types/NoteInfo";
import { NotesSection } from "@/components/NotesSection";
import { useNotesList } from "@/stores/menusStore";

interface Props {
  notes: NoteInfo[];
}

function NotesSideList({ notes }: Props) {
  const isOpen = useNotesList();
  if (!isOpen) return;

  return (
    <NotesSection
      notes={notes}
      className="lg:hidden absolute top-0 left-0 z-1 bg-background w-screen h-screen"
      isSide
    />
  );
}

export { NotesSideList };
