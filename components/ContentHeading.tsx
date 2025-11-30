"use client";

import { createNote } from "@/lib/createNote";
import { useEditor } from "@/stores/editorStore";
import { useNotes } from "@/stores/notesStore";

import { Button } from "@/components/ui/button";
import { useState } from "react";

function ContentHeading() {
  const [isEmpty, setIsEmpty] = useState(true);

  const { currentNote, updateNote, clearCurrentNote, addNote } = useNotes();
  const { editor, clearEditor } = useEditor();

  if (!editor) return null;

  editor.on("update", ({ editor }) => setIsEmpty(!editor.state.doc.textContent.length));

  function handleSave() {
    const content = editor?.getJSON();
    if (!content || !editor) return;

    if (currentNote) {
      updateNote(currentNote.id, content);
      clearCurrentNote();
    } else {
      const newNote = createNote({ content });
      addNote(newNote);
    }

    clearEditor();
  }

  return (
    <div className="bg-secondary flex items-center justify-between px-12">
      {!isEmpty && (
        <>
          <h1 className="text-xl">New Note</h1>
          <Button onClick={handleSave}>Save</Button>
        </>
      )}
    </div>
  );
}

export { ContentHeading };
