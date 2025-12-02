"use client";

import { useEffect } from "react";
import { useLoadNotes } from "@/stores/notesStore";

import { AddNote } from "@/components/AddNote";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Content } from "@/components/Content";
import { ContentHeading } from "@/components/ContentHeading";
import { NoteHeading } from "@/components/NoteHeading";
import { Notes } from "@/components/Notes";
import { Search } from "@/components/Search";
import { Pagination } from "@/components/Pagination";

export default function Page() {
  const loadNotes = useLoadNotes();

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  return (
    <div className="grid grid-cols-[3fr_10fr] divide-solid divide-x divide-y grid-rows-[50px_50px_1fr_50px]">
      <AddNote />
      <NoteHeading />
      <Search />
      <ContentHeading />
      <Notes />
      <Content />
      <Pagination />
      <Breadcrumb />
    </div>
  );
}
