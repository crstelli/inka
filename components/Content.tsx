"use client";

import { useEffect, useState } from "react";

import { useNotes } from "@/stores/notesStore";
import { useEditor } from "@/stores/editorStore";

import { createNote } from "@/lib/createNote";

import { useEditor as useEditorApi, EditorContent } from "@tiptap/react";
import { Placeholder } from "@tiptap/extensions";
import StarterKit from "@tiptap/starter-kit";

import { FloatingMenu } from "@/components/FloatingMenu";
import { Button } from "@/components/ui/button";

function Content() {
  const [showSave, setShowSave] = useState(false);

  const { currentNote, addNote } = useNotes();
  const { setEditor, clearEditor, setContent } = useEditor();

  const editor = useEditorApi({
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

  function handleSave() {
    const content = editor?.getJSON();
    if (!content || !editor) return;

    const newNote = createNote({ content });

    addNote(newNote);
    clearEditor();
  }

  useEffect(() => {
    if (editor) setEditor(editor);
  }, [editor, setEditor]);

  useEffect(() => {
    if (currentNote) setContent(currentNote?.content);
    else clearEditor();
  }, [clearEditor, currentNote, setContent]);

  if (!editor) return null;

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
