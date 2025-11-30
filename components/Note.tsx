"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Note } from "@/lib/noteType";
import { useOpenNote, useSetOpenNote } from "@/stores/notesStore";
import { Edit, EllipsisVertical, Heading, Trash } from "lucide-react";

interface Props {
  note: Note;
}

function Note({ note }: Props) {
  const openNote = useOpenNote();
  const setopenNote = useSetOpenNote();

  const isActive = openNote?.id === note.id;

  function handleSetNote() {
    setopenNote(note.id);
  }

  return (
    <div
      onClick={handleSetNote}
      className={`h-25 group rounded-md p-3 border flex flex-col cursor-pointer ${
        isActive ? "bg-background" : "bg-secondary border-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{note.title}</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon-sm">
              <EllipsisVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Note Option</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Heading />
                Edit Title
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit />
                Edit Description
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <Trash />
                Delete
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <span className="text-muted-foreground">{note.description || "No description provided"}</span>
    </div>
  );
}

export { Note };
