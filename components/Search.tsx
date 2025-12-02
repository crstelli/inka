"use client";

import type { ChangeEvent } from "react";
import { useResetPage, useSearch, useSetSearch } from "@/stores/searchStore";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

function Search() {
  const search = useSearch();

  const setSearch = useSetSearch();
  const resetPage = useResetPage();

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    resetPage();
  }

  return (
    <div className="bg-secondary flex items-center px-4 gap-4">
      <SearchIcon className="text-foreground" />
      <Input
        value={search}
        onChange={handleSearch}
        name="Note Search Bar"
        className="border-none dark:bg-secondary"
        placeholder="Search all notes and tags"
      />
    </div>
  );
}

export { Search };
