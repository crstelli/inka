import { useToggleGlobalSidebar } from "@/stores/menusStore";

import { Button } from "@/components/ui/button";
import { Menu, SquarePen } from "lucide-react";
import { useClearOpenNote } from "@/stores/notesStore";

function NotesHeading() {
  const toggleSidebar = useToggleGlobalSidebar();
  const clearOpenNote = useClearOpenNote();

  return (
    <div className="flex justify-between items-center px-4 [grid-area:notesHeading]">
      <Button onClick={toggleSidebar} size="icon" variant="secondary">
        <Menu />
      </Button>
      <span className="font-semibold">All Notes</span>
      <Button onClick={clearOpenNote} size="icon" variant="secondary">
        <SquarePen />
      </Button>
    </div>
  );
}

export { NotesHeading };
