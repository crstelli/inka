import { create } from "zustand";

interface StoreType {
  sidebar: boolean;
  toggleSidebar: () => void;
}

const useMenusStore = create<StoreType>((set) => ({
  sidebar: true,
  toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
}));

export const useSidebar = () => useMenusStore((state) => state.sidebar);
export const useToggleSidebar = () => useMenusStore((state) => state.toggleSidebar);
