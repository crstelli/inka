"use client";

import { useNotes } from "@/stores/notesStore";
import { useSearch } from "@/stores/searchStore";

import { Note } from "@/components/Note";
import { NotePlaceholder } from "@/components/NotePlaceholder";

function Notes() {
  const notes = useNotes();
  const search = useSearch();

  console.log(notes);

  if (notes.length === 0) return <NotePlaceholder />;

  let filteredNotes = notes;

  if (search.length > 0) filteredNotes = notes.filter((n) => n.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-4 flex flex-col gap-4 overflow-auto">
      {filteredNotes.map((n) => (
        <Note key={n.id} note={n} />
      ))}
    </div>
  );
}

export { Notes };
