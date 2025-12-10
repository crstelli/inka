"use client";

// prettier-ignore
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
// prettier-ignore
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { useSetOpenNote, useOpenNote, useClearOpenNote } from "@/stores/openNoteStore";
import type { NoteInfo } from "@/lib/types/NoteInfo";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { NoteEditing } from "@/components/NoteEditing";

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

  // const trashNote = useTrashNote();

  // function handleTrashNote() {
  //   clearOpenNote();
  //   trashNote(note.id);
  // }

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
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>Do you want to delete the note?</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="destructive" className="text-white">
              <Trash />
              Delete
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export { Note };
