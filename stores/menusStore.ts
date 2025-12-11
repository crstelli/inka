import { create } from "zustand";

interface StoreType {
  sidebar: boolean;
  toggleSidebar: () => void;

  notesList: boolean;
  toggleNoteList: () => void;
}

const useMenusStore = create<StoreType>((set) => ({
  sidebar: true,
  toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })),

  notesList: false,
  toggleNoteList: () => set((state) => ({ notesList: !state.notesList })),
}));

export const useSidebar = () => useMenusStore((state) => state.sidebar);
export const useToggleSidebar = () => useMenusStore((state) => state.toggleSidebar);

export const useNotesList = () => useMenusStore((state) => state.notesList);
export const useToggleNotesList = () => useMenusStore((state) => state.toggleNoteList);
