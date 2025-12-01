"use client";

import { useEffect, useState } from "react";

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

  const editor = useEditor();
  const clearEditor = useClearEditor();

  useEffect(() => {
    if (!editor) return;

    const cb = () => setIsEmpty(!editor.state.doc.textContent.length);
    editor.on("update", cb);

    return () => {
      editor.off("update", cb);
    };
  }, [editor]);

  if (!editor) return null;

  function handleSave() {
    const content = editor?.getJSON();
    if (!content || !editor) return;

    if (openNote) {
      updateNote({ id: openNote.id, content });
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
