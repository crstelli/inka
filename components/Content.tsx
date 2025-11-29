"use client";

import { useState } from "react";

import { useEditor, EditorContent } from "@tiptap/react";
import { Placeholder } from "@tiptap/extensions";
import StarterKit from "@tiptap/starter-kit";

import { FloatingMenu } from "./FloatingMenu";
import { Button } from "./ui/button";

function Content() {
  const [showSave, setShowSave] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start by writing something...",
      }),
    ],
    editorProps: {
      attributes: {
        class: "p-12",
      },
    },

    onUpdate({ editor }) {
      setShowSave(!!editor.state.doc.textContent.length);
    },

    immediatelyRender: false,
  });
  if (!editor) return null;

  return (
    <div className="row-span-2 w-full overflow-auto relative">
      {editor && <FloatingMenu editor={editor} />}
      <EditorContent editor={editor} />

      {showSave && <Button className="absolute top-3 right-3">Save</Button>}
    </div>
  );
}

export { Content };
