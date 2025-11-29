"use client";

import { useEditor, EditorContent, useEditorState } from "@tiptap/react";
import { Placeholder } from "@tiptap/extensions";
import StarterKit from "@tiptap/starter-kit";

import { FloatingMenu } from "./FloatingMenu";

function Content() {
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

    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <div className="row-span-2 w-full overflow-auto">
      {editor && <FloatingMenu editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
}

export { Content };
