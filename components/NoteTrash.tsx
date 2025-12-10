// prettier-ignore
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

import { trashNote } from "@/actions/notes/trashNote";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

interface Props {
  id: string;
}

function NoteTrash({ id }: Props) {
  async function handleDelete() {
    await trashNote(id);
  }

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>Do you want to delete the note?</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button onClick={handleDelete} variant="destructive" className="text-white">
            <Trash />
            Delete
          </Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}

export { NoteTrash };
