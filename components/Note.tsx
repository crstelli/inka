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
  AlertDialogTrigger,
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
  DialogTrigger,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Note } from "@/lib/noteType";
import { useDeleteNote, useOpenNote, useSetOpenNote, useUpdateNote } from "@/stores/notesStore";
import { Edit, EllipsisVertical, Trash } from "lucide-react";

interface Props {
  note: Note;
}

interface EditParams {
  title?: string;
  description?: string;
}

function Note({ note }: Props) {
  const deleteNote = useDeleteNote();
  const updateNote = useUpdateNote();

  const openNote = useOpenNote();
  const setOpenNote = useSetOpenNote();

  const isActive = openNote?.id === note.id;

  function handleDeleteNote() {
    deleteNote(note.id);
  }

  function handleOpenNote() {
    setOpenNote(note.id);
  }

  function handleUpdateNote({ title, description }: EditParams) {
    updateNote({ id: note.id, title, description });
  }

  return (
    <div
      onClick={handleOpenNote}
      className={`h-25 group rounded-md p-3 border flex flex-col cursor-pointer ${
        isActive ? "bg-background" : "bg-secondary border-transparent"
      }`}
    >
      <AlertDialog>
        <Dialog>
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{note.title}</h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon-sm">
                  <EllipsisVertical />
                </Button>
              </DropdownMenuTrigger>
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
          </div>
          <span className="text-muted-foreground">{note.description || "No description provided"}</span>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit note</DialogTitle>
              <DialogDescription>Make some changes here, click save when you&apos;re done.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="note-title">Title</Label>
                <Input
                  id="note-title"
                  name="noteTitle"
                  value={note.title}
                  onChange={(e) => handleUpdateNote({ title: e.target.value })}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="note-description">Description</Label>
                <Input
                  id="note-description"
                  name="noteDescription"
                  value={note.description}
                  onChange={(e) => handleUpdateNote({ description: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button>Save changes</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>Do you want to delete the note?</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button variant="destructive" onClick={handleDeleteNote}>
                <Trash />
                Delete
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export { Note };
