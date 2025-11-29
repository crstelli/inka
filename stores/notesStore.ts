import type { Note } from "@/lib/noteType";
import { create } from "zustand";

interface NotesState {
  notes: Note[];
  currentNote: Note | undefined;

  addNote: (note: Note) => void;
  setCurrentNote: (note: Note) => void;
}

export const useNotes = create<NotesState>((set) => ({
  notes: [],
  currentNote: undefined,

  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  setCurrentNote: (note) => set(() => ({ currentNote: note })),
}));
