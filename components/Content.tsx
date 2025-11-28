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
          <ButtonGroup className="shadow-[0px_0px_50px_5px_#181c1f]">
            <ButtonGroup>
              <Button
                variant="secondary"
                className="border"
                onClick={() => editor.chain().toggleHeading({ level: 1 }).focus().run()}
              >
                Head 1
              </Button>
              <Button
                variant="secondary"
                className="border"
                onClick={() => editor.chain().toggleHeading({ level: 2 }).focus().run()}
              >
                Head 2
              </Button>
              <Button
                variant="secondary"
                className="border"
                onClick={() => editor.chain().toggleHeading({ level: 3 }).focus().run()}
              >
                Head 3
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button
                variant="secondary"
                className="font-bold border"
                onClick={() => editor.chain().focus().toggleBold().run()}
                aria-label="Heading"
              >
                B
              </Button>
              <Button
                variant="secondary"
                className="italic border"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                aria-label="Heading"
              >
                I
              </Button>
              <Button
                variant="secondary"
                className="line-through border"
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
