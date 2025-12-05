import { TrashNotesList } from "@/components/TrashNotesList";

export default function page() {
  return (
    <section className="flex flex-col items-center py-20 w-[50%] mx-auto">
      <h1 className="text-2xl font-bold text-primary">Trash</h1>
      <h2 className="text-lg text-secondary font-light">View and restore your deleted notes.</h2>
      <TrashNotesList />
    </section>
  );
}
