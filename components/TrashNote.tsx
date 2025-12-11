"use client";

// prettier-ignore
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { useState } from "react";
import type { NoteInfo } from "@/lib/types/NoteInfo";

import { NoteDeleteDialog } from "@/components/NoteDeleteDialog";
import { NoteRestoreDialog } from "@/components/NoteRestoreDialog";
import { Button } from "@/components/ui/button";

import { EllipsisVertical, RotateCcw, Trash } from "lucide-react";

interface Props {
  note: NoteInfo;
}

function TrashNote({ note }: Props) {
  const [openDialog, setOpenDialog] = useState<null | "delete" | "restore">(null);
  const closeDialog = () => setOpenDialog(null);

  return (
    <>
      <DropdownMenu>
        <div className="h-25 group rounded-md p-3 border flex flex-col cursor-pointer bg-accent border-transparent max-w-[400px] mx-auto w-full">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{note.title}</h3>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{note.title}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => setOpenDialog("restore")}>
                  <RotateCcw />
                  Restore
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive" onClick={() => setOpenDialog("delete")}>
                  <Trash />
                  Remove
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </div>
          <span className="text-muted-foreground text-left">{note.description || "No description provided"}</span>
        </div>
      </DropdownMenu>
      {openDialog === "restore" && <NoteRestoreDialog closeDialog={closeDialog} id={note.id} />}
      {openDialog === "delete" && <NoteDeleteDialog closeDialog={closeDialog} id={note.id} />}
    </>
  );
}

export { TrashNote };
