import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { Note } from "@/lib/noteType";
import type { JSONContent } from "@tiptap/react";

interface UpdateOpenNoteParams {
  content?: JSONContent;
  title?: string;
}

interface UpdateNoteParams extends UpdateOpenNoteParams {
  id: number;
}

interface NotesState {
  notes: Note[];
  openNote: number | undefined;

  getNote: (id: number | undefined) => Note | undefined;
  addNote: (note: Note) => void;
  updateNote: ({ id, content, title }: UpdateNoteParams) => void;

  setOpenNote: (id: number) => void;
  clearOpenNote: () => void;
}

const useNotesStore = create(
  immer<NotesState>((set, get) => ({
    notes: [],
    openNote: undefined,

    // Notes state managment.
    getNote: (id) => get().notes.find((n) => n.id === id),

    addNote: (note) =>
      set((state) => {
        state.notes.push(note);
      }),

    updateNote: ({ id, content, title }) =>
      set((state) => {
        const editedNote = state.notes.find((n) => n.id === id);
        if (!editedNote) return;

        if (title) editedNote.title = title;
        if (content) editedNote.content = content;
      }),

    // Open note state managment.
    setOpenNote: (id) =>
      set((state) => {
        state.openNote = id;
      }),

    clearOpenNote: () =>
      set((state) => {
        state.openNote = undefined;
      }),
  }))
);

export const useNotes = () => useNotesStore((state) => state.notes);
export const useAddNote = () => useNotesStore((state) => state.addNote);
export const useUpdateNote = () => useNotesStore((state) => state.updateNote);

export const useOpenNote = () => useNotesStore((state) => state.getNote(state.openNote));
export const useSetOpenNote = () => useNotesStore((state) => state.setOpenNote);
export const useClearOpenNote = () => useNotesStore((state) => state.clearOpenNote);
