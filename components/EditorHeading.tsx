"use client";

import { useState } from "react";
import { useOpenNote, useUpdateNote } from "@/stores/notesStore";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Pen, Save } from "lucide-react";

function EditorHeading() {
  const [isEditing, setIsEditing] = useState(false);

  const openNote = useOpenNote();
  const updateNote = useUpdateNote();

  function handleTitleEdit(value: string) {
    if (openNote) updateNote({ id: openNote.id, title: value });
  }

  return (
    <div className="bg-accent flex items-center justify-between px-12 [grid-area:editorHeading]">
      {openNote && (
        <div className="flex items-center gap-4">
          {isEditing ? (
            <>
              <Button onClick={() => setIsEditing(false)} variant="ghost" size="icon">
                <Save />
              </Button>
              <Input value={openNote?.title} onChange={(e) => handleTitleEdit(e.target.value)} />
            </>
          ) : (
            <>
              <Button onClick={() => setIsEditing(true)} variant="ghost" size="icon">
                <Pen />
              </Button>
              <h1 className="text-xl">{openNote?.title}</h1>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export { EditorHeading };
