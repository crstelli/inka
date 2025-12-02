import { create } from "zustand";

interface SearchState {
  search: string;

  setSearch: (query: string) => void;
}

const useSearchStore = create<SearchState>((set) => ({
  search: "",
  setSearch: (query) => set(() => ({ search: query })),
}));

export const useSearch = () => useSearchStore((state) => state.search);
export const useSetSearch = () => useSearchStore((state) => state.setSearch);
