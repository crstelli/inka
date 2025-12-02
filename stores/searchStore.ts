import { create } from "zustand";

interface SearchState {
  search: string;

  page: number;
  minPage: number;
  maxPage: number;

  setSearch: (query: string) => void;

  pageNext: () => void;
  pagePrev: () => void;
  pageReset: () => void;
}

const useSearchStore = create<SearchState>((set) => ({
  search: "",

  page: 1,
  minPage: 1,
  maxPage: 3, // Placeholder

  setSearch: (query) => set(() => ({ search: query })),

  pageNext: () => set((state) => ({ page: state.page + 1 })),
  pagePrev: () => set((state) => ({ page: state.page - 1 })),
  pageReset: () => set((state) => ({ page: state.minPage })),
}));

export const useSearch = () => useSearchStore((state) => state.search);
export const useSetSearch = () => useSearchStore((state) => state.setSearch);

export const usePage = () => useSearchStore((state) => state.page);
export const useMinPage = () => useSearchStore((state) => state.minPage);
export const useMaxPage = () => useSearchStore((state) => state.maxPage);
export const useResetPage = () => useSearchStore((state) => state.pageReset);

export const usePageNext = () => useSearchStore((state) => state.pageNext);
export const usePagePrev = () => useSearchStore((state) => state.pagePrev);
