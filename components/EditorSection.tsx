import { Breadcrumb } from "@/components/Breadcrumb";
import { Editor } from "@/components/Editor";
import { EditorHeading } from "@/components/EditorHeading";

function EditorSection() {
  return (
    <>
      <EditorHeading />
      <Editor />
      <Breadcrumb />
    </>
  );
}

export { EditorSection };
