import type { Note } from "@/lib/noteType";

interface Props {
  note: Note;
}

function Note({ note }: Props) {
  return (
    <div className="bg-secondary h-25 rounded-md p-3">
      <h3 className="font-medium">Welcome to Inka</h3>
      <span className="text-muted-foreground">
        Inka is a note taking app with a modern design and responsive interface com...
      </span>
    </div>
  );
}

export { Note };
