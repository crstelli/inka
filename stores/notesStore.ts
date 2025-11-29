import { Note } from "@/lib/noteType";
import { create } from "zustand";

interface NotesState {
  notes: Note[];
  currentNote: Note | undefined;

  addNote: (note: Note) => void;
  setCurrentNote: (note: Note) => void;
}

export const useNotes = create<NotesState>((set) => ({
  notes: <Note[]>[],
  currentNote: undefined,

  addNote: (note: Note) => set((state) => ({ notes: [...state.notes, note] })),
  setCurrentNote: (note: Note) => set(() => ({ currentNote: note })),
}));
