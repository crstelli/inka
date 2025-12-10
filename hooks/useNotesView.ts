import { useEffect, useMemo } from "react";
import { usePage, useSearch, useSetMaxPage } from "@/stores/filterStore";

import { NOTES_PAGE_SIZE } from "@/lib/utils/constants";
import type { NoteInfo } from "@/lib/types/NoteInfo";

export function useNotesView(notes: NoteInfo[]) {
  const search = useSearch();

  const page = usePage();
  const setMaxPage = useSetMaxPage();

  const filteredNotes = useMemo(() => {
    if (search.length === 0) return notes;
    return notes.filter((n) => n.title.toLowerCase().includes(search.toLowerCase()));
  }, [notes, search]);

  const maxPage = useMemo(() => Math.ceil(filteredNotes.length / NOTES_PAGE_SIZE) || 1, [filteredNotes.length]);

  const paginatedNotes = filteredNotes.slice(
    NOTES_PAGE_SIZE * (page - 1),
    NOTES_PAGE_SIZE + NOTES_PAGE_SIZE * (page - 1)
  );

  useEffect(() => {
    setMaxPage(maxPage);
  }, [setMaxPage, maxPage]);

  return paginatedNotes;
}
