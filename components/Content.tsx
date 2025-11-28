"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { FloatingMenu } from "@tiptap/react/menus";
import { Placeholder } from "@tiptap/extensions";
import StarterKit from "@tiptap/starter-kit";

import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";

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

  return (
    <div className="row-span-2 w-full overflow-auto">
      {editor && (
        <FloatingMenu editor={editor} className="-translate-y-full">
          <ButtonGroup>
            <ButtonGroup>
              <Button variant="outline" onClick={() => editor.chain().toggleHeading({ level: 1 }).focus().run()}>
                Head 1
              </Button>
              <Button variant="outline" onClick={() => editor.chain().toggleHeading({ level: 2 }).focus().run()}>
                Head 2
              </Button>
              <Button variant="outline" onClick={() => editor.chain().toggleHeading({ level: 3 }).focus().run()}>
                Head 3
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button
                variant="outline"
                className="font-bold"
                onClick={() => editor.chain().focus().toggleBold().run()}
                aria-label="Heading"
              >
                B
              </Button>
              <Button
                variant="outline"
                className="italic"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                aria-label="Heading"
              >
                I
              </Button>
              <Button
                variant="outline"
                className="line-through"
                onClick={() => editor.chain().focus().toggleStrike().run()}
                aria-label="Heading"
              >
                S
              </Button>
            </ButtonGroup>
          </ButtonGroup>
        </FloatingMenu>
      )}
      <EditorContent editor={editor} />
    </div>
  );
}

export { Content };
