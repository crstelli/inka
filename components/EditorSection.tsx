"use client";

import { Breadcrumb } from "@/components/Breadcrumb";
import { Editor } from "@/components/Editor";
import { EditorHeading } from "@/components/EditorHeading";
import { useNote } from "@/hooks/useNote";

function EditorSection() {
  const note = useNote();

  return (
    <section className="grid-rows-[50px_1fr_50px] grid divide-y">
      <EditorHeading key={note?.id} note={note} />
      <Editor note={note} />
      <Breadcrumb />
    </section>
  );
}

export { EditorSection };
