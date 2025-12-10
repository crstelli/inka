import { create } from "zustand";

interface SearchState {
  openNote: string;
  savingStatus: boolean;

  setSavingStatus: (status: boolean) => void;
  setOpenNote: (id: string) => void;
  clearOpenNote: () => void;
}

const openNoteStore = create<SearchState>((set) => ({
  openNote: "",
  savingStatus: false,

  setSavingStatus: (status) => set(() => ({ savingStatus: status })),
  setOpenNote: (id) =>
    set(() => ({
      openNote: id,
    })),
  clearOpenNote: () =>
    set(() => ({
      openNote: "",
    })),
}));

export const useOpenNote = () => openNoteStore((state) => state.openNote);
export const useSetOpenNote = () => openNoteStore((state) => state.setOpenNote);
export const useClearOpenNote = () => openNoteStore((state) => state.clearOpenNote);

export const useSavingStatus = () => openNoteStore((state) => state.savingStatus);
export const useSetSavingStatus = () => openNoteStore((state) => state.setSavingStatus);
