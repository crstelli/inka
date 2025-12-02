"use client";

import { useCallback, useEffect, useState } from "react";

import { createNote } from "@/lib/createNote";

import { useEditor } from "@/stores/editorStore";
import { useAddNote, useOpenNote, useSetOpenNote, useUpdateNote } from "@/stores/notesStore";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Pen, Save } from "lucide-react";
import { DEFAULT_NOTE_NAME } from "@/lib/constants";
import { debounce } from "@/lib/debounce";

function ContentHeading() {
  const [title, setTitle] = useState(DEFAULT_NOTE_NAME);
  const [isEditing, setIsEditing] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const addNote = useAddNote();
  const updateNote = useUpdateNote();

  const openNote = useOpenNote();
  const setOpenNote = useSetOpenNote();

  const editor = useEditor();

  const handleSave = useCallback(() => {
    const content = editor?.getJSON();
    if (!content || !editor) return;

    if (openNote) {
      updateNote({ id: openNote.id, content });
    } else {
      const newNote = createNote({ content, title });
      addNote(newNote);
      setOpenNote(newNote.id);
    }
  }, [addNote, editor, openNote, setOpenNote, title, updateNote]);

  const debounceSave = debounce(handleSave, 500);

  function handleTitleEdit(value: string) {
    if (openNote) updateNote({ id: openNote.id, title: value });
    setTitle(value);
  }

  useEffect(() => {
    if (!editor) return;

    const cb = () => {
      setIsEmpty(!editor.state.doc.textContent.length);
      debounceSave();
    };
    editor.on("update", cb);

    return () => {
      editor.off("update", cb);
    };
  }, [debounceSave, editor]);

  if (!editor) return null;

  return (
    <div className="bg-secondary flex items-center justify-between px-12">
      {!isEmpty && (
        <div className="flex items-center gap-4">
          {isEditing ? (
            <>
              <Button onClick={() => setIsEditing(false)} variant="ghost" size="icon">
                <Save />
              </Button>
              <Input value={openNote?.title || title} onChange={(e) => handleTitleEdit(e.target.value)} />
            </>
          ) : (
            <>
              <Button onClick={() => setIsEditing(true)} variant="ghost" size="icon">
                <Pen />
              </Button>
              <h1 className="text-xl">{openNote?.title || title}</h1>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export { ContentHeading };
