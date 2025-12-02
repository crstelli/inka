import { create } from "zustand";

interface SearchState {
  search: string;
  page: number;

  setSearch: (query: string) => void;
  pageNext: () => void;
  pagePrev: () => void;
}

const useSearchStore = create<SearchState>((set) => ({
  search: "",
  page: 1,

  setSearch: (query) => set(() => ({ search: query })),

  pageNext: () => set((state) => ({ page: state.page + 1 })),
  pagePrev: () => set((state) => ({ page: state.page - 1 })),
}));

export const useSearch = () => useSearchStore((state) => state.search);
export const useSetSearch = () => useSearchStore((state) => state.setSearch);

export const usePage = () => useSearchStore((state) => state.page);
export const usePageNext = () => useSearchStore((state) => state.pageNext);
export const usePagePrev = () => useSearchStore((state) => state.pagePrev);
