"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Pen, Save } from "lucide-react";
import type { Note } from "@/lib/types/Note";
import { updateNote } from "@/actions/notes/updateNote";

interface Props {
  note: Note | null;
}

function EditorHeading({ note }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [typing, setTyping] = useState(note?.title);

  function handleSave() {
    setIsEditing(false);
    if (note) updateNote({ noteId: note.id, title: typing });
  }

  return (
    <div className="bg-accent flex items-center justify-between px-4 lg:px-12">
      {note && (
        <div className="flex items-center gap-4">
          {isEditing ? (
            <>
              <Button onClick={handleSave} variant="ghost" size="icon">
                <Save />
              </Button>
              <Input value={typing} onChange={(e) => setTyping(e.target.value)} />
            </>
          ) : (
            <>
              <Button onClick={() => setIsEditing(true)} variant="ghost" size="icon">
                <Pen />
              </Button>
              <h1 className="text-xl">{typing}</h1>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export { EditorHeading };
