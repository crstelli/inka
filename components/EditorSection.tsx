"use client";

import { useNote } from "@/hooks/useNote";

import { Breadcrumb } from "@/components/Breadcrumb";
import { EditorHeading } from "@/components/EditorHeading";
import dynamic from "next/dynamic";
import { Spinner } from "@/components/Spinner";

const Editor = dynamic(() => import("@/components/Editor"), {
  ssr: false,
  loading: () => (
    <div className="p-4 flex items-center justify-center">
      <Spinner size="size-8" />
    </div>
  ),
});

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
