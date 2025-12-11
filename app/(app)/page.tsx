import { NotesSection } from "@/components/NotesSection";
import { Heading } from "@/components/Heading";
import { EditorSection } from "@/components/EditorSection";

export default async function page() {
  return (
    <div className="grid grid-cols-[300px_1fr] grid-rows-[50px_1fr] divide-x">
      <NotesSection />
      <Heading />
      <EditorSection />
    </div>
  );
}
