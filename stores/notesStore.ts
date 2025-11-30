import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { Note } from "@/lib/noteType";
import type { JSONContent } from "@tiptap/react";
import { createNote } from "@/lib/createNote";

interface UpdateNoteParams {
  id: number;

  content?: JSONContent;
  title?: string;
}

interface NotesState {
  notes: Note[];
  currentNote: Note;

  addNote: (note: Note) => void;
  updateNote: ({ id, content, title }: UpdateNoteParams) => void;

  setCurrentNote: (note: Note) => void;
  clearCurrentNote: () => void;
}

const useNotesStore = create(
  immer<NotesState>((set) => ({
    notes: [],
    currentNote: createNote({ content: {} }),

    // Notes state managment.
    addNote: (note) =>
      set((state) => {
        state.notes.push(note);
      }),

    updateNote: ({ id, content, title }) =>
      set((state) => {
        const editedNote = state.notes.find((n) => n.id === id);
        console.log(editedNote);

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
        state.currentNote = createNote({ content: {} });
      }),
  }))
);

export const useNotes = () => useNotesStore((state) => state.notes);
export const useAddNote = () => useNotesStore((state) => state.addNote);
export const useUpdateNote = () => useNotesStore((state) => state.updateNote);

export const useCurrentNote = () => useNotesStore((state) => state.currentNote);
export const useSetCurrentNote = () => useNotesStore((state) => state.setCurrentNote);
export const useClearCurrentNote = () => useNotesStore((state) => state.clearCurrentNote);
