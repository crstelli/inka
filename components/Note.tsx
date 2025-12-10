"use client";

// prettier-ignore
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { useSetOpenNote, useOpenNote, useClearOpenNote } from "@/stores/openNoteStore";
import type { NoteInfo } from "@/lib/types/NoteInfo";

import { Button } from "@/components/ui/button";
import { NoteEditing } from "@/components/NoteEditing";
import { NoteTrash } from "@/components/NoteTrash";

import { Edit, EllipsisVertical, Trash } from "lucide-react";

interface Props {
  note: NoteInfo;
}

function Note({ note }: Props) {
  const openNote = useOpenNote();
  const setOpenNote = useSetOpenNote();
  const clearOpenNote = useClearOpenNote();

  const isOpen = openNote === note.id;
  const handleClick = () => (isOpen ? clearOpenNote() : setOpenNote(note.id));

  return (
    <AlertDialog>
      <Dialog>
        <DropdownMenu>
          <div
            onClick={handleClick}
            className={`h-25 group rounded-md p-3 border flex flex-col cursor-pointer ${
              isOpen ? "bg-background" : "bg-accent border-transparent"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-xl">{note.title}</h3>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon-sm">
                  <EllipsisVertical />
                </Button>
              </DropdownMenuTrigger>
            </div>
            <span className="text-muted-foreground">{note.description || null}</span>
          </div>
          <DropdownMenuContent>
            <DropdownMenuLabel>{note.title}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <DialogTrigger className="w-full">
                  <Edit />
                  Edit
                </DialogTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem asChild variant="destructive">
                <AlertDialogTrigger className="w-full">
                  <Trash />
                  Delete
                </AlertDialogTrigger>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <NoteEditing id={note.id} title={note.title} description={note.description} />
      </Dialog>
      <NoteTrash id={note.id} />
    </AlertDialog>
  );
}

export { Note };
