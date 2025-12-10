import { create } from "zustand";

interface StoreType {
  search: string;
  setSearch: (query: string) => void;

  page: number;
  minPage: number;
  maxPage: number;

  pageNext: () => void;
  pagePrev: () => void;
  resetPage: () => void;

  setMaxPage: (page: number) => void;
}

const useFilterStore = create<StoreType>((set) => ({
  search: "",

  page: 1,
  minPage: 1,
  maxPage: 1,

  setSearch: (query) => set(() => ({ search: query })),

  pageNext: () => set((state) => ({ page: state.page + 1 })),
  pagePrev: () => set((state) => ({ page: state.page - 1 })),
  resetPage: () => set((state) => ({ page: state.minPage })),

  setMaxPage: (page) => set(() => ({ maxPage: page })),
}));

export const useSearch = () => useFilterStore((state) => state.search);
export const useSetSearch = () => useFilterStore((state) => state.setSearch);

export const usePage = () => useFilterStore((state) => state.page);
export const useMinPage = () => useFilterStore((state) => state.minPage);
export const useMaxPage = () => useFilterStore((state) => state.maxPage);
export const useResetPage = () => useFilterStore((state) => state.resetPage);
export const useSetMaxPage = () => useFilterStore((state) => state.setMaxPage);

export const usePageNext = () => useFilterStore((state) => state.pageNext);
export const usePagePrev = () => useFilterStore((state) => state.pagePrev);
