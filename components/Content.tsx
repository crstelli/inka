"use client";

import { useEditor, EditorContent, useEditorState } from "@tiptap/react";
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

  const editorState = useEditorState({
    editor,

    selector: ({ editor }) => {
      if (!editor) return null;

      return {
        isH1: editor.isActive("heading", { level: 1 }),
        isH2: editor.isActive("heading", { level: 2 }),
        isH3: editor.isActive("heading", { level: 3 }),

        isBold: editor.isActive("bold"),
        isItalic: editor.isActive("italic"),
        isStrike: editor.isActive("strike"),
      };
    },
  });

  if (!editor) return null;

  return (
    <div className="row-span-2 w-full overflow-auto">
      {editor && (
        <FloatingMenu editor={editor} className="-translate-y-full">
          <ButtonGroup className="shadow-[0px_0px_50px_5px_#181c1f]">
            <ButtonGroup>
              <Button
                variant={editorState?.isH1 ? "default" : "secondary"}
                className="border"
                onClick={() => editor.chain().toggleHeading({ level: 1 }).focus().run()}
              >
                Head 1
              </Button>
              <Button
                variant={editorState?.isH2 ? "default" : "secondary"}
                className="border"
                onClick={() => editor.chain().toggleHeading({ level: 2 }).focus().run()}
              >
                Head 2
              </Button>
              <Button
                variant={editorState?.isH3 ? "default" : "secondary"}
                className="border"
                onClick={() => editor.chain().toggleHeading({ level: 3 }).focus().run()}
              >
                Head 3
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button
                variant={editorState?.isBold ? "default" : "secondary"}
                className={`font-bold border`}
                onClick={() => editor.chain().focus().toggleBold().run()}
                aria-label="Heading"
              >
                B
              </Button>
              <Button
                variant={editorState?.isItalic ? "default" : "secondary"}
                className="italic border"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                aria-label="Heading"
              >
                I
              </Button>
              <Button
                variant={editorState?.isStrike ? "default" : "secondary"}
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
