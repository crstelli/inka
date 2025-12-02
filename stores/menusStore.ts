import { create } from "zustand";

interface StoreType {
  globalSidebar: boolean;
  toggleGlobalSidebar: () => void;
}

const useMenusStore = create<StoreType>((set) => ({
  globalSidebar: true,
  toggleGlobalSidebar: () => set((state) => ({ globalSidebar: !state.globalSidebar })),
}));

export const useGlobalSidebar = () => useMenusStore((state) => state.globalSidebar);
export const useToggleGlobalSidebar = () => useMenusStore((state) => state.toggleGlobalSidebar);
