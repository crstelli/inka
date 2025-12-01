"use client";

import { useState } from "react";

import { createNote } from "@/lib/createNote";

import { useClearEditor, useEditor } from "@/stores/editorStore";
import { useAddNote, useClearOpenNote, useOpenNote, useUpdateNote } from "@/stores/notesStore";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Pen, Save } from "lucide-react";
import { DEFAULT_NOTE_NAME } from "@/lib/variables";

function ContentHeading() {
  const [title, setTitle] = useState(DEFAULT_NOTE_NAME);
  const [isEditing, setIsEditing] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const addNote = useAddNote();
  const updateNote = useUpdateNote();

  const openNote = useOpenNote();
  const clearOpenNote = useClearOpenNote();

  const editor = useEditor();
  const clearEditor = useClearEditor();

  if (!editor) return null;

  editor.on("update", ({ editor }) => setIsEmpty(!editor.state.doc.textContent.length));

  function handleSave() {
    const content = editor?.getJSON();
    if (!content || !editor) return;

    if (openNote) {
      updateNote({ id: openNote.id, content });
      clearOpenNote();
    } else {
      const newNote = createNote({ content, title });
      addNote(newNote);
    }

    clearEditor();
    setIsEditing(false);
    setTitle(DEFAULT_NOTE_NAME);
  }

  function handleTitleEdit(value: string) {
    if (openNote) updateNote({ id: openNote.id, title: value });
    setTitle(value);
  }

  return (
    <div className="bg-secondary flex items-center justify-between px-12">
      {!isEmpty && (
        <>
          <div className="flex items-center gap-4">
            {isEditing ? (
              <>
                <Button onClick={() => setIsEditing(false)} variant="outline" size="icon">
                  <Save />
                </Button>
                <Input value={openNote?.title || title} onChange={(e) => handleTitleEdit(e.target.value)} />
              </>
            ) : (
              <>
                <Button onClick={() => setIsEditing(true)} variant="outline" size="icon">
                  <Pen />
                </Button>
                <h1 className="text-xl">{openNote?.title || title}</h1>
              </>
            )}
          </div>
          <Button onClick={handleSave}>Save</Button>
        </>
      )}
    </div>
  );
}

export { ContentHeading };
