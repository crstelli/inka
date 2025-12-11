import { getNotes } from "@/lib/prisma/getNotes";
import { TrashNote } from "@/components/TrashNote";

async function TrashNotesList() {
  const trashNotes = await getNotes({ trash: true });

  return (
    <div className="mt-10 flex gap-4 flex-col">
      {trashNotes.length > 0 ? (
        trashNotes.map((n) => <TrashNote note={n} key={n.id} />)
      ) : (
        <p className="text-secondary">The trash is empty.</p>
      )}
    </div>
  );
}

export { TrashNotesList };
