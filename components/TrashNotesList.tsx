import { TrashNote } from "@/components/TrashNote";
import { getNotes } from "@/lib/getNotes";

async function TrashNotesList() {
  const trashNotes = await getNotes({ trash: true });

  return (
    <div className="mt-20 flex gap-4 flex-col w-full max-w-[500px]">
      {trashNotes.length > 0 ? (
        trashNotes.map((n) => <TrashNote note={n} key={n.id} />)
      ) : (
        <p className="text-center">The trash is empty.</p>
      )}
    </div>
  );
}

export { TrashNotesList };
