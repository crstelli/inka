"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { FloatingMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "./ui/button";

function Content() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Welcome to Inka</p>",
    editorProps: {
      attributes: {
        class: "p-4",
      },
    },

    immediatelyRender: false,
  });

  return (
    <div className="row-span-2">
      {editor && (
        <FloatingMenu editor={editor}>
          <Button size={"sm"}>H1</Button>
        </FloatingMenu>
      )}
      <EditorContent editor={editor} />
    </div>
  );
}

export { Content };
