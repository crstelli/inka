import { TrashNotesList } from "@/components/TrashNotesList";

export default function page() {
  return (
    <section className="flex flex-col py-10 w-[90%] mx-auto text-center">
      <h1 className="text-2xl font-bold text-primary">Notes Trash</h1>
      <h2 className="text-lg text-secondary font-light">View and restore your deleted notes.</h2>

      <TrashNotesList />
    </section>
  );
}
