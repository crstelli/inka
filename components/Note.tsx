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
// import type { Note as NoteType } from "@/lib/types/noteType";
// import { useClearOpenNote, useTrashNote, useOpenNoteId, useUpdateNote } from "@/stores/notesStore";
import { Edit, EllipsisVertical, Trash } from "lucide-react";
import { useSetOpenNote, useOpenNote } from "@/stores/openNoteStore";
import type { NoteInfo } from "@/lib/types/NoteInfo";
import { useState } from "react";
import { updateNote } from "@/actions/notes/updateNote";

interface Props {
  note: NoteInfo;
}

// interface EditParams {
//   title?: string;
//   description?: string;
// }

function Note({ note }: Props) {
  const openNote = useOpenNote();
  const setOpenNote = useSetOpenNote();

  const handleOpenNote = () => (isOpen ? setOpenNote("") : setOpenNote(note.id));
  const isOpen = openNote === note.id;

  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  function handleSubmit() {
    updateNote({ noteId: note.id, title, description });

    setTitle("");
    setDescription("");
  }
  // const trashNote = useTrashNote();
  // const updateNote = useUpdateNote();

  // const openNoteId = useOpenNoteId();
  // const setOpenNote = useSetOpenNote();
  // const clearOpenNote = useClearOpenNote();

  // function handleTrashNote() {
  //   clearOpenNote();
  //   trashNote(note.id);
  // }

  // function handleUpdateNote({ title, description }: EditParams) {
  //   updateNote({ id: note.id, title, description });
  // }

  return (
    <AlertDialog>
      <Dialog>
        <DropdownMenu>
          <div
            onClick={handleOpenNote}
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
            </div>
            <span className="text-muted-foreground">{note.description || null}</span>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit note</DialogTitle>
                <DialogDescription>Make some changes here, click save when you&apos;re done.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="note-title">Title</Label>
                  <Input id="note-title" name="noteTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="note-description">Description</Label>
                  <Input
                    id="note-description"
                    name="noteDescription"
                    value={description || ""}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button onClick={handleSubmit}>Done</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </div>
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
