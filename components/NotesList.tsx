"use client";

import { useEffect } from "react";
import { NOTES_PAGE_SIZE } from "@/lib/constants";

import { useNotes } from "@/stores/notesStore";
import { usePage, useSearch, useSetMaxPage } from "@/stores/searchStore";

import { Note } from "@/components/Note";
import { NotePlaceholder } from "@/components/NotePlaceholder";

function NotesList() {
  const notes = useNotes();
  const search = useSearch();
  const page = usePage();

  const setMaxPage = useSetMaxPage();

  let filteredNotes = notes;

  useEffect(() => {
    setMaxPage(Math.ceil(filteredNotes.length / NOTES_PAGE_SIZE));
  }, [filteredNotes.length, setMaxPage]);

  if (search.length > 0) filteredNotes = notes.filter((n) => n.title.toLowerCase().includes(search.toLowerCase()));
  if (filteredNotes.length === 0) return <NotePlaceholder />;

  const paginatedNotes = filteredNotes.slice(
    NOTES_PAGE_SIZE * (page - 1),
    NOTES_PAGE_SIZE + NOTES_PAGE_SIZE * (page - 1)
  );

  return (
    <div className="p-4 flex flex-col gap-4 overflow-auto [grid-area:notesList]">
      {paginatedNotes.map((n) => (
        <Note key={n.id} note={n} />
      ))}
    </div>
  );
}

export { NotesList };
