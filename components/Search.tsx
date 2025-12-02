"use client";

import { useSearch, useSetSearch } from "@/stores/searchStore";

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

function Search() {
  const search = useSearch();
  const setSerach = useSetSearch();

  return (
    <div className="bg-secondary flex items-center px-4 gap-4">
      <SearchIcon className="text-foreground" />
      <Input
        value={search}
        onChange={(e) => setSerach(e.target.value)}
        name="Note Search Bar"
        className="border-none dark:bg-secondary"
        placeholder="Search all notes and tags"
      />
    </div>
  );
}

export { Search };
