"use client";

import { useToggleNotesList, useToggleSidebar } from "@/stores/menusStore";
import { useClearOpenNote } from "@/stores/openNoteStore";

import { Button } from "@/components/ui/button";
import { Menu, SquarePen, X } from "lucide-react";

interface Props {
  count: number;
  isSide: boolean;
}

function NotesHeading({ count, isSide }: Props) {
  const toggleSidebar = useToggleSidebar();
  const toggleNotesList = useToggleNotesList();

  const clearOpenNote = useClearOpenNote();

  return (
    <div className="flex justify-between items-center px-4">
      {isSide ? (
        <Button onClick={toggleNotesList} size="icon" variant="secondary">
          <X />
        </Button>
      ) : (
        <Button onClick={toggleSidebar} size="icon" variant="secondary">
          <Menu />
        </Button>
      )}
      <span className="font-semibold">All Notes ({count})</span>
      <Button onClick={clearOpenNote} size="icon" variant="secondary">
        <SquarePen />
      </Button>
    </div>
  );
}

export { NotesHeading };
