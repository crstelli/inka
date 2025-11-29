"use client";

import { useNotes } from "@/stores/notesStore";
import { useState } from "react";

import { useEditor, EditorContent } from "@tiptap/react";
import { Placeholder } from "@tiptap/extensions";
import StarterKit from "@tiptap/starter-kit";

import { FloatingMenu } from "./FloatingMenu";
import { Button } from "./ui/button";
import { createNote } from "@/lib/createNote";

function Content() {
  const [showSave, setShowSave] = useState(false);
  const { currentNote, addNote } = useNotes();

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

  function handleSave() {
    const content = editor?.getJSON();
    if (!content || !editor) return;

    const newNote = createNote({ content });

    addNote(newNote);
    editor.commands.clearContent();
  }

  return (
    <div className="row-span-2 w-full overflow-auto relative">
      {editor && <FloatingMenu editor={editor} />}
      <EditorContent editor={editor} />

      {showSave && (
        <Button onClick={handleSave} className="absolute top-3 right-3">
          Save
        </Button>
      )}
    </div>
  );
}

export { Content };
