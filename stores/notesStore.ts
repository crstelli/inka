import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { Note } from "@/lib/noteType";
import type { JSONContent } from "@tiptap/react";

interface UpdateOpenNoteParams {
  content?: JSONContent;
  title?: string;
  description?: string;
}

interface UpdateNoteParams extends UpdateOpenNoteParams {
  id: number;
}

interface NotesState {
  notes: Note[];
  openNote: number | undefined;

  getNote: (id: number | undefined) => Note | undefined;

  loadNotes: () => void;
  addNote: (note: Note) => void;
  deleteNote: (id: number) => void;
  updateNote: ({ id, content, title, description }: UpdateNoteParams) => void;

  setOpenNote: (id: number) => void;
  clearOpenNote: () => void;
}

const useNotesStore = create(
  immer<NotesState>((set, get) => ({
    notes: [],
    openNote: undefined,

    // Notes state managment.
    getNote: (id) => get().notes.find((n) => n.id === id),

    loadNotes: () => {
      const raw = localStorage.getItem("notes");
      if (!raw) return;

      try {
        const data = JSON.parse(raw);
        set({ notes: data });
      } catch {}
    },

    addNote: (note) =>
      set((state) => {
        state.notes.push(note);
      }),

    deleteNote: (id) =>
      set((state) => {
        state.notes = state.notes.filter((n) => n.id !== id);
      }),

    updateNote: ({ id, content, title, description }) =>
      set((state) => {
        const editedNote = state.notes.find((n) => n.id === id);
        if (!editedNote) return;

        if (content) editedNote.content = content;
        if (title) editedNote.title = title;
        if (description) editedNote.description = description;
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

export const useLoadNotes = () => useNotesStore((state) => state.loadNotes);
export const useAddNote = () => useNotesStore((state) => state.addNote);
export const useDeleteNote = () => useNotesStore((state) => state.deleteNote);
export const useUpdateNote = () => useNotesStore((state) => state.updateNote);

export const useOpenNote = () => useNotesStore((state) => state.getNote(state.openNote));
export const useSetOpenNote = () => useNotesStore((state) => state.setOpenNote);
export const useClearOpenNote = () => useNotesStore((state) => state.clearOpenNote);
