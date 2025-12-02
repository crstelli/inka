import { create } from "zustand";

interface StoreType {
  globalSidebar: boolean;
  openGlobalSidebar: () => void;
  closeGlobalSidebar: () => void;
}

const useMenusStore = create<StoreType>((set) => ({
  globalSidebar: true,
  openGlobalSidebar: () => () => ({ globalSidebar: true }),
  closeGlobalSidebar: () => () => ({ globalSidebar: false }),
}));

export const useGlobalSidebar = () => useMenusStore((state) => state.globalSidebar);
export const useOpenGlobalSidebar = () => useMenusStore((state) => state.openGlobalSidebar);
export const useCloseGlobalSidebar = () => useMenusStore((state) => state.closeGlobalSidebar);
