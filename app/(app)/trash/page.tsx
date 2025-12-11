import { Section } from "@/components/Section";
import { TrashNotesList } from "@/components/TrashNotesList";

export default function page() {
  return (
    <Section>
      <h1 className="text-2xl font-bold text-primary">Notes Trash</h1>
      <h2 className="text-lg text-secondary font-light">View and restore your deleted notes.</h2>

      <TrashNotesList />
    </Section>
  );
}
