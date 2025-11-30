"use client";

import { useEffect } from "react";

import { useCurrentNote } from "@/stores/notesStore";
import { useClearEditor, useSetContent, useSetEditor } from "@/stores/editorStore";

import { useEditor as useEditorApi, EditorContent } from "@tiptap/react";
import { Placeholder } from "@tiptap/extensions";
import StarterKit from "@tiptap/starter-kit";

import { FloatingMenu } from "@/components/FloatingMenu";

function Content() {
  const currentNote = useCurrentNote();

  const setEditor = useSetEditor();
  const clearEditor = useClearEditor();
  const setContent = useSetContent();

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

    immediatelyRender: false,
  });

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
    <div className="w-full overflow-auto">
      {editor && <FloatingMenu editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
}

export { Content };
