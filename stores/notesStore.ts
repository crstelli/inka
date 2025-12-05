import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { Note } from "@/lib/types/noteType";
import type { JSONContent } from "@tiptap/react";
import { debounce } from "@/lib/utils/debounce";

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
  trashNotes: Note[];

  isSaving: boolean;
  openNote: number | undefined;

  getNote: (id: number | undefined) => Note | undefined;

  loadNotes: () => void;

  addNote: (note: Note) => void;
  deleteNote: (id: number) => void;
  updateNote: ({ id, content, title, description }: UpdateNoteParams) => void;

  setOpenNote: (id: number) => void;
  clearOpenNote: () => void;

  setSavingStatus: (status: boolean) => void;
}

const useNotesStore = create(
  immer<NotesState>((set, get) => {
    const saveStateDebounced = debounce(() => {
      const state = get().notes;
      localStorage.setItem("notes", JSON.stringify(state));
    }, 500);

    return {
      notes: [],
      trashNotes: [],

      isSaving: false,
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
          saveStateDebounced();
        }),

      deleteNote: (id) =>
        set((state) => {
          const note = state.getNote(id);
          if (!note) return;

          state.notes = state.notes.filter((n) => n.id !== id);
          state.trashNotes.push(note);

          saveStateDebounced();
        }),

      updateNote: ({ id, content, title, description }) =>
        set((state) => {
          const editedNote = state.notes.find((n) => n.id === id);
          if (!editedNote) return;

          if (content) editedNote.content = content;
          if (title) editedNote.title = title;
          if (description) editedNote.description = description;

          saveStateDebounced();
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

      // Saving settings.
      setSavingStatus: (status) =>
        set((state) => {
          state.isSaving = status;
        }),
    };
  })
);

export const useNotes = () => useNotesStore((state) => state.notes);
export const useTrashNotes = () => useNotesStore((state) => state.trashNotes);

export const useLoadNotes = () => useNotesStore((state) => state.loadNotes);
export const useAddNote = () => useNotesStore((state) => state.addNote);
export const useDeleteNote = () => useNotesStore((state) => state.deleteNote);
export const useUpdateNote = () => useNotesStore((state) => state.updateNote);

export const useOpenNote = () => useNotesStore((state) => state.getNote(state.openNote));
export const useOpenNoteId = () => useNotesStore((state) => state.openNote);
export const useSetOpenNote = () => useNotesStore((state) => state.setOpenNote);
export const useClearOpenNote = () => useNotesStore((state) => state.clearOpenNote);

export const useIsSaving = () => useNotesStore((state) => state.isSaving);
export const useSetSavingStatus = () => useNotesStore((state) => state.setSavingStatus);
