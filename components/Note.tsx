"use client";

// prettier-ignore
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
// prettier-ignore
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// prettier-ignore
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import Form from "next/form";

import { useSetOpenNote, useOpenNote, useClearOpenNote } from "@/stores/openNoteStore";
import { updateNote } from "@/actions/notes/updateNote";
import type { NoteInfo } from "@/lib/types/NoteInfo";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

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

  function handleSubmit(data: FormData) {
    const title = data.get("title") as string;
    const description = data.get("description") as string;

    if (!title) return;

    updateNote({ noteId: note.id, title, description });
  }
  // const trashNote = useTrashNote();
  // const updateNote = useUpdateNote();

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
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit note</DialogTitle>
              <DialogDescription>Make some changes here, click save when you&apos;re done.</DialogDescription>
            </DialogHeader>
            <Form className="grid gap-4" action={handleSubmit}>
              <div className="grid gap-3">
                <Label htmlFor="note-title">Title</Label>
                <Input id="note-title" name="title" defaultValue={note.title} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="note-description">Description</Label>
                <Input id="note-description" name="description" defaultValue={note.description || ""} />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="submit">Done</Button>
                </DialogClose>
              </DialogFooter>
            </Form>
          </DialogContent>
        </DropdownMenu>
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
