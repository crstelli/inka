import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { Note } from "@/lib/noteType";
import type { JSONContent } from "@tiptap/react";

interface UpdateNoteParams {
  id: number;

  content?: JSONContent;
  title?: string;
}

interface NotesState {
  notes: Note[];
  currentNote: Note | undefined;

  addNote: (note: Note) => void;
  updateNote: ({ id, content, title }: UpdateNoteParams) => void;

  setCurrentNote: (note: Note) => void;
  clearCurrentNote: () => void;
}

export const useNotes = create(
  immer<NotesState>((set) => ({
    notes: [],
    currentNote: undefined,

    // Notes state managment.
    addNote: (note) =>
      set((state) => {
        state.notes.push(note);
      }),

    updateNote: ({ id, content, title }) =>
      set((state) => {
        const editedNote = state.notes.find((n) => n.id === id);

        if (editedNote && content) editedNote.content = content;
        if (editedNote && title) editedNote.title = title;
      }),

    // Current note state managment.
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
