"use client";

import { useEffect } from "react";
import { useLoadNotes } from "@/stores/notesStore";

import { NotesMenu } from "@/components/NotesMenu";
import { Heading } from "@/components/Heading";
import { EditorSection } from "@/components/EditorSection";

export default function Page() {
  const loadNotes = useLoadNotes();

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  return (
    <div className="grid grid-cols-[3fr_10fr] divide-solid divide-x divide-y grid-rows-[50px_50px_1fr_50px] layout">
      <NotesMenu />
      <Heading />
      <EditorSection />
    </div>
  );
}
