import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { Note } from "@/lib/noteType";
import type { JSONContent } from "@tiptap/react";

interface NotesState {
  notes: Note[];
  currentNote: Note | undefined;

  addNote: (note: Note) => void;
  updateNote: (id: number, content: JSONContent) => void;

  setCurrentNote: (note: Note) => void;
  clearCurrentNote: () => void;
}

export const useNotes = create(
  immer<NotesState>((set) => ({
    notes: [],
    currentNote: undefined,

    addNote: (note) =>
      set((state) => {
        state.notes.push(note);
      }),
    updateNote: (id, content) =>
      set((state) => {
        const editedNote = state.notes.find((n) => n.id === id);

        if (editedNote) editedNote.content = content;
      }),

    setCurrentNote: (note) =>
      set((state) => {
        state.currentNote = note;
      }),
    clearCurrentNote: () =>
      set((state) => {
        state.currentNote = undefined;
      }),
  }))
);
