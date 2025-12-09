import { create } from "zustand";

interface SearchState {
  openNote: string;
  savingStatus: boolean;

  setSavingStatus: (status: boolean) => void;
  setOpenNote: (id: string) => void;
}

const openNoteStore = create<SearchState>((set) => ({
  openNote: "",
  savingStatus: false,

  setSavingStatus: (status) => set(() => ({ savingStatus: status })),
  setOpenNote: (id) =>
    set(() => ({
      openNote: id,
    })),
}));

export const useOpenNote = () => openNoteStore((state) => state.openNote);
export const useSetOpenNote = () => openNoteStore((state) => state.setOpenNote);

export const useSavingStatus = () => openNoteStore((state) => state.savingStatus);
export const useSetSavingStatus = () => openNoteStore((state) => state.setSavingStatus);
