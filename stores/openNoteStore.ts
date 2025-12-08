import { create } from "zustand";

interface SearchState {
  openNote: string;
  setOpenNote: (id: string) => void;
}

const useOpenNoteStore = create<SearchState>((set) => ({
  openNote: "",
  setOpenNote: (id) =>
    set(() => ({
      openNote: id,
    })),
}));

export const useOpenNote = () => useOpenNoteStore((state) => state.openNote);
export const useSetOpenNote = () => useOpenNoteStore((state) => state.setOpenNote);
