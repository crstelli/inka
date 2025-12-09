"use client";

import { useToggleSidebar } from "@/stores/menusStore";
import { useClearOpenNote } from "@/stores/openNoteStore";

import { Button } from "@/components/ui/button";
import { Menu, SquarePen } from "lucide-react";

interface Props {
  count: number;
}

function NotesHeading({ count }: Props) {
  const toggleSidebar = useToggleSidebar();
  const clearOpenNote = useClearOpenNote();

  return (
    <div className="flex justify-between items-center px-4 [grid-area:notesHeading]">
      <Button onClick={toggleSidebar} size="icon" variant="secondary">
        <Menu />
      </Button>
      <span className="font-semibold">All Notes ({count})</span>
      <Button onClick={clearOpenNote} size="icon" variant="secondary">
        <SquarePen />
      </Button>
    </div>
  );
}

export { NotesHeading };
