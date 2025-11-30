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
import { ContentHeading } from "@/components/ContentHeading";

function Content() {
  const [showSave, setShowSave] = useState(false);

  const { currentNote, clearCurrentNote, updateNote, addNote } = useNotes();
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
        class: "py-8 px-16",
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

    if (currentNote) {
      updateNote(currentNote.id, content);
      clearCurrentNote();
    } else {
      const newNote = createNote({ content });
      addNote(newNote);
    }

    clearEditor();
  }

  // Sync editor with editorStore.
  useEffect(() => {
    if (editor) setEditor(editor);
  }, [editor, setEditor]);

  // Sync editor with current selected note.
  useEffect(() => {
    if (currentNote) setContent(currentNote?.content);
    else clearEditor();
  }, [clearEditor, currentNote, setContent]);

  if (!editor) return null;

  return (
    <>
      <ContentHeading>{showSave && <Button onClick={handleSave}>Save</Button>}</ContentHeading>
      <div className="w-full overflow-auto">
        {editor && <FloatingMenu editor={editor} />}
        <EditorContent editor={editor} />
      </div>
    </>
  );
}

export { Content };
