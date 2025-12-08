import { NotesMenu } from "@/components/NotesMenu";
import { Heading } from "@/components/Heading";
import { EditorSection } from "@/components/EditorSection";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { redirect, RedirectType } from "next/navigation";
import { loadNotes } from "@/actions/notes/loadNotes";
import { addNote } from "@/actions/notes/addNote";

export default async function page() {
  const user = await getCurrentUser();
  if (!user) redirect("/login", RedirectType.replace);
  addNote({ content: "Prima nota", title: "Titolo" });
  // const loadNotes = useLoadNotes();

  // useEffect(() => {
  //   loadNotes();
  // }, [loadNotes]);

  return (
    <div className="grid grid-cols-[3fr_10fr] divide-solid divide-x divide-y grid-rows-[50px_50px_1fr_50px] layout">
      <NotesMenu />
      <Heading />
      <EditorSection />
    </div>
  );
}
