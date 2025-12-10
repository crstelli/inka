// prettier-ignore
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import Form from "next/form";
import { useFormStatus } from "react-dom";
import { updateNote } from "@/actions/notes/updateNote";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  id: string;
  title: string;
  description: string | null;
}

function NoteEditing({ id, title, description = "" }: Props) {
  function handleSubmit(data: FormData) {
    const title = data.get("title") as string;
    const description = data.get("description") as string;

    if (!title) return;

    updateNote({ noteId: id, title, description });
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit note</DialogTitle>
        <DialogDescription>Make some changes here, click save when you&apos;re done.</DialogDescription>
      </DialogHeader>
      <Form className="grid gap-4" action={handleSubmit}>
        <div className="grid gap-3">
          <Label htmlFor="note-title">Title</Label>
          <Input id="note-title" name="title" defaultValue={title} />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="note-description">Description</Label>
          <Input id="note-description" name="description" defaultValue={description || ""} />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Submit />
          </DialogClose>
        </DialogFooter>
      </Form>
    </DialogContent>
  );
}

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "..." : "Done"}
    </Button>
  );
}

export { NoteEditing };
