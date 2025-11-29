"use client";

import { Note } from "@/lib/noteType";

import { createContext, useContext, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";

interface Props {
  children: ReactNode;
}

const NotesContext = createContext<null | { notes: Note[]; setNotes: Dispatch<SetStateAction<Note[]>> }>(null);

function NotesProvider({ children }: Props) {
  const [notes, setNotes] = useState<Note[]>([]);

  <NotesContext.Provider value={{ notes, setNotes }}>{children}</NotesContext.Provider>;
}

function useNotes() {
  const context = useContext(NotesContext);

  if (!context) throw new Error("You cannot access NotesContext outside his provider.");
  return context;
}

export { NotesProvider, useNotes };
