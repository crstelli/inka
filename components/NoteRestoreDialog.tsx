// prettier-ignore
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { setNoteTrash } from "@/actions/notes/setNoteTrash";

interface Props {
  id: string;
  closeDialog: () => void;
}

function NoteRestoreDialog({ id, closeDialog }: Props) {
  function handleRestore() {
    setNoteTrash(id, false);
  }

  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Restore note</DialogTitle>
          <DialogDescription>Restore your note and add it back to all notes.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={closeDialog} variant={"secondary"}>
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={() => handleRestore()}>Restore</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { NoteRestoreDialog };
