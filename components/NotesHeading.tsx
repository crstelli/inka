"use client";

import { useToggleSidebar } from "@/stores/menusStore";

import { Button } from "@/components/ui/button";
import { Menu, SquarePen } from "lucide-react";
import { useSetOpenNote } from "@/stores/openNoteStore";

interface Props {
  count: number;
}

function NotesHeading({ count }: Props) {
  const toggleSidebar = useToggleSidebar();
  const setOpenNote = useSetOpenNote();

  return (
    <div className="flex justify-between items-center px-4 [grid-area:notesHeading]">
      <Button onClick={toggleSidebar} size="icon" variant="secondary">
        <Menu />
      </Button>
      <span className="font-semibold">All Notes ({count})</span>
      <Button onClick={() => setOpenNote("")} size="icon" variant="secondary">
        <SquarePen />
      </Button>
    </div>
  );
}

export { NotesHeading };
