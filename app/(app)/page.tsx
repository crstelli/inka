// import { useEffect } from "react";
// import { useLoadNotes } from "@/stores/notesStore";
import prisma from "@/lib/prima";

import { NotesMenu } from "@/components/NotesMenu";
import { Heading } from "@/components/Heading";
import { EditorSection } from "@/components/EditorSection";

export default async function Page() {
  // const loadNotes = useLoadNotes();

  // useEffect(() => {
  //   loadNotes();
  // }, [loadNotes]);

  // const user = await prisma.user.create({ data: { email: "giuseppe@crescitelli.dev", name: "Giuseppe" } });

  const user = await prisma.user.create({ data: { email: "giuseppe@crescitelli.dev", name: "Giuseppe" } });

  return (
    <div className="grid grid-cols-[3fr_10fr] divide-solid divide-x divide-y grid-rows-[50px_50px_1fr_50px] layout">
      <NotesMenu />
      <Heading />
      <EditorSection />
    </div>
  );
}
