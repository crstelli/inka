"use client";

import type { ReactNode } from "react";
import type { JSONContent } from "@tiptap/react";

import { createContext, useContext, useState } from "react";
import { Note } from "@/lib/noteType";

interface Props {
  children: ReactNode;
}

interface ContextProps {
  notes: Note[];
  addNote: (content: JSONContent) => void;
}

const NotesContext = createContext<null | ContextProps>(null);

function NotesProvider({ children }: Props) {
  const [notes, setNotes] = useState<Note[]>([]);

  function addNote(content: JSONContent) {
    const note = {
      id: Date.now(),
      created_at: new Date(Date.now()).toISOString(),

      title: "New Note",

      content,
    };

    setNotes((n) => [...n, note]);
  }

  return <NotesContext.Provider value={{ notes, addNote }}>{children}</NotesContext.Provider>;
}

function useNotes() {
  const context = useContext(NotesContext);

  if (!context) throw new Error("You cannot access NotesContext outside his provider.");
  return context;
}

export { NotesProvider, useNotes };
