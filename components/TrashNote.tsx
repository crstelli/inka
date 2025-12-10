"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { NoteInfo } from "@/lib/types/NoteInfo";
import { useDeleteNote, useRestoreNote } from "@/stores/notesStore";
import { EllipsisVertical, RotateCcw, Trash } from "lucide-react";
import { useState } from "react";

interface Props {
  note: NoteInfo;
}

function TrashNote({ note }: Props) {
  const [openDialog, setOpenDialog] = useState<null | "delete" | "restore">(null);

  const restoreNote = useRestoreNote();
  const deleteNote = useDeleteNote();

  function handleDelete() {
    // deleteNote(note.id);
    // setOpenDialog(null);
  }

  function handleRestore() {
    // restoreNote(note);
    // setOpenDialog(null);
  }

  return (
    <>
      <DropdownMenu>
        <div className="h-25 group rounded-md p-3 border flex flex-col cursor-pointer bg-accent border-transparent">
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
          <span className="text-muted-foreground">{note.description || "No description provided"}</span>
        </div>
      </DropdownMenu>
      <Dialog open={openDialog === "restore"}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Restore note</DialogTitle>
            <DialogDescription>Restore your note and add it back to all notes.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild onClick={() => setOpenDialog(null)}>
              <Button variant={"secondary"}>Cancel</Button>
            </DialogClose>
            <DialogClose asChild onClick={() => handleRestore()}>
              <Button>Restore</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={openDialog === "delete"}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Note</AlertDialogTitle>
            <AlertDialogDescription>Do you want to permanently delete this note?</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild onClick={() => setOpenDialog(null)}>
              <Button variant="secondary">Cancel</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild onClick={() => handleDelete()}>
              <Button variant="destructive">Delete</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export { TrashNote };
