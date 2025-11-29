import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

function Search() {
  return (
    <div className="bg-secondary flex items-center px-4 gap-4">
      <SearchIcon className="text-foreground" />
      <Input name="Note Search Bar" className="border-none dark:bg-secondary" placeholder="Search all notes and tags" />
    </div>
  );
}

export { Search };
