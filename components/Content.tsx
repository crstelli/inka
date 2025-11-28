"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { FloatingMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

function Content() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<h1>Welcome to Inka</h1>",
    editorProps: {
      attributes: {
        class: "p-10",
      },
    },

    immediatelyRender: false,
  });

  return (
    <div className="row-span-2 w-full overflow-auto">
      {editor && (
        <FloatingMenu editor={editor} className="-translate-y-1/2">
          <ButtonGroup>
            <ButtonGroup>
              <Button onClick={() => editor.chain().toggleHeading({ level: 1 }).focus().run()}>H1</Button>
              <Button onClick={() => editor.chain().toggleHeading({ level: 2 }).focus().run()}>H2</Button>
              <Button onClick={() => editor.chain().toggleHeading({ level: 3 }).focus().run()}>H3</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button onClick={() => editor.chain().focus().toggleBold().run()} aria-label="Heading">
                B
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
