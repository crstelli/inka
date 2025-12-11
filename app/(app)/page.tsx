import { NotesSection } from "@/components/NotesSection";
import { Heading } from "@/components/Heading";
import { EditorSection } from "@/components/EditorSection";

export default async function page() {
  return (
    <div className="grid grid-cols-[3fr_8fr] divide-solid divide-x divide-y grid-rows-[50px_50px_1fr_50px] layout">
      <NotesSection />
      <Heading />
      <EditorSection />
    </div>
  );
}
