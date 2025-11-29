import type { Note } from "@/lib/noteType";

interface Props {
  note: Note;
}

function Note({ note }: Props) {
  return (
    <div className="bg-secondary h-25 rounded-md p-3 flex flex-col">
      <h3 className="font-medium">{note.title}</h3>
      <span className="text-muted-foreground">{note.description || "No description provided"}</span>
    </div>
  );
}

export { Note };
