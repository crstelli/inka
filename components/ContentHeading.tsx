"use client";

import { useState } from "react";

import { createNote } from "@/lib/createNote";

import { useClearEditor, useEditor } from "@/stores/editorStore";
import { useAddNote, useClearCurrentNote, useCurrentNote, useUpdateNote } from "@/stores/notesStore";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Pen, Save } from "lucide-react";
import { isEmptyObject } from "@/lib/isEmptyObject";

function ContentHeading() {
  const [isEditing, setIsEditing] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const addNote = useAddNote();
  const updateNote = useUpdateNote();

  const currentNote = useCurrentNote();
  const clearCurrentNote = useClearCurrentNote();

  const editor = useEditor();
  const clearEditor = useClearEditor();

  if (!editor) return null;

  editor.on("update", ({ editor }) => setIsEmpty(!editor.state.doc.textContent.length));

  function handleSave() {
    const content = editor?.getJSON();
    if (!content || !editor) return;

    if (!isEmptyObject(currentNote.content)) {
      updateNote({ id: currentNote.id, content });
      clearCurrentNote();
    } else {
      const newNote = createNote({ content });
      addNote(newNote);
    }

    clearEditor();
    setIsEditing(false);
  }

  return (
    <div className="bg-secondary flex items-center justify-between px-12">
      {!isEmpty && (
        <>
          <div className="flex items-center gap-4">
            {isEditing ? (
              <>
                <Button onClick={() => setIsEditing(false)} variant={"outline"} size="icon">
                  <Save />
                </Button>
                <Input
                  value={currentNote.title}
                  onChange={(e) => updateNote({ id: currentNote.id, title: e.target.value })}
                />
              </>
            ) : (
              <>
                <Button onClick={() => setIsEditing(true)} variant={"outline"} size="icon">
                  <Pen />
                </Button>
                <h1 className="text-xl">New Note</h1>
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
